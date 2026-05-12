import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: {
      styles: {
        title: "Our Styles",
        realism: { name: "Realism", desc: "Hyper‑realistic portraits & nature." },
        blackwork: { name: "Blackwork", desc: "Geometric patterns & heavy contrast." },
        traditional: { name: "Traditional", desc: "Bold lines & classic sailor motives." }
      },
      masters: { title: "Masters" },
      map: { title: "Find Us", address: "Rybná 650/1, 110 00 Staré Město, Prague" }
    }},
    cz: { translation: {
      styles: {
        title: "Naše Styly",
        realism: { name: "Realismus", desc: "Hyperrealistické portréty a příroda." },
        blackwork: { name: "Blackwork", desc: "Geometrické vzory a silný kontrast." },
        traditional: { name: "Tradiční", desc: "Silné linie a klasické námořnické motivy." }
      },
      masters: { title: "Mistři" },
      map: { title: "Najdete nás", address: "Rybná 650/1, 110 00 Staré Město, Praha" }
    }},
    ru: { translation: {
      styles: {
        title: "Наши Стили",
        realism: { name: "Реализм", desc: "Гиперреалистичные портреты и природа." },
        blackwork: { name: "Блэкворк", desc: "Геометрические узоры и глубокий контраст." },
        traditional: { name: "Традишнл", desc: "Жирные линии и классические морские сюжеты." }
      },
      masters: { title: "Мастера" },
      map: { title: "Найти нас", address: "Рыбна 650/1, 110 00 Старе Место, Прага" }
    }}
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: false }
})

export default i18n
