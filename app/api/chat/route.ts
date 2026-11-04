import { GoogleGenAI, type GenerateContentResponse } from "@google/genai";
import { buildSystemPrompt } from "@/lib/chat-context";

// Klien dibuat saat dibutuhkan, bukan saat build
let client: GoogleGenAI | null = null;
function getClient() {
  client ??= new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  return client;
}

// Model utama, lalu cadangan jika utama gagal atau kena batas
const MODELS = [
  process.env.GEMINI_MODEL ?? "gemini-3.5-flash-lite",
  "gemini-3.6-flash-lite",
];

const SYSTEM = buildSystemPrompt();
const MAX_MESSAGES = 10;
const MAX_CHARS = 800;

type ChatMessage = { role?: string; content?: unknown };

// Pembatas sederhana per IP (cukup untuk portfolio; tidak permanen di serverless)
const hits = new Map<string, number[]>();
function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < 60_000);
  recent.push(now);
  hits.set(ip, recent);
  return recent.length > 8; // maksimal 8 pesan per menit
}

function toResponse(
  first: IteratorResult<GenerateContentResponse>,
  it: AsyncIterator<GenerateContentResponse>,
) {
  const encoder = new TextEncoder();
  const body = new ReadableStream({
    async start(controller) {
      try {
        let r = first;
        while (!r.done) {
          const text = r.value.text;
          if (text) controller.enqueue(encoder.encode(text));
          r = await it.next();
        }
      } catch {
        controller.enqueue(encoder.encode("\n\n(Maaf, jawaban terputus.)"));
      } finally {
        controller.close();
      }
    },
  });
  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

export async function POST(req: Request) {
  if (!process.env.GEMINI_API_KEY) {
    return new Response("Server belum dikonfigurasi", { status: 500 });
  }
  const ai = getClient();

  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (limited(ip)) {
    return new Response("Terlalu banyak permintaan", { status: 429 });
  }

  let raw: unknown;
  try {
    raw = (await req.json()).messages;
  } catch {
    return new Response("Bad request", { status: 400 });
  }
  if (!Array.isArray(raw) || raw.length === 0) {
    return new Response("Bad request", { status: 400 });
  }

  const contents = raw.slice(-MAX_MESSAGES).map((m: ChatMessage) => ({
    role: m?.role === "assistant" ? "model" : "user",
    parts: [{ text: String(m?.content ?? "").slice(0, MAX_CHARS) }],
  }));
  // Gemini mensyaratkan percakapan diawali pesan user
  while (contents.length && contents[0].role === "model") contents.shift();
  if (contents.length === 0) {
    return new Response("Bad request", { status: 400 });
  }

  for (const model of MODELS) {
    try {
      const stream = await ai.models.generateContentStream({
        model,
        contents,
        config: {
          systemInstruction: SYSTEM,
          maxOutputTokens: 800,
          temperature: 0.4,
        },
      });
      const it = stream[Symbol.asyncIterator]();
      const first = await it.next(); // gagal di sini = coba model cadangan
      if (first.done) throw new Error("Respons kosong");
      return toResponse(first, it);
    } catch (err) {
      console.error(`[chat] ${model} gagal:`, err);
    }
  }

  return new Response("Model tidak tersedia", { status: 503 });
}