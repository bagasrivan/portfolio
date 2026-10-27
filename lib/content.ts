export type Topic = "about" | "projects" | "experience" | "skills" | "contact";
export const topics: Topic[] = [
  "about",
  "projects",
  "experience",
  "skills",
  "contact",
];

// Kata kunci untuk mencocokkan pertanyaan yang diketik bebas
export const keywords: Record<Topic, string[]> = {
  about: [
    "about",
    "who",
    "siapa",
    "tentang",
    "perkenalan",
    "introduce",
    "education",
    "pendidikan",
    "kuliah",
    "study",
    "gpa",
    "ipk",
  ],
  projects: [
    "project",
    "proyek",
    "karya",
    "built",
    "aplikasi",
    "app",
    "thesis",
    "skripsi",
    "journal",
    "jurnal",
    "research",
    "riset",
  ],
  experience: [
    "experience",
    "pengalaman",
    "work",
    "kerja",
    "intern",
    "magang",
    "career",
    "himakom",
    "organisasi",
    "organization",
  ],
  skills: [
    "skill",
    "keahlian",
    "tech",
    "stack",
    "programming",
    "python",
    "flutter",
    "certificate",
    "sertifikat",
    "tools",
    "database",
  ],
  contact: [
    "contact",
    "kontak",
    "email",
    "hire",
    "hubungi",
    "reach",
    "github",
    "linkedin",
  ],
};

