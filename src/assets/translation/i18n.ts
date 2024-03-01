import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './en.json';

// Set up i18next
i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    en: {
      translation: en,
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  debug: true,
});

export default i18n;
