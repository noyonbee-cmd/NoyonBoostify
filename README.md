# Noyon Boostify × Naviro

**Turn Clicks Into Customers.**

A premium, performance-driven landing page built for high-end Meta & TikTok ad agencies. Upgraded to v3.0, it features a deeply optimized Next.js App Router architecture, a polished CSS glassmorphism UI, and lightning-fast DOM 3D rendering to guarantee maximum conversion and zero lag on mobile devices.

## 🚀 Overview

Noyon Boostify is designed specifically for scaling brands. The platform utilizes advanced typography (Playfair Display for editorial authority, and Inter for extreme technical legibility) combined with an optimized component library to highlight exact agency ROI, transparent processing steps, and dynamic ad package comparisons.

## 💻 Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS + Vanilla CSS (CSS Variables System)
- **Animations:** Custom CSS Keyframes / GSAP
- **3D Implementation:** Pure DOM/CSS 3D Engine (Zero WebGL overhead)
- **Deployment:** Vercel (Edge-ready)

---

## 🛠️ Local Setup

Follow these steps to run the application locally on your machine.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/noyonbee-cmd/NoyonBoostify.git
   cd NoyonBoostify
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up Environment Variables:**
   Copy the `.env.example` file and configure your credentials.
   ```bash
   cp .env.example .env.local
   ```
   *Edit `.env.local` to include your actual WhatsApp number and Email.*

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 🔐 Environment Setup (CRITICAL)

The project handles sensitive application routing (like the WhatsApp conversion funnel). These are safely abstracted.

1. Find `.env.example` in the root folder.
2. Create a new file called `.env.local` in the exact same folder.
3. Paste the contents into `.env.local` and add your details:
   ```env
   NEXT_PUBLIC_WHATSAPP=+8801339462285
   NEXT_PUBLIC_EMAIL=hello@noyonboostify.com
   ```
> [!WARNING]  
> NEVER commit `.env.local` to GitHub. The `.gitignore` file guarantees this, but always be cautious.

---

## ☁️ Vercel Deployment Guide

Deploying this Next.js app to Vercel takes less than a minute. The project is highly optimized for Vercel's caching layer.

1. **Push to GitHub** (If you haven't already):
   ```bash
   git init
   git add .
   git commit -m "Initialize project"
   git push -u origin main
   ```

2. **Deploy on Vercel:**
   - Log in to your [Vercel Dashboard](https://vercel.com/).
   - Click **Add New...** → **Project**.
   - Import your uploaded `NoyonBoostify` GitHub repository.

3. **Configure Environment Variables in Vercel:**
   - On the Vercel configure screen, open the **Environment Variables** drop-down.
   - Add exactly what you put in your `.env.local` file (e.g., `NEXT_PUBLIC_WHATSAPP` and its value).
   - Click **Deploy**.

---

## ⚡ Performance Notes

This v3.0 architecture strictly prohibits bloated client-side dependencies:
1. **Zero-Lag DOM 3D:** The Hero dashboard uses hardware-accelerated CSS matrix transforms instead of heavy WebGL. This prevents battery drain on low-end mobile devices.
2. **Server-Side Generation (SSG):** All route elements without dynamic hooks are heavily cached allowing LCP times < 1.0s.
3. **Image Optimization:** Ensure all future team avatars or case study images utilize Next.js `<Image />` tags so they are correctly compressed to webp on Edge infrastructure.
