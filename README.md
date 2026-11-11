# AutoLux — Luxury Car Sales & Rental Platform

A responsive React + Tailwind CSS luxury automotive storefront with cinematic video hero, Framer Motion animations, English/Dari/Pashto language switching, dark/light theme, vehicle filtering, search, sorting, favourites, vehicle detail modal and demo enquiry form.

## Run locally
1. Extract the ZIP.
2. Open the project folder in VS Code.
3. Open Terminal in this folder (the folder containing `package.json`).
4. Run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the local URL printed by Vite (usually http://localhost:5173).

## Production build
```bash
npm run build
npm run preview
```

## GitHub
Create a repository, then from this folder:
```bash
git init
git add .
git commit -m "Build AutoLux luxury car platform"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Included assets
The supplied video is used as the hero background. The four supplied car images are included in `public/assets/`. Additional vehicle imagery loads from Unsplash and therefore requires an internet connection.

## Notes
- This is a frontend demo. Vehicle inventory is sample data in `src/App.jsx`.
- The enquiry form validates and shows a demo confirmation; it does not send to a backend.
- Contact details and prices are placeholders. Replace them with verified business information before launch.
- Dari and Pashto language switching is included, with right-to-left layout.
- AI-assisted code should be reviewed and understood before submission, as required by your bootcamp handbook.
