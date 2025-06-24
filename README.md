# E-Ink Manga Portfolio

A modern, monochromatic portfolio website for manga artists featuring a clean e-ink inspired design, responsive layout, and bilingual support (English/Japanese).

![E-Ink Manga Portfolio](https://placeholder-for-screenshot.com/preview.png)

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Localization](#localization)
- [Styling](#styling)
- [Animations](#animations)
- [Deployment](#deployment)
- [Documentation](#documentation)
- [License](#license)

## ✨ Features

- **Monochromatic Design**: Beautiful black and white design inspired by e-ink displays
- **Responsive Layout**: Fully responsive design that works on all devices
- **Bilingual Support**: Complete English and Japanese language support
- **Animated Components**: Subtle animations using Framer Motion
- **Wave Effects**: Custom wave animations using react-wavify
- **Manga-Inspired UI**: Design elements that reflect manga aesthetics
- **Dark Mode Ready**: Monochromatic scheme works well for both light and dark modes
- **Accessible**: Designed with accessibility in mind
- **TypeScript**: Fully typed codebase with type-safe localization
- **Modern React Practices**: Context API for state management

## 🛠️ Tech Stack

- **React**: Frontend library for building user interfaces
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Framer Motion**: Animation library for smooth transitions
- **React Wavify**: Wave animation component for the footer
- **Lucide Icons**: Modern icon library with minimal design
- **Vite**: Next-generation frontend tooling for fast builds

## 📁 Project Structure

```
e-ink-manga-portfolio/
├── public/                  # Static files
├── src/
│   ├── components/          # React components
│   │   ├── About.tsx        # About section component
│   │   ├── Commissions.tsx  # Commissions section component
│   │   ├── Contact.tsx      # Contact section component
│   │   ├── FanWall.tsx      # Fan wall section component
│   │   ├── Footer.tsx       # Footer component with wave animation
│   │   ├── Gallery.tsx      # Gallery section component
│   │   ├── Header.tsx       # Header component with navigation
│   │   ├── Hero.tsx         # Hero section component
│   │   └── LoadingScreen.tsx # Loading screen component
│   ├── contexts/            # React contexts
│   │   └── LanguageContext.tsx # Language management context
│   ├── locales/             # Localization files
│   │   ├── index.ts         # Locales export and types
│   │   ├── en.json          # English translations
│   │   └── jp.json          # Japanese translations
│   ├── App.tsx              # Main application component
│   ├── index.css            # Global styles and CSS variables
│   ├── main.tsx             # Application entry point
│   └── vite-env.d.ts        # Vite environment type definitions
├── docs/                    # Documentation files
│   ├── LOCALIZATION.md      # Detailed localization documentation
│   └── QUICK-START.md       # Quick start guide
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML entry point
├── package.json             # Project dependencies
├── postcss.config.js        # PostCSS configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── tsconfig.app.json        # TypeScript configuration for app
├── tsconfig.json            # Main TypeScript configuration
├── tsconfig.node.json       # TypeScript configuration for node
└── vite.config.ts           # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-ink-manga-portfolio.git
cd e-ink-manga-portfolio
```

2. Install dependencies:
```bash
npm install
# or 
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173/`

### Project Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint to check code quality

## ✏️ Customization

### Personal Information

To customize the portfolio with your own information:

1. **Text Content**: 
   - Update the text content in `src/locales/en.json` and `src/locales/jp.json`
   - Replace "Luffy's Art Studio" with your own studio name

2. **Images**: 
   - Replace any placeholder images in the components with your own artwork
   - Add your logo if you have one

3. **Social Links**: 
   - Update links in the Footer component to point to your social media profiles
   - Customize the social media section as needed

4. **Colors**: 
   - The monochromatic theme can be adjusted in `src/index.css` by modifying the CSS variables
   - Maintain the black and white aesthetic for the e-ink design

### Portfolio Items

To add your own portfolio items, modify the `Gallery.tsx` component and add your artworks:

1. Create an array of artwork objects, each with:
   - `id`: Unique identifier
   - `title`: Artwork title
   - `image`: Path to image
   - `category`: Category for filtering (e.g., 'characters', 'landscapes')
   - `description`: (optional) Short description
   - `date`: (optional) Creation date

2. Ensure images are properly optimized for web display

## 🌐 Localization

The project uses a JSON-based localization system for easy management of multilingual content.

### Structure

- `src/locales/en.json`: English translations
- `src/locales/jp.json`: Japanese translations
- `src/locales/index.ts`: Type definitions and exports

### Adding a New Language

1. Create a new JSON file in the `src/locales/` directory, e.g., `fr.json`
2. Copy the structure from `en.json` and translate all values
3. Add the new locale to the `locales` object in `src/locales/index.ts`
4. Update the `LanguageContextType` type to include the new language code

Example:

```typescript
// In src/locales/index.ts
export const locales: Record<string, Locale> = {
  en: enLocale as Locale,
  jp: jpLocale as Locale,
  fr: frLocale as Locale  // Add new language
};

type LanguageContextType = {
  language: 'en' | 'jp' | 'fr';  // Update type
  setLanguage: (lang: 'en' | 'jp' | 'fr') => void;  // Update type
  locale: Locale;
};
```

### Using Translations

In your components, access translations through the language context:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent: React.FC = () => {
  const { locale } = useLanguage();
  
  return (
    <div>
      <h1>{locale.section.title}</h1>
      <p>{locale.section.description}</p>
    </div>
  );
};
```

For detailed information on the localization system, see [LOCALIZATION.md](./docs/LOCALIZATION.md)

## 🎨 Styling

### Monochromatic Color Scheme

The project uses a carefully designed monochromatic color scheme with CSS variables defined in `src/index.css`:

```css
:root {
  --crow-black: #0A0A0A;  /* Deep black */
  --crow-dark: #1A1A1A;   /* Dark charcoal */
  --crow-gray-dark: #333333;  /* Dark gray */
  --crow-gray-medium: #555555;  /* Medium gray */
  --crow-gray-light: #888888;  /* Light gray */
  --crow-silver: #CCCCCC;  /* Silver gray */
  --crow-light: #E8E8E8;   /* Light gray, almost white */
  --crow-white: #FAFAFA;  /* Pure white with slight gray tint */
}
```

You can use these variables directly in your CSS or with Tailwind classes:

```jsx
<div className="bg-[var(--crow-dark)] text-[var(--crow-white)]">
  Content
</div>
```

### Tailwind Integration

The color variables are also available as Tailwind color classes through the configuration:

```jsx
<div className="bg-crow-dark text-crow-white">
  Content
</div>
```

### Special Effect Classes

The project includes several utility classes in `src/index.css` for manga-inspired effects:

- `.paper-texture`: Paper grain texture effect
- `.ink-blot`: Ink blot effect for emphasis
- `.brush-stroke`: Brush stroke animation
- `.ink-particle`: Floating ink particle animation
- `.paper-fold`: Paper fold effect for cards
- `.handwrite`: Handwriting animation for text
- `.manga-panel`: Manga panel styling for images

## 🎭 Animations

### Wave Animation

The project features a distinctive wave animation at the top of the footer created using `react-wavify`:

```jsx
<Wave 
  fill="var(--crow-dark)"
  paused={false}
  style={{ display: 'flex' }}
  options={{
    height: 40,
    amplitude: 40,
    speed: 0.15,
    points: 4
  }}
/>
```

You can customize the wave by adjusting:
- **height**: The wave height
- **amplitude**: The wave amplitude
- **speed**: Animation speed
- **points**: Number of control points

### Framer Motion Animations

Component animations are handled with Framer Motion for smooth, fluid transitions:

```jsx
<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

Common animations used throughout the project:
- Fade in on page load
- Staggered reveal of elements
- Hover effects on buttons and links
- Floating animated decorative elements
- Scroll-triggered animations

## 🚢 Deployment

### Building for Production

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the optimized production build.

### Deployment Options

- **Netlify**: Connect your GitHub repository to Netlify for automatic deployment
- **Vercel**: Import your project to Vercel for seamless deployment
- **GitHub Pages**: Deploy the `dist` directory to GitHub Pages
- **Firebase Hosting**: Use the Firebase CLI to deploy
- **AWS Amplify**: Connect your repository to AWS Amplify

### Environment Considerations

- Ensure all image assets are properly compressed
- Configure any necessary environment variables
- Test the production build locally with `npm run preview`
- Verify that multilingual support works in production

## � Documentation

The project includes comprehensive documentation:

- **README.md**: This main documentation file
- **[QUICK-START.md](./docs/QUICK-START.md)**: Getting started quickly with the project
- **[LOCALIZATION.md](./docs/LOCALIZATION.md)**: Detailed information about the localization system

These documents provide detailed instructions on:
- Project setup and configuration
- Adding new features
- Working with the localization system
- Styling and theme customization
- Best practices for contributing

## �📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Luffy's Art Studio. Created with ❤️ for the manga community.
