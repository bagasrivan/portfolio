import type { Lang } from "@/lib/content";

export type Category = "Software Engineering" | "AI/ML/Data" | "Publication";

export type Project = {
  slug: string;
  title: string;
  year: number;
  category: Category;
  image: string;
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  confidential?: boolean;
  text: Record<
    Lang,
    {
      description: string;
      summary: string;
      results?: string;
      learnings?: string;
    }
  >;
};

export const projects: Project[] = [
  {
    slug: "simpulkan",
    title: "Simpulkan",
    year: 2026,
    category: "AI/ML/Data",
    image: "/projects/Simpulkan.jpg",
    liveUrl: "https://simpulkan.streamlit.app/?",
    repoUrl: "https://github.com/bagasrivan/Simpulkan",
    tech: [
      "Streamlit",
      "Large Language Models",
      "RAG",
      "LangChain",
      "Gemini API",
    ],
    text: {
      en: {
        description:
          "A chatbot that answers solely from an uploaded PDF, in Indonesian or English, with numbered citations that point to the source page.",
        summary:
          "Simpulkan is a question-answering chatbot for PDF documents that answers solely from the uploaded file, whether a paper, a course module, or a report, in Indonesian or English. Its key features include numbered citations that reference the original page and the passage behind each answer, a “not found in the document” response in place of speculative answers, and advanced settings for model, chunk size, and number of retrieved chunks, complete with tooltips. The API key is stored on the server, with limits on file size, page count, and questions per session to protect the quota. The application addresses the need to work through long documents efficiently without losing the ability to verify each answer.",
        learnings:
          "A reliable RAG application depends not only on answer quality but also on recognizing the limits of the available information, so the “not found” response and source citations were treated as core features rather than additions. The key is stored on the server and usage is capped per session.",
      },
      id: {
        description:
          "Chatbot yang menjawab hanya berdasarkan isi PDF yang diunggah, dalam bahasa Indonesia atau Inggris, disertai sitasi bernomor yang merujuk ke halaman sumber.",
        summary:
          "Simpulkan adalah chatbot tanya jawab untuk dokumen PDF yang menjawab hanya berdasarkan file yang diunggah, baik makalah, modul perkuliahan, maupun laporan, dalam bahasa Indonesia atau Inggris. Fitur utamanya mencakup sitasi bernomor yang merujuk ke halaman asli dan kutipan di balik setiap jawaban, respons “tidak ditemukan di dokumen” sebagai pengganti jawaban spekulatif, serta pengaturan lanjutan untuk model, ukuran chunk, dan jumlah chunk yang diambil, lengkap dengan tooltip. API key disimpan di sisi server, dengan batasan ukuran file, jumlah halaman, dan jumlah pertanyaan per sesi untuk menjaga kuota. Aplikasi ini menjawab kebutuhan membaca dokumen panjang secara efisien tanpa kehilangan kemampuan memverifikasi setiap jawaban.",
        learnings:
          "Aplikasi RAG yang andal tidak hanya bergantung pada kualitas jawaban, tetapi juga pada kemampuan mengenali batas informasi yang tersedia, sehingga respons “tidak ditemukan” dan sitasi sumber dijadikan fitur inti, bukan tambahan. Key disimpan di server dan pemakaian dibatasi per sesi.",
      },
    },
  },
  {
    slug: "handakbajalan",
    title: "Handak Bajalan",
    year: 2026,
    category: "AI/ML/Data",
    image: "/projects/Handak Bajalan.jpg",
    liveUrl: "https://handak-bajalan.streamlit.app/?",
    repoUrl: "https://github.com/bagasrivan/Handak-Bajalan",
    tech: ["Streamlit", "Large Language Models", "Gemini API"],
    text: {
      en: {
        description:
          "An AI travel assistant that acts as a local guide to South Kalimantan, with Banjar dialect options, tailored itineraries, and a Google Search fact-check mode.",
        summary:
          "Handak Bajalan (Banjar for “want to travel”) is an AI travel assistant that acts as a local guide to South Kalimantan, developed as the final assignment for “LLM-Based Tools and Gemini API Integration for Data Scientists” (Maju Bareng AI with Hacktiv8). Its key features include a selectable language style (thick Banjar, light Banjar, or neutral Indonesian), coverage of 13 regencies and cities with five travel styles, conversation memory that preserves context across follow-up questions, and a fact-check mode that verifies answers through Google Search and displays the sources. The assistant recommends destinations, cuisine, and souvenirs, then builds itineraries around the user’s preferences.",
        learnings:
          "Gemini API responses can be slow, and Google Search grounding does not always succeed. A fallback chain handles these failures: the request is retried with grounding, then answered without it, and finally routed to a backup model, so the application keeps responding instead of failing. The project also showed the importance of prompt structure: separating dialect, expertise, answer format, anti-hallucination rules, and topic limits makes the assistant’s behavior far easier to control.",
      },
      id: {
        description:
          "Asisten perjalanan berbasis AI yang berperan sebagai pemandu lokal Kalimantan Selatan, dengan pilihan logat Banjar, rencana perjalanan yang disesuaikan, dan mode cek fakta melalui Google Search.",
        summary:
          "Handak Bajalan (bahasa Banjar untuk “ingin bepergian”) adalah asisten perjalanan berbasis AI yang berperan sebagai pemandu lokal Kalimantan Selatan, dikembangkan sebagai tugas akhir kelas “LLM-Based Tools and Gemini API Integration for Data Scientists” (Maju Bareng AI bersama Hacktiv8). Fitur utamanya mencakup pilihan gaya bahasa (Banjar kental, Banjar ringan, atau Indonesia netral), cakupan 13 kabupaten dan kota dengan lima gaya berlibur, memori percakapan yang menjaga konteks pada pertanyaan lanjutan, serta mode cek fakta yang memverifikasi jawaban melalui Google Search dan menampilkan sumbernya. Asisten ini merekomendasikan destinasi, kuliner, dan oleh-oleh, lalu menyusun rencana perjalanan sesuai preferensi pengguna.",
        learnings:
          "Respons Gemini API dapat lambat, dan grounding Google Search tidak selalu berhasil. Rantai cadangan menangani kegagalan tersebut: permintaan dicoba ulang dengan grounding, kemudian dijawab tanpa grounding, dan terakhir dialihkan ke model cadangan, sehingga aplikasi tetap merespons dan tidak langsung gagal. Proyek ini juga menunjukkan pentingnya struktur prompt: pemisahan logat, keahlian, format jawaban, aturan anti-halusinasi, dan batasan topik membuat perilaku asisten jauh lebih mudah dikendalikan.",
      },
    },
  },
  {
    slug: "jessi",
    title: "Sinta 2 Journal Publication",
    year: 2026,
    category: "Publication",
    image: "/projects/Jessi.jpg",
    liveUrl: "https://lnkd.in/ga8CC4TF",
    repoUrl: "https://github.com/bagasrivan/cnn-robustnest-mask-classification",
    tech: [
      "Computer Vision",
      "Deep Learning",
      "TensorFlow",
      "Model Evaluation",
    ],
    text: {
      en: {
        description:
          "A comparison of ResNet50 and MobileNetV3-Large for face mask classification under varying environmental conditions, weighing robustness against computational efficiency. Published in a SINTA 2 journal.",
        summary:
          "This research examines the robustness and computational efficiency of two CNN architectures, ResNet50 and MobileNetV3-Large, for multi-class face mask classification under controlled environmental variations. Both models were trained with transfer learning and compared on accuracy and computational efficiency to examine the trade-off between a heavy architecture and a lightweight one designed for resource-limited devices. The results were published in the Journal of Embedded System Security and Intelligent Systems (JESSI), a SINTA 2 accredited journal, in June 2026.",
        learnings:
          "Testing under controlled environmental variations requires a consistent experimental design so that comparisons between models remain fair. The research also reinforced that a model’s readiness should not be judged by accuracy alone: robustness to changing conditions and computational efficiency matter, especially for deployment on resource-limited devices.",
      },
      id: {
        description:
          "Perbandingan ResNet50 dan MobileNetV3-Large untuk klasifikasi masker wajah pada kondisi lingkungan yang bervariasi, menimbang ketahanan model terhadap efisiensi komputasi. Terbit di jurnal SINTA 2.",
        summary:
          "Penelitian ini mengkaji ketahanan dan efisiensi komputasi dua arsitektur CNN, yaitu ResNet50 dan MobileNetV3-Large, dalam klasifikasi masker wajah multikelas pada berbagai variasi lingkungan yang terkontrol. Kedua model dilatih dengan transfer learning dan dibandingkan dari sisi akurasi serta efisiensi komputasi untuk melihat trade-off antara arsitektur berat dan arsitektur ringan yang dirancang untuk perangkat dengan sumber daya terbatas. Hasilnya dipublikasikan di Journal of Embedded System Security and Intelligent Systems (JESSI), jurnal terakreditasi SINTA 2, pada Juni 2026.",
        learnings:
          "Pengujian pada variasi lingkungan yang terkontrol menuntut desain eksperimen yang konsisten agar perbandingan antarmodel tetap adil. Penelitian ini juga menegaskan bahwa kesiapan sebuah model tidak cukup dinilai dari akurasi saja: ketahanan terhadap perubahan kondisi dan efisiensi komputasi perlu dipertimbangkan, terutama untuk penggunaan di perangkat dengan sumber daya terbatas.",
      },
    },
  },
  {
    slug: "sibisa",
    title: "SiBisa",
    year: 2025,
    category: "Software Engineering",
    image: "/projects/SiBisa.jpg",
    repoUrl: "https://github.com/bagasrivan/BMKG-Inventory-App",
    tech: ["Flutter", "Dart", "Figma", "REST API"],
    text: {
      en: {
        description:
          "Flutter-based inventory and monitoring app that digitizes how BMKG records and tracks its items, developed end to end during an internship for Android and iOS.",
        summary:
          "SiBisa (Stamet Banjarmasin Inventory System) is a mobile application that digitizes how BMKG records, monitors, and manages its inventory items, developed end to end (frontend and backend) during an internship at BMKG Syamsudin Noor, from interface design through to a working Flutter application. It runs on Android and iOS from a single codebase and uses Provider for state management, named-route navigation with Hero transitions, and forms for data entry. REST API integration (GET, POST, PUT) manages large-scale data, including meteorological, climatological, and geophysical data, displayed accurately and real time.",
        learnings:
          "Displaying large-scale data accurately and real time requires tidy state management and API calls so the interface stays responsive. Handling frontend and backend together also strengthened the ability to join interface design and data integration in a single workflow, while keeping the app running smoothly on both Android and iOS.",
      },
      id: {
        description:
          "Aplikasi inventaris dan monitoring berbasis Flutter yang mendigitalkan pencatatan dan pelacakan barang di BMKG, dikembangkan secara end-to-end selama magang untuk Android dan iOS.",
        summary:
          "SiBisa (Stamet Banjarmasin Inventory System) adalah aplikasi mobile yang mendigitalkan pencatatan, pemantauan, dan pengelolaan barang inventaris di BMKG, dikembangkan secara end-to-end (frontend dan backend) selama magang di BMKG Syamsudin Noor, mulai dari perancangan antarmuka hingga menjadi aplikasi Flutter yang berfungsi. Aplikasi berjalan di Android dan iOS dari satu codebase, dengan Provider untuk state management, navigasi named route dengan animasi Hero, serta form untuk input data. Integrasi REST API (GET, POST, PUT) digunakan untuk mengelola data berskala besar, termasuk data meteorologi, klimatologi, dan geofisika, yang ditampilkan secara akurat dan real time.",
        learnings:
          "Menampilkan data berskala besar secara akurat dan real time menuntut pengelolaan state dan pemanggilan API yang rapi agar tampilan tetap responsif. Mengerjakan frontend dan backend sekaligus juga melatih kemampuan menyatukan perancangan antarmuka dan integrasi data dalam satu alur pengembangan, kemudian memastikan aplikasi berjalan mulus di Android maupun iOS.",
      },
    },
  },
  {
    slug: "hairlab",
    title: "HairLab",
    year: 2024,
    category: "Software Engineering",
    image: "/projects/HairLab.jpg",
    repoUrl: "https://github.com/bagasrivan/Capstone",
    tech: ["Android Studio", "Library Android", "Kotlin", "Figma", "REST API"],
    text: {
      en: {
        description:
          "Bangkit Academy capstone app that detects face shape from a photo and recommends suitable hairstyles, with cloud and machine learning API integration on the Android side.",
        summary:
          "HairLab is a Bangkit Academy capstone project: an Android application that identifies a user’s face shape from an uploaded photo and recommends suitable hairstyles. The main contribution focused on integration, connecting the app with cloud services and machine learning APIs so that photos, predictions, and recommendations move smoothly between the app and the models. The foundation came from the Bangkit Mobile Development cohort, from Material Design and Room to Retrofit, OkHttp, and Coroutines.",
        learnings:
          "Connecting an Android app to cloud services and machine learning APIs requires handling photo uploads and prediction responses asynchronously so the app stays responsive. As a team capstone, the project also built practice in aligning data formats between the mobile, cloud, and machine learning sides so that communication between services runs smoothly.",
      },
      id: {
        description:
          "Aplikasi capstone Bangkit Academy yang mengenali bentuk wajah dari foto dan merekomendasikan gaya rambut yang sesuai, dengan integrasi API cloud dan machine learning di sisi Android.",
        summary:
          "HairLab adalah proyek capstone Bangkit Academy berupa aplikasi Android yang mengenali bentuk wajah dari foto yang diunggah pengguna, lalu merekomendasikan gaya rambut yang sesuai. Kontribusi utama berfokus pada integrasi, yaitu menghubungkan aplikasi dengan layanan cloud dan API machine learning agar foto, hasil prediksi, dan rekomendasi dapat berpindah dengan lancar antara aplikasi dan model. Fondasinya berasal dari kelas Mobile Development Bangkit, mulai dari Material Design dan Room hingga Retrofit, OkHttp, dan Coroutines.",
        learnings:
          "Menghubungkan aplikasi Android dengan layanan cloud dan API machine learning menuntut pengelolaan unggahan foto dan respons prediksi secara asinkron agar aplikasi tetap responsif. Sebagai capstone tim, proyek ini juga melatih penyelarasan format data antara sisi mobile, cloud, dan machine learning agar komunikasi antar layanan berjalan lancar.",
      },
    },
  },
];

