# AGENTS.md - Guide pour les agents de développement

Ce document décrit les conventions, commandes et guidelines pour le projet Scrabblr - Page d'invitation CROUSSEUX.

## 📁 Structure du projet

```
scrabble/
├── public/                    # Fichiers statiques
│   ├── images/               # Images du projet (à créer)
│   │   ├── crous_logo_top_left.png
│   │   ├── crous_logo_top_right.png
│   │   ├── crous_logo_bottom_left.png
│   │   └── crous_logo_bottom_right.png
│   └── vite.svg
├── src/
│   ├── components/           # Composants React
│   │   ├── MainInvitation.tsx     # Composant principal
│   │   ├── AnimatedTitle.tsx      # Titre animé
│   │   ├── ScrabbleLetters.tsx    # Lettres de Scrabble animées
│   │   ├── CROUSLogos.tsx         # Logos CROUS dans les coins
│   │   ├── MainInvitation.css     # Styles principaux
│   │   ├── ScrabbleLetters.css    # Styles des lettres
│   │   └── CROUSLogos.css         # Styles des logos CROUS
│   ├── App.tsx              # Point d'entrée React
│   ├── App.css              # Styles globaux
│   ├── main.tsx             # Rendu principal
│   └── index.css            # Styles de base
├── index.html               # Template HTML
├── vite.config.ts           # Configuration Vite
├── tsconfig.json            # Configuration TypeScript
├── package.json             # Dépendances et scripts
└── AGENTS.md                # Ce fichier
```

## 🚀 Commandes principales

### Développement
```bash
npm run dev          # Démarre le serveur de développement (port 5173)
```

### Build & Production
```bash
npm run build        # Build pour production
npm run preview      # Prévisualisation du build
```

### Linting & Formatting
```bash
npm run lint         # Exécute ESLint sur tous les fichiers
npx prettier --write . # Formatte tous les fichiers avec Prettier
```

## 🎨 Conventions de code

### TypeScript
- Utiliser TypeScript strict avec React
- Toujours typer les props des composants
- Éviter `any`, préférer des types explicites
- Utiliser `interface` pour les props, `type` pour les unions

### Imports
```typescript
// Ordre des imports
import React from 'react';
import { motion } from 'framer-motion';  // Bibliothèques externes
import Component from './Component';      // Imports relatifs
import './styles.css';                    // Styles
import type { Props } from './types';     // Types uniquement
```

### Composants React
- Utiliser des fonctions composants avec syntaxe arrow
- Nommer les composants en PascalCase
- Exporter par défaut les composants principaux
- Utiliser Framer Motion pour les animations

```typescript
// Exemple de composant
interface ComponentProps {
  title: string;
  count?: number;
}

const Component = ({ title, count = 0 }: ComponentProps) => {
  return <div>{title} - {count}</div>;
};

export default Component;
```

### Styles
- Utiliser des fichiers CSS séparés pour chaque composant majeur
- Nommer les classes en kebab-case
- Utiliser des variables CSS pour les couleurs/thème
- Préférer Flexbox/Grid pour le layout
- Ajouter des styles responsives avec media queries

### Animations
- Utiliser Framer Motion pour les animations complexes
- Pour les animations simples, préférer CSS keyframes
- Toujours ajouter `prefers-reduced-motion` dans les media queries
- Limiter les animations en boucle infinie à des éléments décoratifs

### Nommage
- Composants: `PascalCase`
- Fichiers: `PascalCase.tsx` pour composants, `kebab-case.css` pour styles
- Variables/fonctions: `camelCase`
- Constantes: `UPPER_SNAKE_CASE`
- Types/interfaces: `PascalCase`

## 🎯 Guidelines spécifiques au projet

### Style Gen Z / CROUSSEUX
- Utiliser un langage décontracté et moderne
- Incorporer des emojis pertinents
- Couleurs vives et gradients animés
- Effets glassmorphism et néons
- Animations fluides et interactives

### Images CROUS
Les images doivent être placées dans `public/images/`:
- `crous_logo_top_left.png` - Logo pour le coin haut gauche
- `crous_logo_top_right.png` - Logo pour le coin haut droit
- `crous_logo_bottom_left.png` - Logo pour le coin bas gauche
- `crous_logo_bottom_right.png` - Logo pour le coin bas droit

Format recommandé: PNG avec transparence, taille ~100x100px.

### Responsive Design
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Utiliser `clamp()` pour les tailles de police
- Cacher les éléments non essentiels sur mobile

### Accessibilité
- Toujours ajouter `alt` aux images
- Utiliser des contrastes suffisants
- Support du mode réduit de mouvement
- Navigation au clavier fonctionnelle

## 🔧 Configuration technique

### ESLint Rules
- React Hooks rules activées
- TypeScript strict activé
- Import/export ordonnés
- Pas de console.log en production

### Vite Configuration
- Build optimisé pour React
- Support TypeScript
- Assets optimisés automatiquement

### Déploiement
Le site peut être déployé sur:
- GitHub Pages: `npm run build` puis push du dossier `dist/`
- Vercel: Déploiement automatique depuis GitHub
- Netlify: Drag & drop du dossier `dist/`

## 🐛 Débogage

### Problèmes courants
1. **TypeScript errors**: Vérifier les imports et les types
2. **Build failures**: `npm run build` pour voir les erreurs
3. **Animations lag**: Réduire le nombre d'éléments animés simultanément
4. **Images manquantes**: Vérifier le chemin dans `public/`

### Vérifications avant commit
- [ ] Build passe (`npm run build`)
- [ ] Linting passe (`npm run lint`)
- [ ] Animations fonctionnent sur mobile/desktop
- [ ] Images CROUS sont en place (placeholders sinon)

## 📝 Notes supplémentaires

- Le projet utilise Framer Motion v12 pour les animations
- Police principale: Inter (Google Fonts)
- Couleurs: Gradients vifs, thème gen Z
- Objectif: Page d'invitation fun et engaging pour le Scrabble

Pour toute question, consulter la documentation:
- [React](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev)