import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const Languages = ['en', 'ru']

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    supportedLngs: Languages, // заменяем whitelist на supportedLngs
    backend: {
      loadPath: '/locale/{{lng}}/translation.json', // путь к твоим JSON-файлам
    },
    interpolation: {
      escapeValue: false
    }
  })

export default i18n
