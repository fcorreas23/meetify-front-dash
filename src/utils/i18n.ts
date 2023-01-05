import i18n from 'i18next'
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from '../locales/en/translation.json'
import translationES from '../locales/es/translation.json'
import translationPT from '../locales/pt/translation.json'


const resources = {
    en: {
        translation: translationEN
    },
    es: {
        translation: translationES
    },
    pt: {
        translation: translationPT
    }
}

i18n
.use(Backend)
.use(LanguageDetector) // detect user language
.use( initReactI18next as any )
.init({
    resources,
    lng: 'en',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      wait: true
    }
  } as any
);

export default i18n;