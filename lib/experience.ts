import type { Lang } from "@/lib/content";

export type Group = "work" | "social";

export type ExperienceItem = {
  id: string;
  group: Group;
  org: string;
  period: Record<Lang, string>;
  role: Record<Lang, string>;
  points: Record<Lang, string[]>;
  tech?: string[];
};

export type Committee = {
  id: string;
  year: number;
  event: string;
  role: Record<Lang, string>;
  org?: string;
  lead?: boolean;
};

export const experiences: ExperienceItem[] = [
  {
    id: "ulm-labeling",
    group: "work",
    org: "Universitas Lambung Mangkurat",
    period: { en: "May 2026", id: "Mei 2026" },
    role: { en: "Data Labeling (Freelance)", id: "Data Labeling (Freelance)" },
    points: {
      en: [
        "Annotated 900+ oil palm tree images using AnyLabeling, following the classes defined by stakeholders.",
        "Kept labeling consistent with the characteristics of the data to protect dataset quality.",
        "Reviewed labeled results to minimize classification errors in the dataset used for AI model training.",
      ],
      id: [
        "Menganotasi 900+ citra pohon kelapa sawit menggunakan AnyLabeling sesuai kelas yang ditentukan pemangku kepentingan.",
        "Menjaga konsistensi pelabelan sesuai karakteristik data demi kualitas dataset.",
        "Meninjau hasil pelabelan untuk meminimalkan kesalahan klasifikasi pada dataset yang dipakai melatih model AI.",
      ],
    },
    tech: ["AnyLabeling"],
  },
  {
    id: "bmkg",
    group: "work",
    org: "BMKG Syamsudin Noor",
    period: { en: "Feb – May 2025", id: "Feb – Mei 2025" },
    role: { en: "Mobile Developer Intern", id: "Magang Mobile Developer" },
    points: {
      en: [
        "Developed SiBisa, a fullstack inventory and monitoring app, during a 4-month internship, from UI/UX design to a working Flutter application.",
        "Tested by 6 BMKG staff members and now in use at the office.",
        "Integrated 3 REST API methods (GET, POST, PUT) to manage inventory data and display meteorological, climatological, and geophysical data in real time.",
      ],
      id: [
        "Mengembangkan SiBisa, aplikasi inventaris dan monitoring fullstack, selama magang 4 bulan, dari perancangan UI/UX hingga aplikasi Flutter yang berfungsi.",
        "Diuji oleh 6 pegawai BMKG dan kini digunakan di kantor.",
        "Mengintegrasikan 3 metode REST API (GET, POST, PUT) untuk mengelola data inventaris dan menampilkan data meteorologi, klimatologi, dan geofisika secara real time.",
      ],
    },
    tech: ["Flutter", "Dart", "Figma", "REST API"],
  },
  {
    id: "bangkit",
    group: "work",
    org: "Bangkit Academy",
    period: { en: "Sep – Dec 2024", id: "Sep – Des 2024" },
    role: { en: "Mobile Development Cohort", id: "Cohort Mobile Development" },
    points: {
      en: [
        "Completed a 4-month Mobile Development cohort led by Google, GoTo, and Traveloka, covering UI/UX, data management, networking, and asynchronous programming.",
        "Served as backend developer on the HairLab capstone, an app that detects face shape and recommends hairstyles.",
        "Integrated HairLab with cloud computing and machine learning APIs for a face-shape detection model that reached 98% accuracy, ensuring smooth data communication.",
      ],
      id: [
        "Menyelesaikan cohort Mobile Development selama 4 bulan yang dipimpin Google, GoTo, dan Traveloka, mencakup UI/UX, pengelolaan data, networking, dan pemrograman asinkron.",
        "Berperan sebagai backend developer pada capstone HairLab, aplikasi pendeteksi bentuk wajah yang merekomendasikan gaya rambut.",
        "Mengintegrasikan HairLab dengan cloud computing dan API machine learning untuk model deteksi bentuk wajah dengan akurasi 98%, sehingga komunikasi data berjalan lancar.",
      ],
    },
    tech: ["Kotlin", "Android Studio", "Cloud Computing", "REST API"],
  },
  {
    id: "iqromaya",
    group: "work",
    org: "CV Iqromaya Global Mandiri",
    period: { en: "Nov – Dec 2023", id: "Nov – Des 2023" },
    role: { en: "IT Support Intern", id: "Magang IT Support" },
    points: {
      en: [
        "Built a landing page for South Kalimantan MSMEs during a 2-month internship, supporting their digital marketing and helping improve MSME prosperity.",
      ],
      id: [
        "Membuat landing page untuk UMKM Kalimantan Selatan selama magang 2 bulan, mendukung pemasaran digital dan membantu meningkatkan kesejahteraan UMKM.",
      ],
    },
  },

  // ───────── SOCIAL ─────────
  {
    id: "event-crew",
    group: "social",
    org: "Space Team Organizer",
    period: { en: "Jun 2025 – Present", id: "Jun 2025 – Sekarang" },
    role: {
      en: "Event & Wedding Organizer Crew",
      id: "Kru Event & Wedding Organizer",
    },
    points: {
      en: [
        "Worked as crew at 16 events, from festivals and competitions to corporate and community gatherings, covering stage, logistics, VIP, gate, flow, marshal, and Liaison Officer (LO) duties.",
        "Served as crew at 7 weddings, handling guest reception, guest flow, and stopper duties.",
        "Coordinated with organizers and fellow crew to keep each event on schedule.",
      ],
      id: [
        "Menjadi kru di 16 acara, dari festival dan perlombaan hingga acara perusahaan dan kegiatan masyarakat, mencakup tugas panggung, logistik, VIP, gate, flow, marshal, dan Liaison Officer (LO).",
        "Menjadi kru di 7 pernikahan dengan tugas penerima tamu, pengatur alur tamu (flow), dan stopper.",
        "Berkoordinasi dengan penyelenggara dan sesama kru agar setiap acara berjalan sesuai jadwal.",
      ],
    },
    tech: [
      "Mp3Fest 2025",
      "MTQMN",
      "Banua Creative Festival",
      "Hari Listrik Nasional 2025",
      "Fun Run Ciputra",
      "Batola Bersholawat",
      "Hari Jadi Batola",
      "Grand Opening Sany Banjarmasin",
      "Rapat Koordinasi PLN",
      "PLN Gathering",
      "Meeting PKK Barito Kuala",
      "MTQN Provinsi Kalsel",
      "Mendengarkan MP3Fest 2026",
      "Batola Mengaji",
      "Kemerdekaan SN Group",
      "Hari Listrik Nasional 2026",
    ],
  },
  {
    id: "himakom",
    group: "social",
    org: "HIMAKOM",
    period: { en: "May – Dec 2024", id: "Mei – Des 2024" },
    role: { en: "Cadre Division Member", id: "Anggota Divisi Kaderisasi" },
    points: {
      en: [
        "Head Organizer of the Training Organization event, which gave basic training to Himakom committee members and reached a 98% attendance rate.",
        "Prepared Leadership Training for new students to introduce them to the campus environment.",
        "Managed Himakom cadres by mapping each actively participating student to keep the organization orderly.",
      ],
      id: [
        "Ketua Pelaksana kegiatan Training Organisasi yang memberi pelatihan dasar bagi panitia Himakom dengan tingkat kehadiran 98%.",
        "Menyiapkan Leadership Training bagi mahasiswa baru sebagai pengenalan lingkungan kampus.",
        "Mengelola kader Himakom dengan memetakan setiap mahasiswa yang aktif berpartisipasi agar organisasi tertata.",
      ],
    },
  },
];

