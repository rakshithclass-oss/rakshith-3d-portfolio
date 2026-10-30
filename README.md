# Rakshith — 3D Portfolio Dashboard

A responsive personal portfolio dashboard built from the details in the supplied resume. It uses React, Vite, Three.js, React Three Fiber, Drei, Framer Motion, and Lucide icons.

## Features

- Interactive 3D neural-core scene (drag to rotate; motion toggle)
- Responsive sidebar navigation and six dashboard sections
- Overview cards for selected projects, experience, recognition, and technical focus
- Project detail dialogs with resume-based descriptions and technology tags
- Skills grouped by languages/web, AI/ML/computer vision, and frameworks/tools
- Experience timeline, education records, and recognition section
- Contact links and email copy action
- Download CV action using the supplied resume (`public/Rakshith_Resume.docx`)

## Run locally

1. Install Node.js (LTS).
2. Extract the ZIP and open this folder in VS Code.
3. Open a terminal in the project folder and run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the localhost URL printed in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

The build script invokes Vite through Node directly to avoid shell execute-permission issues with `node_modules/.bin/vite`. The `allowScripts` entry approves the `esbuild@0.28.2` installation script that appeared in the previous deployment log. Review dependency installation scripts before approving them.

## Deploy to Vercel

- Push the project folder to GitHub. Do not upload `node_modules` or `dist`; they are excluded by `.gitignore`.
- In Vercel, import the GitHub repository and select the Vite preset.
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`

If Vercel still reports an old build error, redeploy without using the existing build cache.

## Customisation

- `src/App.jsx` — dashboard content and resume details
- `src/styles.css` — theme, layout, and responsive styles
- `src/components/NeuralScene.jsx` — 3D scene, lights, materials, and controls
- `public/Rakshith_Resume.docx` — downloadable resume file
