# AI Leaderboard - Parallax Landing Page

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black) ![React](https://img.shields.io/badge/React-19-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)

A responsive, parallax-scrolling landing page developed as a technical assessment. The project implements a provided Figma design with a focus on animation performance, component structure, and responsive behavior using modern web technologies.

🚀 **Live Demo:** [https://ai-leaderboard-xi.vercel.app/](https://ai-leaderboard-xi.vercel.app/)

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) (configured with `@tailwindcss/postcss`)
- **Animations:** [Framer Motion 12](https://www.framer.com/motion/) (Complex parallax effects & scroll-triggered animations)
- **Utilities:** `react-use-measure` for dynamic element sizing
- **Deployment:** Vercel

## ✨ Key Features

- **Parallax Effects:** Custom scroll-based animations for planets, background elements, and UI components using `useScroll` and `useTransform` hooks.
- **Pixel-Perfect Implementation:** High attention to detail matching the Figma mockup for desktop view.
- **Modern Styling:** Utilizes Tailwind CSS v4 with the new PostCSS configuration.
- **Performance:** Optimized for smooth 60fps animations.

### 📱 Note on Responsive Design

> **Important:** Since the mobile mockup was not provided in the original design files, I implemented a custom responsive adaptation ensuring a seamless user experience on mobile devices and tablets. The mobile layout and UX were specifically tested and optimized for devices similar to the **Samsung Galaxy S23 Ultra**.

## 📦 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/SkyrtachVitalii/-ai-leaderboard.git](https://github.com/SkyrtachVitalii/-ai-leaderboard.git)
   cd -ai-leaderboard

2. **Install dependencies:**
   npm install
   ```

# or

yarn install

# or

pnpm install

3. **Run the development server:**
npm run dev

4. **Open your browser: Navigate to http://localhost:3000 to view the application.**

# 📂 Project Structure

The project follows the standard Next.js App Router structure:

    /src/app - Pages, layouts, and global styles.

    /src/components - Reusable UI components (Hero, Leaderboard, Decor, etc.).

    /public - Static assets (images, decor elements).

# 📜 Scripts

    npm run dev - Runs the development server.

    npm run build - Builds the application for production.

    npm run start - Starts the production server.

    npm run lint - Runs ESLint checks.

Developed by Vitalii Skyrtach
