# You're the Element I Was Missing

A romantic, chemistry-themed single-page website built with React and Vite, deployed to GitHub Pages.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Output is in `dist/`.

## Deploy to GitHub Pages

1. Create a new repository named `doris` (or update `base` in `vite.config.js` to match your repo name).

2. Push this project to the `main` branch.

3. In your repo: **Settings > Pages**, set **Source** to **GitHub Actions**.

4. The workflow will run on every push to `main` and deploy to **https://gzquse.github.io/doris/**.

### Customizing the Base Path

If your repo has a different name, update `vite.config.js`:

```js
base: '/your-repo-name/',
```

## Customizing Content

- **Love letter**: Edit `src/components/LoveLetter.jsx`
- **Timeline**: Edit the `milestones` array in `src/components/Timeline.jsx`
- **Photos**: Add images to `public/images/` and update the `images` array in `src/components/PhotoGallery.jsx`:

```jsx
const images = [
  { src: '/doris/images/photo1.jpg', alt: 'Description' },
  // ...
]
```
