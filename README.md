<<<<<<< HEAD
# Stan Portfolio Website

Modern, responsive portfolio website for Stanley T. M. Menbah Jr., built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Dark Theme** with neon blue accents and glassmorphism effects
- **Responsive Design** optimized for mobile, tablet, and desktop
- **Smooth Animations** with Tailwind CSS and custom CSS animations
- **Professional Sections**:
  - Hero section with call-to-action buttons
  - About section with bio and mission
  - Skills showcase (Programming, Tools, Media, Leadership)
  - Professional experience timeline
  - Project portfolio
  - Education and certifications
  - Contact links with social media integration
- **Accessibility-First** with semantic HTML and ARIA labels
- **SEO Optimized** with metadata and proper heading hierarchy
- **Production-Ready** code with TypeScript support

## Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- CSS3 Animations

**Development Tools:**
- Node.js
- npm
- VS Code

## Getting Started

### Prerequisites
- Node.js 18.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Stan-Web
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

## Build & Deployment

To create a production build:

```bash
npm run build
npm start
```

## Project Structure

```
Stan-Web/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles and animations
├── components/
│   ├── section-heading.tsx # Reusable section header
│   ├── skill-bar.tsx       # Animated skill progress bar
│   ├── project-card.tsx    # Project showcase card
│   ├── experience-card.tsx # Experience entry card
│   └── contact-link.tsx    # Contact link button
├── public/
│   └── profile.svg         # Profile placeholder image
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
└── next-env.d.ts
```

## Customization

### Colors
Update the color scheme in `tailwind.config.ts`:
- Primary: `#00BFFF` (Neon Blue)
- Secondary: `#0088FF` (Deep Blue)
- Background: `#050B1A` (Dark Navy)
- Cards: `#0D1326` (Dark Card Background)

### Content
Update portfolio content directly in `app/page.tsx`:
- Hero section text and buttons
- Skills and skill levels
- Experience entries
- Project information
- Contact links

### Styling
Global styles are in `app/globals.css` with:
- CSS animations (fadeIn, slideInLeft, slideInRight, pulseGlow)
- Glassmorphism effects
- Neon glow utilities
- Responsive utilities

## Performance Optimizations

- Semantic HTML for better SEO
- CSS animations over JavaScript
- Responsive images with Next.js optimization
- Dark mode optimized
- Lazy loading support
- Accessibility compliance

## License

© 2024 Stanley T. M. Menbah Jr. All rights reserved.
=======
# STAN-Portfolio
>>>>>>> 9437279f8d89488b4647768bc94c67f5c0f6830a
