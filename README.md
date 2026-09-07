# Spector — Digital Agency Portfolio

A modern, high-performance portfolio website for a digital agency built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**. Features smooth animations with Framer Motion, a comprehensive component library, and a fully responsive design.

---

## ✨ Features

- **Next.js 14 App Router** — Server Components, streaming, and optimized builds
- **TypeScript** — Full type safety across the codebase
- **Tailwind CSS** — Utility-first styling with custom design tokens
- **Framer Motion** — Production-ready animations and transitions
- **Lucide React** — Clean, consistent icon system
- **Responsive Design** — Mobile-first, works beautifully on all devices
- **SEO Optimized** — Metadata, Open Graph, and semantic HTML
- **Accessible** — WCAG 2.1 AA compliant components

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18.17 or later
- npm 9+ (or pnpm/yarn)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/spector.git
cd spector

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## 📁 Project Structure

```
spector/
├── public/                 # Static assets (images, fonts, favicon)
├── src/
│   ├── app/               # Next.js App Router pages
│   │   ├── globals.css    # Global styles & Tailwind imports
│   │   ├── layout.tsx     # Root layout with metadata
│   │   └── page.tsx       # Homepage composition
│   ├── components/        # React components
│   │   ├── CaseStudy.tsx  # Case study showcase
│   │   ├── Expertise.tsx  # Services/expertise grid
│   │   ├── FAQ.tsx        # Accordion FAQ section
│   │   ├── Footer.tsx     # Site footer
│   │   ├── Hero.tsx       # Hero section with CTA
│   │   ├── MoreProjects.tsx # Additional projects link
│   │   ├── Navbar.tsx     # Navigation with mobile menu
│   │   ├── Pricing.tsx    # Pricing tiers
│   │   ├── Process.tsx    # Workflow/process steps
│   │   ├── Recognition.tsx # Awards/logos
│   │   ├── SelectedProjects.tsx # Featured projects
│   │   ├── Services.tsx   # Service offerings
│   │   ├── Showreel.tsx   # Video portfolio
│   │   ├── Team.tsx       # Team members
│   │   └── Testimonials.tsx # Client testimonials
├── .gitignore
├── next.config.js         # Next.js configuration
├── package.json
├── postcss.config.js      # PostCSS/Tailwind config
├── tailwind.config.js     # Tailwind customization
└── tsconfig.json          # TypeScript configuration
```

---

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint for code quality |

---

## 🎨 Customization

### Design Tokens (tailwind.config.js)

```js
// Extend theme with custom colors, spacing, fonts
theme: {
  extend: {
    colors: {
      primary: { /* your brand colors */ },
      secondary: { /* accent colors */ },
    },
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      display: ['Cal Sans', 'Inter', 'sans-serif'],
    },
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out',
      'slide-up': 'slideUp 0.6s ease-out',
    },
  },
}
```

### Global Styles (src/app/globals.css)

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html { @apply scroll-smooth; }
  body { @apply antialiased text-gray-900 bg-white; }
}

@layer components {
  .btn-primary { @apply px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors; }
}
```

---

## 📦 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or connect your GitHub repo at [vercel.com/new](https://vercel.com/new) for automatic deployments on push.

### Docker

```dockerfile
# Dockerfile
FROM node:20-alpine AS base
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

```bash
docker build -t spector .
docker run -p 3000:3000 spector
```

---

## 🧪 Code Quality

### Linting

```bash
npm run lint
```

### Type Checking

```bash
npx tsc --noEmit
```

### Formatting (if Prettier configured)

```bash
npx prettier --write .
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Size | Target |
|------------|------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large screens |

---

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels on interactive components
- Focus-visible states for keyboard navigation
- Color contrast ratios meeting WCAG AA
- Reduced motion support via `prefers-reduced-motion`
- Alt text for all images

---

## 🔧 Tech Stack

| Category | Technology |
|----------|------------|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript 5.5 |
| Styling | Tailwind CSS 3.4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Runtime | React 18 |
| Build | Turbopack (dev) / Webpack (prod) |
| Deployment | Vercel / Docker / Node.js |

---

## 📄 License

ISC License — feel free to use for personal or commercial projects.

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📞 Support

For questions or support, open an issue on GitHub or contact the maintainers.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**