export const projectsContent: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    all: string;
    categories: Record<Category, string>;
    more: string;
    visit: string;
    code: string;
    back: string;
    summary: string;
    tech: string;
    results: string;
    learnings: string;
    confidential: string;
    notFound: string;
    empty: string;
  }
> = {
  en: {
    eyebrow: "Projects",
    title: "All Projects",
    all: "All",
    categories: {
      "Software Engineering": "Mobile Application",
      "AI/ML/Data": "AI/ML/Data",
      Publication: "Publication",
    },
    more: "Read more",
    visit: "Visit page",
    code: "Source code",
    back: "Projects",
    summary: "Summary",
    tech: "Technologies",
    results: "Results",
    learnings: "Challenges and Learnings",
    confidential: "Confidential project · Preview unavailable",
    notFound: "Project not found",
    empty: "No projects in this category yet.",
  },
  id: {
    eyebrow: "Proyek",
    title: "Semua Proyek",
    all: "Semua",
    categories: {
      "Software Engineering": "Aplikasi Mobile",
      "AI/ML/Data": "AI/ML/Data",
      Publication: "Publikasi",
    },
    more: "Selengkapnya",
    visit: "Lihat halaman",
    code: "Kode",
    back: "Project",
    summary: "Ringkasan",
    tech: "Teknologi",
    results: "Hasil",
    learnings: "Tantangan dan Pembelajaran",
    confidential: "Project rahasia · Pratinjau tidak tersedia",
    notFound: "Project tidak ditemukan",
    empty: "Belum ada project di kategori ini.",
  },
};