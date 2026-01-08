# 0G Landing Page
A promotional landing page for a Web 3.0 game, built with Nuxt.js.

## 📋 About The Project
This project is a single-page promotional website (landing page) created for a game related to Web 3.0 technologies. The primary goal is user acquisition through project presentation and lead generation via a contact form.

## ✨ Tech Stack
The project uses a modern stack for fast and performant development:

- Framework: Nuxt.js (version 2)
- Languages: Vue.js (67.1%), SCSS (27.5%), JavaScript (5.4%)
- Styling: SCSS with BEM methodology
- Animations & Scroll: Scrollmagic library

## 🚀 Quick Start
Follow these instructions to get the project running on your local machine.

## Prerequisites
Ensure you have Node.js version 15 and npm installed on your computer.

## Installation & Running
Clone the repository

```bash
git clone https://github.com/morshinin/0g-landing.git
cd 0g-landing
```

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open in your browser at http://localhost:3000

## Building for Production
To create an optimized production build, run:

```bash
npm run build
```

The generated static files will be placed in the dist/ directory.

## 📁 Project Structure
```text
0g-landing/
├── assets/         # Static assets (fonts, images)
├── components/     # Reusable Vue components
├── data/          # Configuration files and data
├── pages/         # Application pages (main page)
├── plugins/       # Nuxt.js plugins
├── services/      # API interaction logic (e.g., form submission)
├── static/        # Files served as-is (favicon, etc.)
├── utils/         # Helper utilities
└── nuxt.config.js # Main Nuxt configuration file
```

## 🛠 Development Features

- Contact Form: Implemented in the services/ and components/ directories for lead collection.
- Advanced Scroll Animations: Uses Scrollmagic to create interactive horizontal and vertical scroll effects (configured in utils/ and components/).
- Responsive Design: Styles are written with various device displays in mind.
