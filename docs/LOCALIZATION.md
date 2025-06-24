# Localization System Documentation

## Overview

The E-Ink Manga Portfolio uses a comprehensive localization system built on JSON files with TypeScript integration. This document explains how the system works in detail and how to maintain or extend it.

## Architecture

### Core Components

1. **JSON Translation Files**:
   - Located in `src/locales/`
   - One file per language (e.g., `en.json`, `jp.json`)
   - Organized by component/section

2. **TypeScript Types**:
   - Located in `src/locales/index.ts`
   - Ensures type safety across translations
   - Exports type definitions and locale data

3. **Language Context**:
   - Located in `src/contexts/LanguageContext.tsx`
   - Provides application-wide language state
   - Handles language switching and persistence

### Data Flow

```
┌────────────┐    ┌─────────────┐    ┌────────────────────┐
│ JSON Files │───►│ index.ts    │───►│ LanguageContext.tsx│
└────────────┘    │ (Type Defs) │    │ (State Management) │
                  └─────────────┘    └────────────────────┘
                                              │
                                              ▼
┌────────────┐    ┌─────────────┐    ┌────────────────────┐
│ Components │◄───│ useLanguage │◄───│ Locale Data Access │
│ (UI)       │    │ (Hook)      │    │ (Current Language) │
└────────────┘    └─────────────┘    └────────────────────┘
```

## Implementation Details

### 1. JSON Structure

Each language file follows the same nested structure, organized by component:

```json
{
  "componentName": {
    "section": {
      "key": "Translated value",
      "nestedKey": {
        "subKey": "Nested translated value"
      }
    }
  }
}
```

Example from the Footer component:

```json
{
  "footer": {
    "tagline": "Made with passion for manga and art",
    "copyright": "© 2024 Luffy's Art Studio. All rights reserved.",
    "links": {
      "home": "Home",
      "gallery": "Gallery",
      "about": "About"
    }
  }
}
```

### 2. TypeScript Types

The `index.ts` file defines types that match the JSON structure:

```typescript
export interface Locale {
  footer: {
    tagline: string;
    copyright: string;
    links: {
      home: string;
      gallery: string;
      about: string;
    };
    // other footer properties
  };
  // other components
}

export const locales: Record<string, Locale> = {
  en: enLocale as Locale,
  jp: jpLocale as Locale
};
```

This ensures type safety when accessing translation strings.

### 3. Language Context

The Language Context provides:

```typescript
type LanguageContextType = {
  language: 'en' | 'jp';              // Current language code
  setLanguage: (lang: 'en' | 'jp') => void;  // Language switcher
  locale: Locale;                     // Current locale data
};
```

Implementation details:

```typescript
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'jp'>('en');
  const [locale, setLocale] = useState<Locale>(locales[language]);

  useEffect(() => {
    // Update locale when language changes
    setLocale(locales[language]);
    
    // Store language preference in localStorage
    localStorage.setItem('preferredLanguage', language);
  }, [language]);

  useEffect(() => {
    // Load language preference from localStorage on initial load
    const savedLanguage = localStorage.getItem('preferredLanguage') as 'en' | 'jp' | null;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'jp')) {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, locale }}>
      {children}
    </LanguageContext.Provider>
  );
};
```

### 4. Using Translations in Components

The `useLanguage` hook provides access to the current locale:

```typescript
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
```

Example usage in a component:

```tsx
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { locale } = useLanguage();
  const { footer } = locale;
  
  return (
    <footer>
      <p>{footer.tagline}</p>
      <p>{footer.copyright}</p>
      <nav>
        {Object.entries(footer.links).map(([key, label]) => (
          <a key={key} href={`#${key}`}>{label}</a>
        ))}
      </nav>
    </footer>
  );
};
```

## Adding a New Language

To add a new language (e.g., French):

1. Create `fr.json` in the `src/locales/` directory with the same structure as `en.json`
2. Update the `index.ts` file:

```typescript
import enLocale from './en.json';
import jpLocale from './jp.json';
import frLocale from './fr.json';  // Import new language

export interface Locale {
  // Existing type definition
}

export const locales: Record<string, Locale> = {
  en: enLocale as Locale,
  jp: jpLocale as Locale,
  fr: frLocale as Locale  // Add new language
};
```

3. Update the LanguageContext.tsx file:

```typescript
interface LanguageContextType {
  language: 'en' | 'jp' | 'fr';  // Add new language code
  setLanguage: (lang: 'en' | 'jp' | 'fr') => void;  // Update function type
  locale: Locale;
}
```

4. Add UI elements to select the new language (typically in the Header component)

## Best Practices

1. **Keep the same structure across all language files**
   - New keys should be added to all language files
   - Missing keys will cause type errors

2. **Use meaningful key names**
   - Keys should reflect the content they represent
   - Group by component and section

3. **Handle dynamic content**
   - For text with variables, use placeholder patterns:
   ```json
   "greeting": "Hello, {name}!"
   ```
   ```tsx
   const greeting = locale.greeting.replace('{name}', userName);
   ```

4. **Test all languages**
   - Ensure all UI elements adapt to different text lengths
   - Check for overflow, wrapping, and alignment issues

5. **Update types**
   - Always update TypeScript interfaces when adding new keys
   - This ensures type safety throughout the application

## Advanced Features

### Language Detection

You can enhance the system to detect the user's preferred language from browser settings:

```typescript
useEffect(() => {
  // First check localStorage
  const savedLanguage = localStorage.getItem('preferredLanguage');
  
  if (savedLanguage && locales[savedLanguage]) {
    setLanguage(savedLanguage);
  } else {
    // Then try to detect from browser
    const browserLang = navigator.language.split('-')[0];
    if (locales[browserLang]) {
      setLanguage(browserLang);
    } else {
      setLanguage('en'); // Default fallback
    }
  }
}, []);
```

### Fallback Mechanism

For missing translations, implement a fallback system:

```typescript
function getTranslation(key: string, language: string): string {
  const keyPath = key.split('.');
  let value = locales[language];
  
  for (const segment of keyPath) {
    value = value?.[segment];
    if (!value) break;
  }
  
  if (!value && language !== 'en') {
    // Fall back to English
    return getTranslation(key, 'en');
  }
  
  return value || key; // Return key as last resort
}
```

### Pluralization

For handling plurals, consider implementing a more advanced system:

```json
"items": {
  "one": "{count} item",
  "other": "{count} items"
}
```

```typescript
function getPlural(key: string, count: number): string {
  const form = count === 1 ? 'one' : 'other';
  const template = locale[key][form];
  return template.replace('{count}', count.toString());
}
```
