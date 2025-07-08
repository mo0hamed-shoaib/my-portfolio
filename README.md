# Next.js Portfolio

This project is a modern, highly customizable portfolio website built with Next.js, React, and Tailwind CSS. It showcases a component-driven architecture, featuring reusable UI elements and sections such as About, Projects, Contact, and more. The codebase leverages TypeScript for type safety, Radix UI for accessible and consistent UI primitives, and a collection of custom hooks and utilities to enhance developer productivity. Designed for scalability and maintainability, this portfolio template is ideal for developers who want a professional, performant, and visually appealing way to present their work and skills online.

---

## 📁 Folder Structure

```
my-portfolio/
├── .git/                   # Git version control data
├── .next/                  # Next.js build output (auto-generated)
├── app/
│   ├── globals.css         # Global styles
│   ├── layout.tsx          # Main layout component
│   └── page.tsx            # Main page component
├── components/
│   ├── About.tsx           # About section
│   ├── Contact.tsx         # Contact section
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero/landing section
│   ├── MouseTracker.tsx    # Mouse tracking effect
│   ├── Navigation.tsx      # Navigation bar
│   ├── Projects.tsx        # Projects showcase
│   ├── TechIcon.tsx        # Technology icons
│   └── ui/                 # Reusable UI components
│       ├── accordion.tsx
│       ├── alert-dialog.tsx
│       ├── alert.tsx
│       ├── aspect-ratio.tsx
│       ├── avatar.tsx
│       ├── badge.tsx
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── calendar.tsx
│       ├── card.tsx
│       ├── carousel.tsx
│       ├── chart.tsx
│       ├── checkbox.tsx
│       ├── collapsible.tsx
│       ├── command.tsx
│       ├── context-menu.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── dropdown-menu.tsx
│       ├── form.tsx
│       ├── hover-card.tsx
│       ├── input-otp.tsx
│       ├── input.tsx
│       ├── label.tsx
│       ├── menubar.tsx
│       ├── navigation-menu.tsx
│       ├── pagination.tsx
│       ├── popover.tsx
│       ├── progress.tsx
│       ├── radio-group.tsx
│       ├── resizable.tsx
│       ├── scroll-area.tsx
│       ├── select.tsx
│       ├── separator.tsx
│       ├── sheet.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       ├── sonner.tsx
│       ├── switch.tsx
│       ├── table.tsx
│       ├── tabs.tsx
│       ├── textarea.tsx
│       ├── toast.tsx
│       ├── toaster.tsx
│       ├── toggle-group.tsx
│       ├── toggle.tsx
│       ├── tooltip.tsx
│       └── ...              # More UI components
├── hooks/
│   └── use-toast.ts        # Custom React hook for toast notifications
├── lib/
│   └── utils.ts            # Utility functions
├── node_modules/           # Node.js dependencies (auto-generated)
├── .eslintrc.json          # ESLint configuration
├── .gitignore              # Git ignore rules
├── components.json         # Components configuration
├── next.config.js          # Next.js configuration
├── package-lock.json       # Dependency lock file
├── package.json            # Project metadata and dependencies
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── next-env.d.ts           # Next.js TypeScript environment
```

---

## 🚀 Features

- **Next.js** for server-side rendering and routing
- **React** for building UI components
- **Tailwind CSS** for utility-first styling
- **Radix UI** and custom UI components for accessibility and design consistency
- **TypeScript** for type safety
- **Reusable hooks** (e.g., `use-toast`)
- **Component-driven structure** for scalability and maintainability

---

## 🛠️ Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run the development server:**
   ```bash
   npm run dev
   ```
3. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📦 Main Dependencies

- `next`
- `react`
- `tailwindcss`
- `@radix-ui/*`
- `framer-motion`
- `zod`
- `react-hook-form`
- `date-fns`
- `recharts`
- _(see `package.json` for the full list)_

---

## 📚 Customization

- Add or modify UI components in `components/ui/`
- Update global styles in `app/globals.css`
- Add new pages or layouts in the `app/` directory
- Add custom hooks in `hooks/`
- Place utility functions in `lib/`

---

## 📝 License

This project is licensed under the MIT License.
