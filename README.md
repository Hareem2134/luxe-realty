# LUXE Realty: Premier Real Estate Portal ✨

[![Project Status](https://img.shields.io/badge/Status-In%20Development-blue)](https://github.com/Hareem2134/luxe-realty)
[![Tech Stack](https://img.shields.io/badge/Tech-Next.js%20%7C%20TypeScript%20%7C%20Framer%20Motion%20%7C%20TailwindCSS-007ACC)](https://github.com/Hareem2134/luxe-realty)
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

An aspirational digital experience combining luxury aesthetics with powerful real-time property discovery.

---

## 📄 Table of Contents

*   [🌟 Project Overview & Vision](#-project-overview--vision)
*   [🎯 Target Audience](#-target-audience)
*   [✨ Key Features](#-key-features)
*   [💫 UI/UX & Animation Philosophy](#-uiux--animation-philosophy)
    *   [Global Animations](#global-animations)
    *   [Viewport-Triggered Animations (On-Scroll Effects)](#viewport-triggered-animations-on-scroll-effects)
    *   [Hero Section Experience](#hero-section-experience)
    *   [Micro-interactions & Hovers](#micro-interactions--hovers)
    *   [Mobile Menu](#mobile-menu)
*   [🛠️ Technologies Used](#%EF%B8%8F-technologies-used)
*   [🚀 Getting Started](#-getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Configuration](#configuration)
    *   [Running the Development Server](#running-the-development-server)
    *   [Building for Production](#building-for-production)
*   [📂 Project Structure](#-project-structure)
*   [📊 IDX/MLS Integration (Conceptual)](#-idxmls-integration-conceptual)
*   [📱 Responsiveness](#-responsiveness)
*   [🤝 Contributing](#-contributing)
*   [© License](#-license)
*   [📞 Contact](#-contact)
*   [🙏 Acknowledgements](#-acknowledgements)

---

## 🌟 Project Overview & Vision

The goal of LUXE Realty is to create a premier, high-end real estate web portal that serves as a market leader. This is not just a property search tool; it is an aspirational digital experience. The platform combines powerful functionality with a sophisticated, best-in-class user interface, characterized by fluid animations, smooth transitions, and a luxury aesthetic. The user should feel a sense of quality and reliability from the moment they land on the page.

## 🎯 Target Audience

*   **Affluent Home Buyers:** Tech-savvy users who expect a seamless, visually stunning, and fast digital experience comparable to luxury brands.
*   **Top-Tier Real Estate Agents/Brokerages:** The platform will be a tool for these agents to attract high-value clients and manage leads efficiently.

## ✨ Key Features

*   **Robust IDX/MLS Integration (Conceptual):** Seamless integration with an IDX provider (e.g., IDX Broker, Showcase IDX, iHomefinder) to pull real-time property data, highly optimized for speed.
*   **Advanced Property Search & Discovery:**
    *   Interactive Map Search with pan, zoom, and custom polygon shapes.
    *   Comprehensive filtering options (school district, year built, amenities, price reduction history, property status).
    *   Saved Searches & Alerts for new listings.
*   **Integrated User/Agent Dashboard:**
    *   **User Dashboard:** Secure area for buyers to save properties, manage searches, view recommendations.
    *   **Agent Dashboard (Phase 2):** Backend for agents to manage leads, track activity, and update profiles.
*   **High-End Property Detail Pages:**
    *   Full-screen, high-resolution photo galleries with lightbox.
    *   Integrated video tours and 3D walkthroughs (e.g., Matterport).
    *   Sticky lead-capture/agent-contact forms.
    *   Detailed neighborhood information, school ratings, and mortgage calculator.

## 💫 UI/UX & Animation Philosophy

The overall animation philosophy is "enhance, not distract." All animations are designed to be silky-smooth (60fps), purposeful, and contribute to the feeling of luxury and responsiveness. Framer Motion is the preferred library for handling all animations and transitions within React/Next.js.

### Global Animations

*   **Page Pre-loader:** A minimalist and elegant loading animation (e.g., a subtle SVG logo animation or a fine-line progress bar) that appears on initial site load and masks any data fetching.
*   **Page Transitions:** Seamless transitions between pages. No hard reloads. Implemented with a subtle fade-and-slide-up effect as new page content loads using Next.js App Router and Framer Motion's `AnimatePresence`.

### Viewport-Triggered Animations (On-Scroll Effects)

*   **Enter Animations:** As users scroll down, elements (like property cards, text blocks, images) animate gracefully into view. A staggered fade-in-up effect is used for lists of items to create a dynamic "waterfall" feel.
*   **Exit Animations (Optional):** Subtle fade-out effects as elements scroll out of the viewport.

### Hero Section Experience

*   **Captivating Background:** The hero section features a background image/video with a subtle, slow pan/zoom effect (Ken Burns effect).
*   **Typography Animation:** Main headline text animates in on page load, potentially with a "mask reveal" effect or a subtle character-stagger fade-in.

### Micro-interactions & Hovers

*   **Property Cards:** On hover, cards have a subtle "lift" effect (using `transform: scale(1.03)` and `box-shadow`). The "Favorite" heart icon has a satisfying pop/fill animation when clicked.
*   **Buttons & Links:** Buttons feature smooth background color transitions and a slight "push down" effect on click.

### Mobile Menu

*   Fully responsive hamburger icon triggers the mobile menu.
*   The menu panel slides in smoothly from the right side of the screen, subtly pushing the main page content to the left for a layered, app-like feel.
*   Menu links inside the panel animate in with a staggered delay after the panel is open.

---

## 🛠️ Technologies Used

*   **Frontend Framework:** [Next.js](https://nextjs.org/) (App Router for SSR/SSG performance, SEO, and modern routing)
*   **Core UI Library:** [React](https://react.dev/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (for robust typing and improved developer experience)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) (for rapid, custom UI development and responsive design)
*   **Animation Library:** [Framer Motion](https://www.framer.com/motion/) (preferred for all animations and transitions)
*   **Scroll-Triggered Animations:** [React Intersection Observer](https://react-intersection-observer.netlify.app/)
*   **Icons:** [Font Awesome](https://fontawesome.com/) (`@fortawesome/react-fontawesome`)
*   **Font:** [Google Fonts](https://fonts.google.com/) (Playfair Display for headings, Lato for body)
*   **Deployment:** [Vercel](https://vercel.com/) (for seamless deployment and performance)
*   **State Management:** React `useState`/`useContext` hooks as needed for local and shared component state.
*   **Backend (Conceptual):** Next.js API Routes for data proxying and caching from IDX/MLS providers.

---

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended, e.g., v18.x or v20.x)
*   npm (or yarn/pnpm)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Hareem2134/luxe-realty.git
    cd luxe-realty
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # Or if facing peer dependency issues with React 19:
    # npm install --legacy-peer-deps
    ```
    *(Note: Next.js 15 uses React 19. If you encounter `ERESOLVE` errors, `npm install --legacy-peer-deps` might resolve them, but ensure `framer-motion` is added to `transpilePackages` in `next.config.mjs`.)*

### Configuration

1.  **Tailwind CSS:**
    Ensure `tailwind.config.ts`'s `content` array points to your source files:
    ```typescript
    // tailwind.config.ts
    content: [
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    ```
    Also, confirm `fontFamily` setup in `theme.extend`.

2.  **Next.js Image Optimization & Transpilation:**
    Verify `next.config.mjs` includes the following:
    ```javascript
    // next.config.mjs
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      transpilePackages: ["framer-motion"], // Essential for Framer Motion with App Router
      images: {
        remotePatterns: [
          { protocol: 'https', hostname: 'images.unsplash.com', pathname: '**' },
          { protocol: 'https', hostname: 'randomuser.me', pathname: '**' },
          // If you use a real Google Maps API key, add its domain:
          // { protocol: 'https', hostname: 'maps.googleapis.com', pathname: '**' },
          // If using Wikimedia for placeholder:
          { protocol: 'https', hostname: 'upload.wikimedia.org', pathname: '**' },
        ],
      },
    };
    export default nextConfig;
    ```

3.  **Environment Variables (for real IDX/MLS or other APIs):**
    Create a `.env.local` file in the project root:
    ```
    # .env.local
    NEXT_PUBLIC_IDX_API_KEY=your_idx_api_key_here
    GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here # If using real Google Maps
    # ... any other API keys
    ```
    *(Note: For this demo, dummy data is used, so API keys are not strictly required initially.)*

### Running the Development Server

```bash
npm run dev
# Or with Yarn: yarn deva
# Or with pnpm: pnpm dev