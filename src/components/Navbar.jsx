import { useTranslation } from 'react-i18next'
import { useState } from 'react'
import './navbar.css'

export default function Navbar() {
  const { i18n } = useTranslation()
  const [activeLang, setActiveLang] = useState('en')

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setActiveLang(lng)
  }

  return (
    <nav className="navbar" style={{ pointerEvents: 'auto' }}>
      <div className="logo">⚔️ GLADIATOR</div>
      <div className="lang-switcher">
        {['en', 'cz', 'ru'].map((lng) => (
          <button
            key={lng}
            className={`lang-btn ${activeLang === lng ? 'active' : ''}`}
            onClick={() => changeLanguage(lng)}
          >
            {lng.toUpperCase()}
          </button>
        ))}
      </div>
    </nav>
  )
}
