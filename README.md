# 🏆 Hacker Rivals Website

> The world's first eSports-style hackathon - where innovation meets entertainment

![Hacker Rivals](https://img.shields.io/badge/Event-Hacker%20Rivals-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.1.6-646CFF?style=for-the-badge&logo=vite)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.13-06B6D4?style=for-the-badge&logo=tailwindcss)

## 🎯 Overview

Hacker Rivals is revolutionizing the hackathon experience by combining competitive programming with eSports-style entertainment. This website serves as the primary platform for event information, registration, and community engagement.

### ✨ Key Features

- **eSports-Style Competition** - Professional MC, live audience voting, and entertainment
- **Interactive Registration** - Streamlined application process with team management
- **Live Event Information** - Real-time updates, schedules, and venue details
- **Community Guidelines** - Comprehensive rules and code of conduct
- **Sponsor Integration** - Showcase partners and their technologies
- **Mobile-First Design** - Responsive across all devices

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone https://github.com/TheCoderSingh/hackerrivals-website.git

# Navigate to project directory
cd hackerrivals-website

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 🛠️ Tech Stack

### Core Technologies

- **React 19.1.1** - Modern UI library with latest features
- **TypeScript 5.8.3** - Type-safe JavaScript development
- **Vite 7.1.6** - Fast build tool and development server
- **Tailwind CSS 4.1.13** - Utility-first CSS framework

### Additional Libraries

- **iconoir-react** - Beautiful, customizable SVG icons
- **React DOM** - DOM-specific methods for React

### Development Tools

- **ESLint** - Code linting and quality enforcement
- **Prettier** - Code formatting
- **TypeScript ESLint** - TypeScript-specific linting rules

## 📁 Project Structure

```
hackerrivals-website/
├── public/                 # Static assets
│   ├── robots.txt         # SEO crawling instructions
│   ├── sitemap.xml        # Site structure for search engines
│   └── sponsor-proposal.md # Sponsorship information
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Accordion/     # Collapsible content
│   │   ├── CodeOfConductModal/ # Community guidelines modal
│   │   ├── Countdown/     # Event countdown timer
│   │   ├── ESportsSection/ # Competition format info
│   │   ├── FAQ/          # Frequently asked questions
│   │   ├── Footer/       # Site footer with links
│   │   ├── Hero/         # Landing page hero section
│   │   ├── Navbar/       # Navigation header
│   │   ├── Register/     # Registration forms
│   │   ├── RulesModal/   # Competition rules modal
│   │   ├── Schedule/     # Event timeline
│   │   ├── Sponsors/     # Partner showcase
│   │   ├── Team/         # Organizer profiles
│   │   ├── VenueInfo/    # Location and logistics
│   │   └── ViewRulesButton/ # Interactive rule access
│   ├── constants/        # Static data and configuration
│   │   ├── codeOfConduct.ts # Community guidelines
│   │   ├── esports.ts    # Competition details
│   │   ├── eventConfig.ts # Event state management
│   │   ├── faq.ts        # Question/answer data
│   │   ├── rules.ts      # Competition rules
│   │   └── ...           # Other configuration files
│   ├── contexts/         # React context providers
│   ├── assets/          # Images and media files
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── scripts/
│   └── generate-sitemap.js # SEO sitemap generation
├── docs/                # Documentation
├── eslint.config.js     # Linting configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite build configuration
└── package.json         # Dependencies and scripts
```

## 🎨 Key Components

### Interactive Features

- **Rules & Code of Conduct Modals** - Full-screen overlays with organized content
- **Event Registration** - Multi-step application process
- **Venue Integration** - Clickable address (opens maps) and calendar integration
- **Live Event Toggle** - Dynamic content based on event status

### Design System

- **Modern Gaming Aesthetic** - Neon effects, gradients, and animations
- **Responsive Grid Layouts** - Mobile-first approach
- **Interactive Animations** - Smooth transitions and hover effects
- **Accessibility First** - ARIA labels, keyboard navigation, screen reader support

## 🚀 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build production bundle
npm run preview      # Preview production build locally

# Code Quality
npm run lint         # Run ESLint
npm run format       # Format code with Prettier

# SEO & Optimization
npm run generate:sitemap  # Generate XML sitemap
npm run seo:audit         # Run SEO audit tools
```

## 🌐 Deployment

### Production Build

```bash
npm run build
```

### Environment Variables

The application uses environment-based configuration for:

- Event state management
- API endpoints (if applicable)
- Analytics tracking

### Hosting Recommendations

- **Vercel** - Optimized for React/Vite projects
- **Netlify** - Easy continuous deployment
- **GitHub Pages** - Free hosting for open source

## 🎯 Event Configuration

The website includes dynamic event management through `eventConfig.ts`:

```typescript
// Toggle between pre-event and live event modes
export const isEventActive = () => {
  // Custom logic for event state
  return true; // or false for coming soon mode
};
```

## 📱 Features Highlight

### 🏅 Competition Rules

- Comprehensive rule system with categorized sections
- Interactive modal with icon-enhanced headings
- Easy access from multiple locations

### 👥 Code of Conduct

- Community guidelines for safe, inclusive environment
- Professional standards and enforcement policies
- Reporting mechanisms and consequences

### 📍 Venue Information

- Interactive address (opens in default maps app)
- One-click calendar integration
- Transportation and accessibility details

### 🎮 eSports Elements

- Professional tournament format
- Live audience participation
- Real-time voting and engagement

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow existing TypeScript/React patterns
- Use Prettier for formatting
- Ensure ESLint passes
- Add appropriate type definitions

## 📄 License

This project is part of the Hacker Rivals event series. All rights reserved.

## 📞 Contact & Support

- **Event Website**: [hackerrivals.com](https://hackerrivals.com)
- **Email**: info@hackerrivals.com
- **GitHub**: [@TheCoderSingh](https://github.com/TheCoderSingh)

## 🙏 Acknowledgments

- **Science World** - Venue partner
- **AWS** - Cloud infrastructure sponsor
- **Couchbase** - Technology sponsor
- **React Community** - Framework and ecosystem
- **Open Source Contributors** - Tools and libraries

---

<div align="center">

**Built with ❤️ for the developer community**

_Hacker Rivals - Where Innovation Meets Entertainment_

</div>
