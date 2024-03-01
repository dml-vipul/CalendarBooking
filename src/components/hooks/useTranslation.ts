// useTranslation.js
import {useTranslation as useTranslationBase} from 'react-i18next';
import i18n from '../../assets/translation/i18n';

export function useTranslation() {
  const {t} = useTranslationBase();
  // Return a modified translation function that includes the language parameter from the i18n instance
  return {
    t: (key: string) => t(key, {lng: i18n.language}),
  };
}
