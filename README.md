# Moipressor - Déploiement Vercel

## 🚀 Installation locale

```bash
npm install
npm run dev
```

## 📦 Build de production

```bash
npm run build
npm run preview
```

## 🌐 Déploiement sur Vercel

### Méthode 1 : Via l'interface Vercel (Recommandé)

1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez le dépôt `moipressor1`
5. Vercel détectera automatiquement Vite
6. Cliquez sur "Deploy"

### Méthode 2 : Via Vercel CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

## ⚙️ Configuration Vercel

Le projet est configuré via `vercel.json` :
- **Framework**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Node Version**: 18.x

## 📝 Scripts disponibles

- `npm run dev` - Démarrer le serveur de développement
- `npm run build` - Build de production
- `npm run preview` - Prévisualiser le build
- `npm run lint` - Vérifier le code
- `npm run format` - Formater le code

## 🔧 Technologies

- **React** 18.2
- **TypeScript** 5.2
- **Vite** 4.4
- **Material-UI** 5.14
- **React Router** 6.30
- **Redux Toolkit** 1.9
- **Leaflet** (cartes)