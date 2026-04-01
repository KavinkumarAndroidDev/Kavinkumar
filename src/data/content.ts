// ============================================================
// content.ts — Central data source for portfolio content
// ============================================================
// FUTURE DEVELOPER NOTE:
// This file is the single source of truth for all portfolio data.
// To migrate to a dynamic backend (REST API, GraphQL, Supabase, etc.),
// simply replace the exported constants below with async fetch calls
// and update components to await the data. Component structure remains unchanged.
// ============================================================

// ─── PERSONAL INFO ───────────────────────────────────────────
export const personalInfo = {
  name: "Kavinkumar R",
  displayName: "Kavinkumar",
  shortName: "KAVIN",
  taglines: ["App Developer", "Web Designer", "Linux Enthusiast"],
  bio: [
    "I am a mobile developer passionate about creating seamless and user-friendly app experiences. With a background in native Android development using Kotlin and Java, I have recently started exploring React Native to expand my cross-platform capabilities. At the same time, I am transitioning my focus towards cloud computing, with a strong interest in AWS Cloud Security.",
    "I enjoy problem-solving, collaborating in teams, and taking on leadership roles when needed, making me an adaptable and valuable contributor to any project. I find joy in continuous learning and embracing new challenges. My goal is to grow into a cloud security professional while continuing to build meaningful and secure applications.",
  ],
  details: [
    { label: "Name", value: "Kavinkumar R" },
    { label: "Age", value: "20" },
    { label: "City", value: "Salem, India" },
    { label: "Email", value: "codebykavin@gmail.com", href: "mailto:codebykavin@gmail.com" },
    { label: "LinkedIn", value: "Kavinkumar", href: "https://www.linkedin.com/in/kavinkumar442005/" },
    { label: "GitHub", value: "KavinkumarAndroidDev", href: "https://www.github.com/KavinkumarAndroidDev/" },
    { label: "Google Play", value: "codebykavin · Play Store", href: "https://play.google.com/store/apps/dev?id=5627394654262148692" },
    { label: "LeetCode", value: "Kavinkumar_R_442005", href: "https://www.leetcode.com/u/Kavinkumar_R_442005/" },
    { label: "Freelance", value: "Available" },
  ],
  cvUrl: "https://drive.google.com/file/d/1Vvc_GQ_2SPcXRu5p_c6fHH1OLfXNumbG/view?usp=drive_link",
  avatar: "/img/kavin.jpg",
};

// ─── SOCIAL LINKS ─────────────────────────────────────────────
export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kavinkumar442005/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev", icon: "github" },
  { label: "Code by Kavin", href: "https://codebykavin.netlify.app/", icon: "link" },
  {
    label: "Google Play",
    href: "https://play.google.com/store/apps/dev?id=5627394654262148692",
    icon: "google-play",
  },
];

// ─── SKILLS ───────────────────────────────────────────────────
export const skillGroups = [
  {
    title: "Programming Skills & App Designing",
    skills: [
      { label: "Python", value: 80 },
      { label: "C", value: 75 },
      { label: "Kotlin", value: 95 },
      { label: "Jetpack Compose", value: 90 },
    ],
  },
  {
    title: "Language Skills",
    skills: [
      { label: "English", value: 95 },
      { label: "Tamil", value: 100 },
    ],
  },
];

// ─── TIMELINE ─────────────────────────────────────────────────
export const workExperience = [
  {
    role: "App Developer",
    company: "Creating Concepts & Developing Designs",
    period: "July 2024 - Jan 2025",
  },
];

export const education = [
  {
    degree: "B.Tech IT",
    institution: "Knowledge Institute of Technology",
    period: "2022-2026",
  },
  {
    degree: "SSLC & HSC",
    institution: "Sri Vidhya Bharathi Matric Hr Sec School",
    period: "2018-2021",
  },
];

// ─── LEADERSHIP & RECOGNITION ─────────────────────────────────
export const leadershipRoles = [
  { title: "Secretary", organization: "Techtastic association, KIOT", period: "2025 - Present" },
  { title: "Student ambassador", organization: "Technology for education club, KIOT", period: "2025 - Present" },
  { title: "Joint secretary", organization: "Techtastic association, KIOT", period: "2024 - 2025" },
];

