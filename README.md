# Birthday Surprise Web App

A premium romantic birthday surprise app built with React, Vite, Tailwind CSS, Framer Motion, and React Icons.

## Install

```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```bash
npm.cmd install
npm.cmd run dev
```

## Customize

Open `src/config/surpriseConfig.js` to change:

- Her name or nickname
- Secret code
- Birthday messages and love letter
- Memory card text and images

To replace images later, put files in `src/assets`, import them in `surpriseConfig.js`, and add them to the matching memory item.

## Build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Deploy To Vercel

1. Push this project to GitHub.
2. Import the repository in Vercel.
3. Use these defaults:
   - Framework: Vite
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy and send the generated link.

## Deploy To Netlify

1. Push this project to GitHub.
2. Create a new Netlify site from the repository.
3. Use these defaults:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy and send the generated link.
