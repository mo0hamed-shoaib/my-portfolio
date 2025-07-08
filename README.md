# ✨ Next.js Portfolio

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<div align="center">
  <h3>🚀 A modern, highly customizable portfolio website</h3>
  <p>Built with cutting-edge technologies for performance, accessibility, and developer experience</p>
</div>

---

## 🎯 Overview

This portfolio showcases a **component-driven architecture** with reusable UI elements, featuring sections for About, Projects, Contact, and more. Built with scalability and maintainability in mind, it's the perfect foundation for developers who want a professional, performant way to present their work online.

### ✨ Key Highlights

- 🎨 **Modern Design** - Clean, responsive UI with smooth animations
- 🔧 **Type-Safe** - Full TypeScript support for robust development
- 🎭 **Accessible** - Built with Radix UI primitives for inclusive design
- 🚀 **Performance** - Optimized with Next.js server-side rendering
- 🧩 **Modular** - Reusable components and custom hooks

---

## 🛠️ Tech Stack

<table>
<tr>
<td align="center" width="50%">

**Frontend**
- Next.js 14+ (App Router)
- React 18+ with Hooks
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations

</td>
<td align="center" width="50%">

**UI & UX**
- Radix UI primitives
- Custom component library
- Responsive design
- Dark/Light theme support
- Accessibility-first approach

</td>
</tr>
</table>

---

## 📁 Project Structure

```
my-portfolio/
├── 📱 app/
│   ├── globals.css         # Global styles & theme
│   ├── layout.tsx          # Root layout component
│   └── page.tsx            # Home page
├── 🧩 components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact form & info
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Landing hero section
│   ├── MouseTracker.tsx    # Interactive mouse effects
│   ├── Navigation.tsx      # Navigation bar
│   ├── Projects.tsx        # Project showcase
│   ├── TechIcon.tsx        # Technology icons
│   └── ui/                 # Reusable UI components
│       ├── button.tsx      # Button variants
│       ├── card.tsx        # Card components
│       ├── dialog.tsx      # Modal dialogs
│       ├── input.tsx       # Form inputs
│       └── ...             # 40+ UI components
├── 🪝 hooks/
│   └── use-toast.ts        # Toast notification hook
├── 📚 lib/
│   └── utils.ts            # Utility functions
├── ⚙️ Config Files
│   ├── next.config.js      # Next.js configuration
│   ├── tailwind.config.ts  # Tailwind customization
│   └── tsconfig.json       # TypeScript settings
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18.0+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build Commands

```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

---

## 🎨 Customization Guide

### 🎭 Components
- **UI Components**: Modify `components/ui/` for design system changes
- **Sections**: Update `components/` for content sections
- **Animations**: Customize Framer Motion configs in components

### 🎨 Styling
- **Global Styles**: Edit `app/globals.css`
- **Theme**: Configure `tailwind.config.ts`
- **Colors**: Update CSS variables in globals.css

### 🔧 Configuration
- **Metadata**: Update `app/layout.tsx`
- **Routes**: Add pages in `app/` directory
- **Utilities**: Extend `lib/utils.ts`

---

## 📦 Dependencies

<details>
<summary><strong>Core Dependencies</strong></summary>

- `next` - React framework
- `react` - UI library
- `typescript` - Type safety
- `tailwindcss` - CSS framework
- `framer-motion` - Animations
- `@radix-ui/*` - Accessible primitives
- `zod` - Schema validation
- `react-hook-form` - Form handling
- `date-fns` - Date utilities
- `recharts` - Data visualization

</details>

<details>
<summary><strong>Development Dependencies</strong></summary>

- `eslint` - Code linting
- `prettier` - Code formatting
- `@types/*` - Type definitions
- `autoprefixer` - CSS prefixing
- `postcss` - CSS processing

</details>

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">
  <p>Made with ❤️ and modern web technologies</p>
  <p>
    <a href="#-quick-start">Get Started</a> •
    <a href="#-customization-guide">Customize</a> •
    <a href="#-contributing">Contribute</a>
  </p>
</div>