export const awardsAndHonors = [
  { title: "Best Student in Co-Curricular Activities Award", organization: "Knowledge Institute of Technology", year: "2025" },
  { title: "Achievers Day Award", organization: "Knowledge Institute of Technology", year: "2025" },
  { title: "Achievers Day Award", organization: "Knowledge Institute of Technology", year: "2024" },
];

// ─── CERTIFICATIONS & PUBLICATIONS ────────────────────────────
export const certifications = [
  { title: "Cloud Digital Leader Certification", issuer: "Google", year: "2024" },
  { title: "Certified Ethical Hacker (CEH)", issuer: "Thinkinfo Expert Solutions", year: "2022" },
  { title: "3 NPTEL Certifications", issuer: "IITs", year: "2023, 2024" },
];

export const certificationMoreLink = "https://www.linkedin.com/in/kavinkumar442005/details/certifications/";

export const publications = [
  {
    title: "Blockchain Technology in Secure Voting Systems: Enhancing Transparency and Trust",
    publisher: "IEEE",
    link: "https://ieeexplore.ieee.org/document/10860165",
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────
export const testimonials = [
  {
    quote:
      "Kavinkumar R interned as an Android Developer at Creating Concepts & Developing Designs, where he quickly became a valuable asset. He demonstrated a strong grasp of Kotlin and Jetpack Compose, contributing effectively to our projects. His ability to learn and adapt was impressive, consistently delivering high-quality work. Beyond his technical skills, Kavinkumar displayed excellent work ethics, a collaborative spirit, and strong problem-solving abilities. He was a dedicated and enthusiastic learner, and I confidently recommend him for any Android development role. I wish him much success in his future endeavors.",
    name: "Ramli Michael",
    role: "Founder of The Branding Machans",
    avatar: "/img/quotes/Ramli_Michael.jpeg",
  },
  {
    quote:
      "I have had the pleasure of working with Kavinkumar R, and he is an exceptionally talented Android developer. His ability to build efficient, user-friendly applications using Kotlin and Jetpack Compose is truly impressive. He quickly adapts to new technologies and continuously enhances his skills, making him a valuable asset to any team. Beyond his technical expertise, Kavin is a great problem solver who approaches challenges with a logical mindset. He is always eager to learn, actively listens, and collaborates effectively with others. I highly recommend Kavin for any Android development role.",
    name: "Sowndariya K",
    role: "Crafting Scalable Digital Solutions",
    avatar: "/img/quotes/sowndariya.jpeg",
  },
  {
    quote:
      "I would like to express my sincere appreciation to Mr. Kavinkumar for his excellent work in developing our College Bus Tracking App for Android. His technical expertise, dedication, and attention to detail were clearly reflected throughout the project. From understanding the concept to implementing features like real-time bus location tracking, seat availability updates, and user-friendly navigation, he ensured every part of the app met our requirements efficiently. Overall, I am highly satisfied with his performance and professionalism. The final output exceeded expectations in terms of design, functionality, and user experience.",
    name: "Gopinath Anandhkumar",
    role: "MBA (Innovation Entrepreneurship & Venture Development)",
    avatar: "/img/quotes/Gopinath_Anandhkumar.png",
  },
];

// ─── SERVICES (hidden from UI until active — see Services component) ──
// NOTE: Set SERVICES_VISIBLE = true in services component when ready to launch.
export const services = [
  {
    title: "Mobile App Development",
    items: ["Native Android (Kotlin)", "Kotlin Multi-Platform", "Flutter Apps"],
  },
  {
    title: "Creative Design",
    items: ["Wireframing & Prototyping", "Responsive Layouts (Mobile & Web)", "User Flow Mapping"],
  },
  {
    title: "Web Development",
    items: ["Responsive Web Design", "WordPress Websites", "React Websites"],
  },
];

// ─── PORTFOLIO PROJECTS ───────────────────────────────────────
export type ProjectCategory = "App" | "Website" | "Cloud";

export interface Project {
  title: string;
  category: ProjectCategory;
  thumbnail: string;
  description: string;
  features: string[];
  technologies: string[];
  status: string;
  links: { label: string; href: string; icon: string }[];
}

export const projects: Project[] = [
  {
    title: "Cashalyst",
    category: "App",
    thumbnail: "/img/project/cashalyst.png",
    description:
      "Cashalyst is a simple yet powerful personal finance tracking app built with React Native and Expo. Designed for students and early professionals, it helps users track income and expenses with clear visual insights.",
    features: [
      "Home dashboard with monthly summary and recent transactions",
      "Add and manage income/expense transactions with category & source",
      "Search and filter through transaction history",
      "Pie, bar, and line charts for spending and balance insights",
      "Multi-account tracking (Cash, GPay, Bank)",
      "Smooth offline support with SQLite database",
      "Clean UI using React Native Paper and Zustand for state management",
    ],
    technologies: ["React Native", "Expo", "SQLite (expo-sqlite)", "Zustand", "React Native Paper", "React Navigation", "React Native Chart Kit"],
    status: "Ongoing",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/Cashalyst", icon: "github" },
      { label: "Download", href: "https://github.com/KavinkumarAndroidDev/Cashalyst/releases", icon: "download" },
    ],
  },
  {
    title: "Fortune",
    category: "App",
    thumbnail: "/img/project/fortune.png",
    description:
      "Fortune is a beautifully crafted Android app that delivers a fresh fortune cookie every day. Designed to be emotionally engaging, it combines delightful animations, tactile interactions, and meaningful content to create a memorable daily ritual for users.",
    features: [
      "Daily fortune cookie delivered every 24 hours",
      "Interactive cookie cracking with tap gestures, haptics, sound, and explosion animation",
      "Three fortune rarities: Common, Golden, and Mystic with unique animated reveals",
      "Save favorite fortunes to a personal collection",
      "Sort saved fortunes by date or rarity",
      "Engaging cooldown screen with fun facts and fortune cookie origins",
      "Share fortunes easily via social and messaging apps",
      "Daily notification reminder when a new fortune is ready",
      "Non-repeating fortune system with automatic reset after completion",
      "Polished onboarding experience for first-time users",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Material 3", "MVVM Architecture", "Kotlin Coroutines & Flow", "Room Database", "WorkManager", "Jetpack Navigation (Compose)"],
    status: "Live",
    links: [
      { label: "Play Store", href: "https://play.google.com/store/apps/details?id=com.kkdev.crackie", icon: "playstore" },
    ],
  },
  {
    title: "FlashPing",
    category: "App",
    thumbnail: "/img/project/flashping.png",
    description:
      "FlashPing is an innovative Android application that enables covert, offline communication using light. It converts text messages into flashlight pulse sequences (Morse code) for transmission and decodes incoming light signals in real time. Designed for environments without internet, Bluetooth, or cellular access.",
    features: [
      "Dual-Mode Encryption — Standard Morse and custom shadow cipher encoding",
      "Adjustable transmission speed: Slow, Normal, Fast, and Rapid modes",
      "Real-time optical decryption using CameraX with adaptive calibration",
      "Live debug view showing luminance, threshold, and time-unit calibration",
      "Immersive 'Premium-Tech' themed UI in black, yellow, and dark gray",
      "Modern MVVM architecture with shared ViewModels",
      "Smooth flashlight pulse timing using Kotlin Coroutines",
      "Elegant permission handling using Accompanist Permissions",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "CameraX (ImageAnalysis)", "Kotlin Coroutines", "StateFlow & ViewModel (MVVM)", "Jetpack Navigation", "Accompanist Permissions"],
    status: "Completed",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/FlashPing", icon: "github" },
      { label: "Download", href: "https://github.com/KavinkumarAndroidDev/FlashPing/releases", icon: "download" },
    ],
  },
  {
    title: "Student Shuttle",
    category: "App",
    thumbnail: "/img/project/studentshuttle.png",
    description:
      "Student Shuttle is a real-time bus tracking app built for students of Knowledge Institute of Technology (KIOT). Developed with modern Android technologies, it bridges the communication gap between students and drivers by providing accurate live bus locations and travel updates.",
    features: [
      "Real-time bus tracking with OpenStreetMap integration",
      "Separate dashboards for students and drivers",
      "Background location sharing using Foreground Service",
      "View all active buses in real time",
      "Secure login and profile management via Firebase Authentication",
      "Data stored in Cloud Firestore and Firebase Realtime Database",
      "Built with Jetpack Compose and MVVM architecture for clean, scalable design",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Firebase Authentication", "Cloud Firestore", "Firebase Realtime Database", "OpenStreetMap (osmdroid)", "Google Play Services (Fused Location Provider)", "Jetpack Navigation"],
    status: "Completed",
    links: [
      { label: "Private (Client Confidentiality)", href: "", icon: "" },
    ],
  },
  {
    title: "MovieFlix",
    category: "App",
    thumbnail: "/img/project/MovieFlix.png",
    description:
      "MovieFlix is a cross-platform mobile application developed using React Native and Expo Go. It allows users to discover trending and popular movies and TV shows using The Movie Database (TMDB) API.",
    features: [
      "View trending movies and TV shows with up-to-date data from TMDB API",
      "Search for movies and shows by title",
      "Explore content based on genres and categories",
      "Detailed view with cast info, ratings, and descriptions",
      "Clean and intuitive UI using Tailwind CSS with NativeWind",
      "Asynchronous data fetching using React Hooks",
    ],
    technologies: ["React Native", "Expo Go", "TMDB API", "Tailwind CSS (NativeWind)", "JavaScript"],
    status: "Completed",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/MovieFlix_ReactNative_app", icon: "github" },
    ],
  },
  {
    title: "Artiz",
    category: "App",
    thumbnail: "/img/project/Artiz.png",
    description:
      "Artiz is an event registration app I've developed for www.artiz.in, completing 80% of the project. As a client project during my internship with Creating Concepts & Developing Designs (C2D2), I designed this app to streamline the event registration process, providing users with a seamless experience for authenticating, registering, and paying for events.",
    features: [
      "OTP Authentication via Firebase Authentication",
      "Participant Registration after authentication",
      "PhonePe Payment Integration for secure payments",
      "Data Storage in Firebase Firestore upon successful payment",
      "Ticket Generation in PDF or JPG format",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "Firebase Authentication", "Firebase Firestore", "PhonePe Payment Gateway Integration"],
    status: "80% Completed",
    links: [
      { label: "Private (Client Confidentiality)", href: "", icon: "" },
    ],
  },
  {
    title: "Task Master",
    category: "App",
    thumbnail: "/img/project/task.png",
    description:
      "Taskmaster is a task management app built for Android devices using modern technologies to provide a seamless, efficient, and user-friendly experience. It's designed to help users organize and complete their tasks easily while offering advanced features to boost productivity.",
    features: [
      "Task Completion Statistics: Track how many tasks you complete and analyze your productivity.",
      "Prioritization Options: Set task priorities to stay focused on what's important.",
      "Calendar and Email Integration: Sync tasks with your calendar and email for seamless planning.",
      "Home Screen Widgets: Quickly view and manage tasks right from your home screen.",
      "Attachments: Attach notes, images, or documents to tasks for better context.",
      "Completion Gratitude: Get a little motivation with positive messages after completing tasks.",
      "Intuitive User Interface: Simple and clean UI to ensure a smooth, user-friendly experience.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Dependency Injection", "Room Database", "Datastore", "WorkManager"],
    status: "Completed",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/Taskmaster", icon: "github" },
    ],
  },
  {
    title: "Notable",
    category: "App",
    thumbnail: "/img/project/notable.png",
    description:
      "Notable is a minimalist notes app designed for Android devices, focused on simplicity and usability. It features a clean black-and-white UI for users who prefer a distraction-free environment. Powered by modern Android technologies.",
    features: [
      "Simple Two-Color UI: Enjoy a visually clean and focused interface with only black and white.",
      "Easy Note Management: Quickly create, edit, and organize your notes.",
      "Room Database Integration: Securely store and manage all your notes locally on your device.",
      "No Distractions: A minimal design with no unnecessary features.",
    ],
    technologies: ["Kotlin", "Jetpack Compose", "MVVM Architecture", "Room Database"],
    status: "Completed",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/notable", icon: "github" },
    ],
  },
  {
    title: "Techniche",
    category: "Website",
    thumbnail: "/img/project/techniche.png",
    description:
      "Techniche is a fictional startup website I built to showcase how tech and student empowerment can come together. The site is fully responsive and built using modern frontend technologies.",
    features: [
      "Home Page – Highlights mission, vision, and value proposition",
      "About Page – Tells the story and values behind the brand",
      "Services – Describes business-focused offerings like AI/ML, Data Science, and Cloud solutions",
      "Tools – Career development and learning resources for students",
      "Projects – Showcases real-world and student-built projects",
      "Career – Information on mentorship and job prep",
      "Blog & Contact – Tech insights and communication options",
    ],
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    status: "Completed",
    links: [
      { label: "Live Site", href: "https://techniche.netlify.app", icon: "link" },
    ],
  },
  {
    title: "CloudWatchLite",
    category: "Cloud",
    thumbnail: "/img/project/CloudWatchLite.png",
    description:
      "CloudWatchLite is a lightweight Python CLI tool that helps monitor AWS EC2 instances using Boto3 SDK. It detects idle or expensive resources and prints alerts based on thresholds set in a config file.",
    features: [
      "List EC2 instances with ID, type, state, region, uptime",
      "Flag idle instances (based on uptime threshold)",
      "Detect costly instance types like t2.large, m5.large",
      "Configurable via JSON file for easy customization",
      "Modular structure for future S3/Lambda monitoring",
      "Optional email/SNS alerts for warnings",
    ],
    technologies: ["Python", "AWS Boto3 SDK", "EC2, IAM", "argparse, JSON", "(Planned) SNS, SMTP, S3, Lambda"],
    status: "Completed",
    links: [
      { label: "GitHub", href: "https://github.com/KavinkumarAndroidDev/CloudWatchLite", icon: "github" },
    ],
  },
  {
    title: "Daily Task Scheduler – AI Powered",
    category: "Cloud",
    thumbnail: "/img/project/partyrock.png",
    description:
      "Daily Task Scheduler is an AI-powered productivity app built using AWS PartyRock. It leverages generative AI to help users schedule and prioritize their daily tasks effectively, boosting productivity and time management.",
    features: [
      "Generate and organize daily tasks using AI",
      "No-code deployment using AWS PartyRock",
      "Simple, shareable, cloud-hosted interface",
      "Accessible from anywhere with a web link",
    ],
    technologies: ["AWS PartyRock", "Generative AI", "AWS Console"],
    status: "Completed",
    links: [
      { label: "Live App", href: "https://partyrock.aws/u/kavinkumar-r/JXGTaESOm/Daily-Task-Scheduler-AI-Powered", icon: "link" },
    ],
  },
];