export const experienceContent: Record<
  Lang,
  {
    eyebrow: string;
    title: string;
    groups: Record<Group, string>;
    current: string;
    otherTitle: string;
    committeesTitle: string;
    crewTitle: string;
    lead: string;
  }
> = {
  en: {
    eyebrow: "Experience",
    title: "Where I've Worked and Learned",
    groups: { work: "Work Experience", social: "Social Experience" },
    current: "Latest",
    otherTitle: "Other Experience",
    committeesTitle: "Committees & Events",
    crewTitle: "Event Crew",
    lead: "Lead",
  },
  id: {
    eyebrow: "Pengalaman",
    title: "Tempat Saya Bekerja dan Belajar",
    groups: { work: "Pengalaman Kerja", social: "Organisasi & Kepanitiaan" },
    current: "Terbaru",
    otherTitle: "Pengalaman Lainnya",
    committeesTitle: "Kepanitiaan",
    crewTitle: "Kru Acara",
    lead: "Ketua",
  },
};

export const committees: Committee[] = [
  // ───────── 2025 ─────────
  {
    id: "amd-classroom-2025",
    year: 2025,
    event: "Webinar Nasional AMD Classroom",
    org: "HIMAKOM",
    role: {
      en: "Logistics & Equipment Member",
      id: "Anggota Logistik & Perlengkapan",
    },
  },

  {
    id: "training-organization-2024",
    year: 2024,
    event: "Training Organization",
    org: "HIMAKOM",
    role: { en: "Head Organizer", id: "Ketua Pelaksana" },
    lead: true,
  },
  {
    id: "imagene-week-2024",
    year: 2024,
    event: "Imagene Week",
    org: "HIMAKOM",
    role: {
      en: "Sponsorship & Partnership Coordinator",
      id: "Koordinator Sponsorship & Partnership",
    },
    lead: true,
  },
  {
    id: "cosmycfest-2024",
    year: 2024,
    event: "Cosmycfest",
    org: "HIMAKOM",
    role: { en: "Project Creator", id: "Project Creator" },
    lead: true,
  },
  {
    id: "ilkom-goes-to-society-2024",
    year: 2024,
    event: "Ilkom Goes to Society",
    org: "HIMAKOM",
    role: { en: "Partnership Member", id: "Anggota Partnership" },
  },
  {
    id: "lkmm-2024",
    year: 2024,
    event: "LKMM Pra-Dasar",
    org: "HIMAKOM",
    role: { en: "Public Relations", id: "Hubungan Masyarakat" },
  },

  {
    id: "pmb-2023",
    year: 2023,
    event: "Pekan Minat Bakat",
    org: "HIMAKOM",
    role: {
      en: "Publication, Decoration & Documentation Member",
      id: "Anggota Publikasi, Dekorasi & Dokumentasi",
    },
  },
  {
    id: "lkmm-2023",
    year: 2023,
    event: "LKMM Pra-Dasar",
    org: "HIMAKOM",
    role: {
      en: "Logistics & Equipment Member",
      id: "Anggota Logistik & Perlengkapan",
    },
  },
  {
    id: "musker-2023",
    year: 2023,
    event: "Musyawarah Kerja",
    org: "HIMAKOM",
    role: {
      en: "Publication, Decoration & Documentation Member",
      id: "Anggota Publikasi, Dekorasi & Dokumentasi",
    },
  },

  {
    id: "imagene-week-2022",
    year: 2022,
    event: "Imagene Week",
    org: "HIMAKOM",
    role: {
      en: "Publication, Decoration & Documentation Member",
      id: "Anggota Publikasi, Dekorasi & Dokumentasi",
    },
  },
];
