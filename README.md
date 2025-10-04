Gopal Maurya — Data Science Portfolio
A fast, responsive portfolio to showcase my Data Science and Analytics work. Built with React + Vite, focused on clean UX, accessibility, and easy content updates.

Live: LIVE_URL
Tech: React, Vite, react-icons, CSS
Focus: Data Science, Machine Learning, Analytics, MLOps
Features
Beautiful, responsive layout (desktop and mobile)
DS/Analytics-focused skills and projects
Project cards with:
Image thumbnails, lazy loading, and shimmer skeleton
Tags and quick filters
Links to Code, Demo, Report
Robust asset loading
BASE_URL-safe asset paths (works on localhost and GitHub Pages)
Inline SVG fallback for images
Accessible components (ARIA labels, keyboard-friendly)
Contact form using mailto: with validation
Screens
Hero: Intro, DS skill badges, quick CTAs, KPIs
Skills: Categorized DS/Analytics tools with icons
Projects: Filterable, balanced grid of recent projects
Contact: Validated form that opens your mail app with prefilled message
Tech Stack
Frontend: React + Vite
Icons: react-icons (Simple Icons, Tabler, Remix)
Styling: Lightweight custom CSS with semantic class names (container, card, badge, tag, btn)
Deployment: GitHub Pages / Netlify / Vercel compatible
Project Structure
text

public/
  profile2.png
  projects/
    real-eatate-insights.png
    youtube-sentiment.png
    customer-segmentation.png
    food-delivery-time.png
src/
  components/
    hero.jsx
    skills.jsx
    Projects.jsx
    contact.jsx
    header.jsx
    about.jsx
    achievements.jsx
  App.jsx
  main.jsx
  index.css
Note: Image names must match exactly (including extension/case). From my current setup:

customer-segmentation.png (not .jpg)
food-delivery-time.png (not .jpg)
Getting Started
Prereqs

Node.js 18+ recommended
npm (or pnpm/yarn)
Install and run

Bash

npm install
npm run dev
Build and preview

Bash

npm run build
npm run preview
Configuration and Content
Hero

File: src/components/hero.jsx
Badges use safe icon fallbacks (no crash if an icon is missing)
Profile image: public/profile2.png (falls back to profile.jpg if missing)
Skills

File: src/components/skills.jsx
DS/Analytics categories with icon fallbacks (namespace import: import * as Si from "react-icons/si")
Layout uses balanced 2-column sections on desktop
Projects

File: src/components/Projects.jsx
Update the projects array (title, desc, img, tags, code, demo, Report)
Put images in public/projects/
Uses a BASE_URL-safe helper to ensure images work on GitHub Pages and local
Shimmer skeleton hides as soon as the image loads or falls back
Contact

File: src/components/contact.jsx
Validates name, email, message before opening mail client
Set your email in EMAIL constant (mauryagopal25@gmail.com)
Common Gotchas (and fixes)
Images not showing
Ensure filenames in public/projects/ match the code exactly.
Use .png vs .jpg correctly. Example fixes:
customer-segmentation.png (not .jpg)
food-delivery-time.png (not .jpg)
The component already:
Builds BASE_URL-safe paths for GitHub Pages
Falls back to an inline SVG and hides the skeleton on error
Icon crashes (blank page)
We use import * as Si from "react-icons/si" and conditional rendering. If an icon is missing in your react-icons version, it won’t crash.
If you need specific brand icons (e.g., Power BI), either upgrade react-icons or use a generic icon fallback (already included).
Deployment
GitHub Pages (recommended)

Set the base in vite.config.js
JavaScript

// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/<repo-name>/", // e.g., "/MY-PORTFOLIO/"
});
Add a GitHub Action to deploy automatically
Create .github/workflows/deploy.yml:
YAML

name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: npm
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: dist
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
Push to main. Enable GitHub Pages (Settings → Pages → Deploy from GitHub Actions).
Netlify or Vercel

Build command: npm run build
Output directory: dist
No base config needed
Performance Tips
Compress project images (webp/png) and keep under ~300–600 KB
Use descriptive alt text for better accessibility/SEO
Keep the projects list short and focused (you can always link to GitHub for more)
Roadmap
Add a search box and sorting to Projects
Add theme toggle (light/dark)
Integrate a form service (Formspree/EmailJS) to send without mail client
Credits
React, Vite
Icons: react-icons (Simple Icons, Tabler, Remix)
Deployed demos for projects: Render, AWS (varies by project)
License
MIT © Gopal Maurya

Contact
Email: mauryagopal25@gmail.com
Portfolio: LIVE_URL
GitHub: https://github.com/Mauryagopal
