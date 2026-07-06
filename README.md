
PERSONAL PORTFOLIO WEBSITE


A modern, responsive, and fully feature-rich personal portfolio web
application built with Angular, TypeScript, and SCSS. This project
showcases professional skills, completed projects, client testimonials,
and a fully functional contact interface.

1. PROJECT OVERVIEW

---

This application delivers a seamless single-page experience (SPA)
structured into clean, modular sections. It includes full multi-language
support (English/German) and dedicated standalone routes for compliance
pages like Legal Notice and Privacy Policy.

2. CORE FEATURES

---

- Internationalization (i18n): Full localization using @ngx-translate
  for real-time switching between English and German.
- Dynamic Content Architecture: Centralized data storage managed via
  PortfolioDataService to ease updating skills, portfolio projects,
  and personal information.
- Robust Contact Form: Form validation, modern visual overlay notifications
  upon submission, and explicit privacy-policy checkbox verification.
- Smart Environment Detection: Automatically runs a simulated response
  during local environment development to streamline front-end testing.
- Backend Email Processing: Secure server-side handling and payload
  sanitization via PHP (sendMail.php).
- Responsive Layout: Adaptive cross-device navigation featuring a
  tailored interactive mobile menu.

3. TECH STACK

---

- Framework: Angular (utilizing Modern Standalone Components)
- Language: TypeScript
- Styling: SCSS (Modular, scalable architecture)
- Routing: Angular Router
- Networking/Forms: Angular Reactive/Template-driven Forms + HttpClient
- Translation Utility: @ngx-translate/core & @ngx-translate/http-loader
- Backend: PHP (Form handling mail transmission utility)

4. LOCAL DEVELOPMENT SETUP

---

Ensure you have Node.js and npm installed before proceeding.

Step 1: Navigate to the root folder
cmd: cd PORTFOLIO

Step 2: Install all required dependencies
cmd: npm install

Step 3: Launch the local development server
cmd: npm start

Step 4: Open your browser and navigate to:
URL: http://localhost:4200

5. BUILD & DEPLOYMENT

---

To generate an optimized production-ready bundle, run:
cmd: npm run build

The compiled assets will be compiled into the "dist/" directory,
ready to be deployed to your hosting provider.

6. TESTING

---

Run automated unit tests via Karma/Jasmine:
cmd: npm test

7. ESSENTIAL PROJECT PATHS

---

- src/app/app.routes.ts
  -> Main application routing definitions.
- src/app/shared/services/PortfolioDataService/user-databank-service.ts
  -> Central data hub for bio, skills, and portfolio items.
- src/app/main-page/contact-me/contact-me.ts
  -> Functional logical layer for the contact UI.
- public/sendMail.php
  -> Server-side endpoint handling mail transmission.
- public/assets/data/i18n/en.json
  -> Translation vocabulary dictionary for English.
- public/assets/data/i18n/de.json
  -> Translation vocabulary dictionary for German.

8. NOTICE REGARDING CONTACT FORM SUBMISSIONS

---

When running the frontend via the local Angular development server,
native PHP processing is disabled. True email delivery requires
uploading the sendMail.php script onto an active web server
configured with backend PHP execution support.
