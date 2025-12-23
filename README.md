# Portfolio Website

A modern, professional portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases my work experience, technical skills, education, and achievements.

## Features

- 🎨 Modern, responsive design with dark mode support
- ⚡ Fast static site generation with Next.js
- 📱 Mobile-first responsive layout
- 🚀 Optimized for SEO
- 🎯 Smooth scroll navigation
- 💼 Complete resume showcase

## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: GitHub Pages

## Getting Started

### Prerequisites

- Node.js 20.9.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Portfolio_website.git
cd Portfolio_website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
```

The static files will be generated in the `out` directory.

## Deployment

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your code to the `main` branch
2. GitHub Actions will automatically build and deploy the site
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Set Source to "GitHub Actions"

### Manual Deployment

If you prefer manual deployment:

1. Build the project:
```bash
npm run build
```

2. Deploy the `out` folder to the `gh-pages` branch

## Project Structure

```
portfolio-website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   └── globals.css   # Global styles
│   ├── components/       # React components
│   └── data/             # Resume data
├── public/               # Static assets
└── .github/workflows/    # GitHub Actions
```

## Customization

To update your resume information, edit the data file:
- `src/data/resume.ts` - Contains all resume data

## License

This project is open source and available under the MIT License.

## Contact

- **Name**: Alwin Kunjachan
- **Email**: alwinpkunjachan@gmail.com
- **LinkedIn**: [linkedin.com/in/alwin-kunjachan](https://linkedin.com/in/alwin-kunjachan)
- **Location**: Alappuzha, Kerala, India

