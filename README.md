# Scrabblr - Page d'invitation CROUSSEUX 🎮🏛️

Une page web animée et stylée Gen Z pour inviter des gens à jouer au Scrabble, avec un thème CROUSSEUX (étudiant CROUS).

## 🚀 Démarrage rapide

```bash
npm install          # Installer les dépendances
npm run dev          # Lancer le serveur de développement (port 5173)
```

## 📸 Images CROUS nécessaires

Pour que les logos CROUS s'affichent correctement, place les images suivantes dans le dossier `public/images/`:

### Fichiers requis:
1. **`crous_logo_top_left.png`** - Logo pour le coin haut gauche
2. **`crous_logo_top_right.png`** - Logo pour le coin haut droit  
3. **`crous_logo_bottom_left.png`** - Logo pour le coin bas gauche
4. **`crous_logo_bottom_right.png`** - Logo pour le coin bas droit

### Recommandations:
- **Format**: PNG avec transparence
- **Taille**: ~100x100px (ou similaire)
- **Style**: Logo officiel CROUS Bretagne ou version stylisée
- **Couleurs**: S'intégrant au thème arc-en-ciel/Gen Z

### Si tu n'as pas les logos:
1. Utilise des placeholders temporaires (émojis 🏛️)
2. Télécharge les logos officiels sur [crous-bretagne.fr](https://www.crous-bretagne.fr)
3. Crée des versions stylisées avec des outils graphiques

## 🎨 Style Gen Z / CROUSSEUX

La page utilise:
- **Gradients animés** arc-en-ciel
- **Effets glassmorphism** (flou, transparence)
- **Animations fluides** avec Framer Motion
- **Langage décontracté** et emojis
- **Références étudiantes** et humour CROUSSEUX

## 📱 Responsive Design

Optimisé pour:
- **Mobile**: 320px - 768px
- **Tablette**: 768px - 1024px  
- **Desktop**: 1024px+

## 🛠️ Commandes utiles

```bash
npm run build        # Build pour production
npm run preview      # Prévisualiser le build
npm run lint         # Vérifier le code avec ESLint
npx prettier --write . # Formater le code
```

## 🚀 Déploiement

### GitHub Pages (automatique via GitHub Actions):
Le projet inclut une GitHub Action qui déploie automatiquement sur GitHub Pages à chaque push sur la branche `main`.

**URL du site déployé**: `https://lepapelier.github.io/davidlachance-a-quelque-chose-pour-vous/`

**Pour activer GitHub Pages**:
1. Va dans les paramètres du dépôt → Pages
2. Sous "Build and deployment", sélectionne **GitHub Actions**
3. Si ce n'est pas déjà fait, sélectionne le workflow `Deploy to GitHub Pages`
4. Le site sera automatiquement déployé à chaque push sur `main`

**Note**: L'action utilise `peaceiris/actions-gh-pages@v4` qui déploie sur la branche `gh-pages`. Assure-toi que cette branche est configurée comme source dans les paramètres Pages si l'action ne le fait pas automatiquement.

**Vérifier le déploiement**:
```bash
# Tester la page principale
curl -s -o /dev/null -w "%{http_code}" https://lepapelier.github.io/davidlachance-a-quelque-chose-pour-vous/

# Tester les assets (JS, CSS)
curl -s -o /dev/null -w "%{http_code}" https://lepapelier.github.io/davidlachance-a-quelque-chose-pour-vous/assets/index-DjSrdrpA.js
curl -s -o /dev/null -w "%{http_code}" https://lepapelier.github.io/davidlachance-a-quelque-chose-pour-vous/assets/index-CsbaFnrn.css
```

**Déploiement manuel**:
```bash
npm run deploy        # Build et déploie sur gh-pages
```

### Vercel / Netlify:
- Connecte ton dépôt GitHub
- Déploiement automatique à chaque push

## 🐛 Dépannage

### Problèmes courants:
1. **Images manquantes**: Vérifie le dossier `public/images/`
2. **Animations lag**: Réduis le nombre de lettres animées
3. **Build échoue**: Lance `npm run build` pour voir les erreurs
4. **Styles cassés**: Vérifie l'ordre des imports CSS
5. **Erreurs 404 sur les assets**: Vérifie la configuration `base` dans `vite.config.ts` (doit correspondre au nom du dépôt GitHub)
6. **Workflow GitHub Actions échoue**:
   - Vérifie les logs de l'action dans l'onglet "Actions" du dépôt
   - Assure-toi que GitHub Pages est activé dans les paramètres du dépôt
   - Vérifie que le token `GITHUB_TOKEN` a les permissions d'écriture
   - Le workflow nécessite Node.js 18+ et npm

### Solutions:
- Les placeholders s'affichent si les images sont manquantes
- Redémarre le serveur de dev après avoir ajouté les images
- Consulte la console navigateur pour les erreurs
- Pour les erreurs 404 d'assets: vérifie que `vite.config.ts` a `base: '/davidlachance-a-quelque-chose-pour-vous/'` (nom du dépôt)
- Pour l'échec du workflow: vérifie que la branche `gh-pages` existe et est configurée comme source dans GitHub Pages

## 📝 Structure des composants

```
src/components/
├── MainInvitation.tsx    # Écran principal
├── AnimatedTitle.tsx     # Titre "David La Chance..." animé
├── ScrabbleLetters.tsx   # Lettres de Scrabble tombantes
└── CROUSLogos.tsx        # Logos CROUS dans les 4 coins
```

## 🎯 Objectif

Créer une expérience fun et engaging pour inviter des amis à jouer au Scrabble, avec l'humour et le style des étudiants CROUS.

**Hashtags suggérés**: `#TeamCROUS` `#ScrabbleCrousseux` `#GenZ` `#GameNight`