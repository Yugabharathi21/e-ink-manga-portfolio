# Quick Start Guide for E-Ink Manga Portfolio

This guide is designed to help you get up and running with the E-Ink Manga Portfolio project quickly, with specific focus on the localization system.

## Initial Setup

1. Clone the repository and install dependencies:

```bash
git clone https://github.com/yourusername/e-ink-manga-portfolio.git
cd e-ink-manga-portfolio
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser at http://localhost:5173/ to see the project running.

## Localization System Architecture

The project uses a JSON-based localization system with React Context for managing language state. Here's how it works:

### Directory Structure

```
src/
├── locales/
│   ├── index.ts        # Type definitions and exports
│   ├── en.json         # English translations
│   └── jp.json         # Japanese translations
└── contexts/
    └── LanguageContext.tsx  # React context for language management
```

### Key Components

1. **JSON Translation Files**: `en.json` and `jp.json` contain all the translatable text organized by component.

2. **Locales Index**: `index.ts` defines TypeScript types for the translations and exports them.

3. **Language Context**: `LanguageContext.tsx` provides:
   - Current language state
   - Language switching function
   - Access to current locale data
   - Persistence of language preference

### How to Use the Localization System

1. **Accessing translations in components**:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const MyComponent = () => {
  const { locale } = useLanguage();
  
  return (
    <div>
      <h1>{locale.componentName.title}</h1>
      <p>{locale.componentName.description}</p>
    </div>
  );
};
```

2. **Switching languages**:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();
  
  return (
    <button onClick={() => setLanguage(language === 'en' ? 'jp' : 'en')}>
      {language === 'en' ? 'Japanese' : 'English'}
    </button>
  );
};
```

3. **Adding new translatable content**:

   a. Add new keys to both `en.json` and `jp.json`
   b. Update the TypeScript interface in `index.ts` if necessary
   c. Use the new keys in your components

## Working with Monochromatic Theme

The project uses CSS variables for a consistent monochromatic color scheme:

```css
/* Access in CSS */
color: var(--crow-black);

/* Access in Tailwind classes */
<div className="text-[var(--crow-black)]">Text</div>

/* Access via Tailwind config integration */
<div className="text-crow-black">Text</div>
```

## Common Tasks

### Adding a New Section

1. Create a new component in `src/components/`
2. Add translations to `en.json` and `jp.json` 
3. Import and add the component to `App.tsx`
4. Style using the monochromatic theme variables

### Adding a New Language

1. Create a new JSON file (e.g., `fr.json`) in `src/locales/`
2. Copy structure from `en.json` and translate all values
3. Update `index.ts` to include the new language
4. Update language type definitions in `LanguageContext.tsx`
5. Add UI elements to select the new language

### Performance Considerations

- Language data is loaded once at startup and stored in React state
- Context API is used for efficient re-rendering when language changes
- Language preference is saved to localStorage to persist between visits

## Troubleshooting

### Missing Translation Keys

If you see empty values or `[object Object]` in the UI:
1. Check that all keys exist in all language files
2. Ensure that your component is correctly destructuring the locale data
3. Check for typos in the key names

### Language Switch Not Working

1. Verify that the `setLanguage` function is being called
2. Check that the language value is being updated in the context
3. Ensure components are subscribed to the language context

### Style Issues

1. Make sure CSS variables are being properly accessed
2. Check for proper nesting of Tailwind classes
3. Verify that the monochromatic theme variables are correctly applied

## Additional Resources

- [React Context Documentation](https://reactjs.org/docs/context.html)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React Wavify Documentation](https://github.com/woofers/react-wavify)
