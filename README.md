# OTAWANTA Website

A React website for OTAWANTA - Minimal Deep / Tech House music artist.

## Prerequisites

Before you start, make sure you have Node.js installed:
1. Go to [https://nodejs.org/](https://nodejs.org/)
2. Download and install the LTS version
3. Restart VS Code after installation

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser to:**
   ```
   http://localhost:5173
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## Deployment to GitHub Pages

1. **Create a GitHub repository:**
   - Go to GitHub.com and create a new repository named `otawanta-website`

2. **Update the homepage in package.json:**
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/otawanta-website"
   ```

3. **Initialize Git and push:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/otawanta-website.git
   git push -u origin main
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings
   - Navigate to Pages section
   - Select `gh-pages` branch as source

Your website will be available at: `https://YOUR_USERNAME.github.io/otawanta-website`

## Project Structure

```
├── Components/
│   └── otawanta/         # React components
├── Pages/
│   └── home.jsx          # Main page
├── src/
│   ├── main.jsx          # React entry point
│   ├── App.jsx           # Main App component
│   └── index.css         # Global styles
├── index.html            # HTML template
└── package.json          # Dependencies and scripts
```