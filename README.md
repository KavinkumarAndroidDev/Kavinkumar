# Kavinkumar R | Developer Portfolio

Welcome to my personal developer portfolio! This project is a modern, ultra-responsive web application built to showcase my backend engineering, cloud security work, and mobile development expertise.

## 🚀 Built With

*   **Framework**: [Next.js](https://nextjs.org/) (App Router)
*   **Library**: [React 19](https://react.dev/)
*   **Styling**: Pure Vanilla CSS (`globals.css`) & CSS Modules with Glassmorphism 2.0 aesthetics
*   **Animations**: [Framer Motion](https://www.framer.com/motion/) for fluid page transitions and interactive micro-animations
*   **Icons**: [Lucide React](https://lucide.dev/)
*   **Deployment**: Cloud-ready (optimized for Vercel / Netlify)

## ✨ Key Features

*   **Deep Obsidian & Neon Fluid Design**: A specialized, custom-designed dark mode interface that feels premium, highly responsive, and "mathmatically perfect" across ultra-wide monitors down to 320px mobile devices.
*   **Zero-Gap Bento Grid**: A highly optimized CSS Grid layout in the "Behind the Code" section that pieces together data like a puzzle on all resolutions.
*   **Automated SEO & Analytics**: Ready out-of-the-box with fully managed meta tags and Google Analytics injection via Next.js Layout elements.
*   **Single-Source Data Mapping**: Every piece of localized text, image, experience dataset, and layout metadata lives strictly inside `/src/data/content.ts`. This allows rapid iteration without having to search through React components.

## 📁 Project Structure

```text
├── src/
│   ├── app/
│   │   ├── components/  # Modular React standard components & sections
│   │   ├── globals.css  # Core layout variables, typography clamps, and themes
│   │   ├── layout.tsx   # Next.js Root Layout (SEO / Font / GA configuration)
│   │   └── page.tsx     # Application assembly boundary
│   └── data/
│       └── content.ts   # The brain of the app — contains all portfolio data!
└── public/
    └── img/             # Static assets (Project thumbnails, blog covers, etc.)
```

## 🛠️ Local Development

To run the application locally, you will need Node.js installed.

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Start the development server:**
    ```bash
    npm run dev
    ```

3.  **Open your browser:**
    Navigate to [http://localhost:3000](http://localhost:3000) to see the live reloading application.

## 📈 Managing Data & Content

To update the portfolio with new projects, skills, certifications, or to change the primary aesthetic text—simply edit `src/data/content.ts`. 

The React components are designed to automatically iterate through this file, so zero code structure modifications are required when updating your CV.

## 📜 License

This project is intended as a personal portfolio. Please respect the respective copyrights of the included project assets and profile data. 
