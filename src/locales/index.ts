import enLocale from './en.json';
import jpLocale from './jp.json';

export interface Locale {
  footer: {
    tagline: string;
    copyright: string;
    links: {
      home: string;
      gallery: string;
      about: string;
      commissions: string;
      contact: string;
    };
    social: {
      title: string;
      instagram: string;
      twitter: string;
      pixiv: string;
      artstation: string;
    };
    quote: string;
    quickLinks: string;
    stayUpdated: string;
    notificationInfo: string;
    subscribe: string;
    backToAdventure: string;
  };
  header: {
    menu: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    ctaButton: string;
  };
  gallery: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      characters: string;
      landscapes: string;
      action: string;
    }
  };
  about: {
    title: string;
    story: string;
    skills: string;
  };
  commissions: {
    title: string;
    statusOpen: string;
    statusClosed: string;
    pricing: string;
    cta: string;
  };
  contact: {
    title: string;
    formName: string;
    formEmail: string;
    formMessage: string;
    formSubmit: string;
  };
  fanWall: {
    title: string;
    subtitle: string;
    shareButton: string;
  }
}

export const locales: Record<string, Locale> = {
  en: enLocale as Locale,
  jp: jpLocale as Locale
};

export default locales;