// ─── BLOGS ────────────────────────────────────────────────────
export const blogs = [
  {
    title: "Breaking Barriers: How Learning Linux Can Transform Your Career in Tech",
    date: "Nov 02, 2024",
    category: "Linux",
    thumbnail: "/img/blog/blog1.jpg",
    href: "https://www.linkedin.com/pulse/breaking-barriers-how-learning-linux-can-transform-your-kavinkumar-r-5wrkf",
  },
  {
    title: "90% of Companies Use Git. Why Are So Many Developers Still Ignoring It?",
    date: "Oct 19, 2025",
    category: "Git & GitHub",
    thumbnail: "/img/blog/Github_blog.jpg",
    href: "https://www.linkedin.com/pulse/90-companies-use-git-why-so-many-developers-still-ignoring-r-o0r0c",
  },
];

// ─── FLOATING DOCK ────────────────────────────────────────────
export const floatingDock = {
  href: "https://codebykavin.netlify.app/",
  label: "Explore my personal app store →",
  icons: [
    { src: "/img/dock/Cashalyst.png", alt: "Cashalyst" },
    { src: "/img/dock/Fortune.png", alt: "Fortune" },
    { src: "/img/dock/techniche.png", alt: "Techniche" },
  ],
};

// ─── SEO / META ───────────────────────────────────────────────
export const seoMeta = {
  title: "Kavinkumar R – Cloud Security Learner & Android Engineer",
  description:
    "Portfolio of Kavinkumar R – Cloud Security Learner and Android Engineer. Explore my journey from building industry-grade Android apps to securing scalable cloud systems with AWS and DevSecOps.",
  url: "https://kavinkumar-r.netlify.app/",
  image: "https://kavinkumar-r.netlify.app/img/favicon/android-chrome-512x512.png",
  googleAnalyticsId: "G-E74B0S58SJ",
};
