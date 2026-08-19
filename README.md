<div align="center">

# ✈️ Wanderly

**Find and book travel stays, resorts and experiences around the world.**

A modern, fully responsive travel booking platform built with **React** — browse curated destinations, filter stays, manage wishlists and book your next escape.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white&style=flat-square)
![Bootstrap](https://img.shields.io/badge/Bootstrap-4-7952B3?logo=bootstrap&logoColor=white&style=flat-square)
![Sass](https://img.shields.io/badge/Sass-CC6699?logo=sass&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green.svg?style=flat-square)

</div>

---

## 🌍 About the project

Wanderly is a travel booking web application inspired by modern travel platforms (Airbnb / Booking-style UX). It lets users **discover stays, filter trips, view details, request bookings, save to wishlist** and manage travel preferences through a clean dashboard — with a polished, fully responsive UI.

> Landing page · Destination search · Filters · Trip cards · Booking flow · Wishlist · FAQ · Contact · User profile (personal info, security, payments, notifications, privacy)

---

## ✨ Features

- 🏝️ **Curated destinations** — popular nearby, islands, surfing, national parks, lake, beach & camping categories
- 🔎 **Advanced filters** — location, check-in / check-out dates, guests
- 🃏 **Trip cards** — ratings, dates, prices and images for every stay
- 🎬 **Interactive media** — video hero with play/pause controls (GSAP-powered feel)
- ❤️ **Wishlist** — save trips for later
- 📋 **Request to Book** — protected booking flow with trust messaging
- 👤 **User profile dashboard** — personal info, login & security, payments, notifications, privacy settings
- 📧 **Newsletter & FAQ** — subscribe and discover support answers
- 📱 **Fully responsive** — mobile-first using Bootstrap grid + custom Sass

---

## 🛠️ Tech stack

| Technology | Purpose |
| ---------- | ------- |
| [React](https://reactjs.org/) | UI library & SPA |
| [React Router](https://reactrouter.com/) | Client-side routing |
| [Bootstrap 4](https://getbootstrap.com/) + Popper | Layout & components |
| [Sass](https://sass-lang.com/) | Custom styling |
| [GSAP](https://greensock.com/gsap/) | Animations |
| [ApexCharts](https://apexcharts.com/) | Data visualization |
| [react-datepicker](https://reactdatepicker.com/) | Date picking |
| [axios](https://axios-http.com/) | HTTP requests |

---

## 🚀 Getting started

### Prerequisites

- Node.js ≥ 14
- npm (or yarn)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/akajdid-mostafa/wanderly.git
cd wanderly

# 2. Install dependencies
npm install --legacy-peer-deps

# 3. Start the dev server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser — hot reload is enabled.

### Scripts

| Command           | Description                     |
| ----------------- | ------------------------------- |
| `npm start`       | Run the development server      |
| `npm run build`   | Build the app for production    |
| `npm test`        | Run the test suite              |

---

## 📁 Project structure

```
src/
├── assets/                 # Sass, CSS, fonts, scripts
├── component/
│   ├── Card/               # Trip cards
│   ├── Modal/              # Auth modals, filters
│   └── Other/              # Navbar, Footer, shared components
└── container/
    ├── homepage/           # Landing page sections & pages
    │   └── Profile/        # User dashboard pages
    └── index.jsx           # App router
```

---

## 🔮 Roadmap

- [ ] Connect a real backend (REST API) for persistence
- [ ] Stripe / payment integration for checkout
- [ ] Host experiences marketplace
- [ ] Multi-language & i18n support

---

## 👨‍💻 Author

**Mostafa Akajdid** — Frontend Developer

- 🌐 **Portfolio:** [akajdidm.vercel.app](https://akajdidm.vercel.app/)
- 🐙 **GitHub:** [@akajdid-mostafa](https://github.com/akajdid-mostafa)
- ✉️ **Email:** hello@wanderly.com

---

<div align="center">

**Made with 💚 by [Mostafa Akajdid](https://akajdidm.vercel.app/)**

⭐ If you like this project, don't forget to leave a star!

</div>