export const content = {
  en: {
    greeting: "Bagaskara Ridho Vandio",
    subtitle: "Welcome to My Portfolio, let's dive in!",
    placeholder: "Ask me anything...",
    send: "Send",
    cv: "Download Resume",
    role: "AI Engineer",
    newChat: "New chat",
    labels: {
      about: "About Me",
      projects: "Projects",
      experience: "Experience",
      skills: "Skills",
      contact: "Contact",
    },
    questions: {
      about: "Who are you?",
      projects: "Tell me about your projects",
      experience: "What’s your experience?",
      skills: "What are your skills?",
      contact: "How can I contact you?",
    },
    answers: {
      about:
        "I’m Bagaskara Ridho Vandio, a Computer Science graduate (Data Science concentration) from Universitas Lambung Mangkurat, 2022–2026, with a GPA of 3.64/4.00. I’m aiming for a career as an AI Engineer, and I’ve published a SINTA 2 journal article on deep learning for image classification. I’m based in Bekasi, Indonesia.",
      projects:
        "• SiBisa: a fullstack inventory and monitoring app built with Flutter (Android and iOS) during my internship at BMKG Syamsudin Noor, with REST API integration and Provider state management.\n• HairLab: my Bangkit capstone project that detects face shape and recommends hairstyles. I was the backend developer, connecting the app to cloud and machine learning APIs.\n• Research: “Evaluating CNN Robustness for Face Mask Classification under Environmental Variations”, published in JESSI (SINTA 2). My thesis compares ResNet50 and MobileNetV3 using transfer learning.",
      experience:
        "• Data Labeling, Universitas Lambung Mangkurat, freelance (May 2026): annotated an oil palm tree image dataset with AnyLabeling and reviewed labels to keep the training data clean.\n• Mobile Developer Intern, BMKG Syamsudin Noor (Feb–May 2025): built SiBisa with Flutter.\n• Mobile Development Cohort, Bangkit Academy (Sep–Dec 2024): backend developer for the HairLab capstone.\n• IT Support Intern, CV Iqromaya Global Mandiri (Nov–Dec 2023): built a landing page to help South Kalimantan MSMEs with digital marketing.\n• HIMAKOM, Cadre Division (May–Dec 2024): head organizer of a training event with 98% attendance.",
      skills:
        "Programming: Python, Java, JavaScript, SQL, Kotlin, Dart.\nFrameworks and libraries: Flutter, Pandas, NumPy, Scikit-learn, TensorFlow/Keras. Database: MySQL.\nDelivery: Git, GitHub, REST API integration, model deployment and evaluation.\nTools: VS Code, Android Studio, Jupyter Notebook, Google Colab, RunPod, Postman.\nCertificates include Introduction to Large Language Models, Applied Machine Learning for Android Developer, and AWS Cloud Practitioner Essentials.\nLanguages: Indonesian, English.",
      contact:
        "Email: bagaskaravandio@gmail.com\nGitHub: github.com/bagasrivan\nI’m open to AI Engineer opportunities.",
    },
    fallback:
      "I’m not sure about that yet. Try asking about my projects, experience, skills, or how to contact me.",
  },
  id: {
    greeting: "Bagaskara Ridho Vandio",
    subtitle: "Selamat datang di portofolioku, yuk cari tau lebih lanjut!",
    placeholder: "Tanyakan sesuatu...",
    send: "Kirim",
    cv: "Unduh Resume",
    role: "AI Engineer",
    newChat: "Percakapan baru",
    labels: {
      about: "Tentang Saya",
      projects: "Project",
      experience: "Pengalaman",
      skills: "Skill",
      contact: "Kontak",
    },
    questions: {
      about: "Kamu siapa?",
      projects: "Ceritakan project-mu",
      experience: "Apa saja pengalamanmu?",
      skills: "Apa saja skill-mu?",
      contact: "Bagaimana cara menghubungimu?",
    },
    answers: {
      about:
        "Aku Bagaskara Ridho Vandio, lulusan S1 Ilmu Komputer (konsentrasi Data Science) Universitas Lambung Mangkurat angkatan 2022–2026, dengan IPK 3,64/4,00. Aku bercita-cita berkarier sebagai AI Engineer, dan sudah menerbitkan artikel jurnal terakreditasi SINTA 2 tentang deep learning untuk klasifikasi gambar. Aku tinggal di Bekasi.",
      projects:
        "• SiBisa: aplikasi inventaris dan monitoring fullstack berbasis Flutter (Android dan iOS) yang kubuat saat magang di BMKG Syamsudin Noor, dengan integrasi REST API dan state management Provider.\n• HairLab: proyek capstone Bangkit yang mendeteksi bentuk wajah dan merekomendasikan gaya rambut. Aku backend developer-nya, menghubungkan aplikasi dengan API cloud dan machine learning.\n• Riset: “Evaluating CNN Robustness for Face Mask Classification under Environmental Variations”, terbit di JESSI (SINTA 2). Skripsiku membandingkan ResNet50 dan MobileNetV3 dengan transfer learning.",
      experience:
        "• Data Labeling, Universitas Lambung Mangkurat, freelance (Mei 2026): menganotasi dataset gambar pohon kelapa sawit dengan AnyLabeling dan mengecek ulang label agar data latih tetap bersih.\n• Mobile Developer Intern, BMKG Syamsudin Noor (Feb–Mei 2025): membangun SiBisa dengan Flutter.\n• Mobile Development Cohort, Bangkit Academy (Sep–Des 2024): backend developer proyek capstone HairLab.\n• IT Support Intern, CV Iqromaya Global Mandiri (Nov–Des 2023): membuat landing page untuk membantu UMKM Kalimantan Selatan dalam pemasaran digital.\n• HIMAKOM, Divisi Kaderisasi (Mei–Des 2024): ketua pelaksana acara pelatihan dengan tingkat kehadiran 98%.",
      skills:
        "Pemrograman: Python, Java, JavaScript, SQL, Kotlin, Dart.\nFramework dan library: Flutter, Pandas, NumPy, Scikit-learn, TensorFlow/Keras. Database: MySQL.\nDelivery: Git, GitHub, integrasi REST API, deployment dan evaluasi model.\nTools: VS Code, Android Studio, Jupyter Notebook, Google Colab, RunPod, Postman.\nSertifikat antara lain Introduction to Large Language Models, Applied Machine Learning for Android Developer, dan AWS Cloud Practitioner Essentials.\nBahasa: Indonesia, Inggris.",
      contact:
        "Email: bagaskaravandio@gmail.com\nGitHub: github.com/bagasrivan\nAku terbuka untuk peluang sebagai AI Engineer.",
    },
    fallback:
      "Aku belum tahu soal itu. Coba tanya soal project, pengalaman, skill, atau cara menghubungiku.",
  },
};

export type Lang = keyof typeof content;
export type Message =
  | { role: "user"; text: string }
  | { role: "bot"; topic: Topic | "fallback" };