# AGENTS.md - Development Guide for Agents

This document describes conventions, commands, and guidelines for the Scrabblr - CROUSSEUX Invitation Page project.

## 📁 Project Structure

```
scrabble/
├── public/                    # Static files
├── src/                      # React source code
├── index.html               # HTML template
├── vite.config.ts           # Vite configuration
├── tsconfig.json            # TypeScript configuration
├── package.json             # Dependencies and scripts
└── AGENTS.md                # This file
```

## 🚀 Main Commands

```bash
npm run dev          # Start development server (port 5173)
npm run build        # Build for production
npm run preview      # Preview the build
npm run lint         # Run ESLint on all files
npx prettier --write . # Format all files with Prettier
```

### Testing (if added)

_No test framework configured yet._ To add Vitest:

```bash
npm install -D vitest @testing-library/react @testing-library/jest-dom jsdom
```

Add scripts to package.json:

```json
"scripts": {
  "test": "vitest run",
  "test:watch": "vitest",
  "test:ui": "vitest --ui",
  "test:single": "vitest run --"
}
```

Run a single test: `npm run test:single src/components/Component.test.tsx`

## 🎨 Code Conventions

### TypeScript

- Use strict TypeScript with React
- Always type component props
- Avoid `any`, prefer explicit types
- Use `interface` for props, `type` for unions

### Imports Order

```typescript
import React from 'react';
import { motion } from 'framer-motion';  // External libraries
import Component from './Component';      // Relative imports
import './styles.css';                    # Styles
import type { Props } from './types';     # Type-only imports
```

### React Components

- Use function components with arrow syntax
- Name components in PascalCase
- Export default for main components
- Use Framer Motion for animations

### Styles

- Use separate CSS files for major components
- Name classes in kebab-case
- Use CSS variables for colors/theme
- Mobile-first approach with breakpoints: 480px, 768px, 1024px

### Animations

- Use Framer Motion for complex animations
- Always include `prefers-reduced-motion` support

### Naming Conventions

- Components: `PascalCase`
- Files: `PascalCase.tsx` for components, `kebab-case.css` for styles
- Variables/functions: `camelCase`
- Constants: `UPPER_SNAKE_CASE`
- Types/interfaces: `PascalCase`

### Error Handling

- Use TypeScript to catch type errors at compile time
- Display user-friendly error messages in UI

## 🎯 Project-Specific Guidelines

### Gen Z / CROUSSEUX Style

- Use casual, modern language with emojis
- Bright colors and animated gradients
- Glassmorphism and neon effects
- Smooth, interactive animations

### CROUS Images

Images should be placed in `public/images/`:

- `crous_logo_top_left.png` - Logo for top left corner
- `crous_logo_top_right.png` - Logo for top right corner
- `crous_logo_bottom_left.png` - Logo for bottom left corner
- `crous_logo_bottom_right.png` - Logo for bottom right corner

### Responsive Design

- Mobile-first approach
- Use `clamp()` for font sizes
- Hide non-essential elements on mobile

### Accessibility

- Always add `alt` to images
- Ensure sufficient color contrast
- Support reduced motion preference

## 🔧 Technical Configuration

ESLint: React Hooks, TypeScript strict, no console.log in production.
TypeScript: Strict mode, no unused locals/parameters, JSX React mode.

## 🚀 Deployment

The site can be deployed on:

- GitHub Pages: `npm run build` then push the `dist/` folder
- Vercel: Automatic deployment from GitHub
- Netlify: Drag & drop the `dist/` folder

## 🐛 Common Issues

1. **TypeScript errors**: Check imports and types
2. **Build failures**: Run `npm run build` to see errors
3. **Animation lag**: Reduce number of simultaneously animated elements
4. **Missing images**: Verify path in `public/`

### Pre-Commit Checks

- [ ] Build passes (`npm run build`)
- [ ] Linting passes (`npm run lint`)
- [ ] Animations work on mobile/desktop
- [ ] CROUS images are in place (placeholders if not)

## 🔍 Cursor & Copilot Rules

No Cursor rules (`.cursorrules` or `.cursor/rules/`) or Copilot rules (`.github/copilot-instructions.md`) found in the repository.
