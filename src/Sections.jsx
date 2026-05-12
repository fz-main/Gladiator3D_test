import { useTranslation } from 'react-i18next'
import Masters from './Masters'
import MapSection from './MapSection'
import Footer from './Footer'
import './sections.css'

export default function Sections() {
  const { t } = useTranslation()

  return (
    <main style={{ position: 'relative', zIndex: 1, pointerEvents: 'none' }}>
      {/* Hero section - empty space so 3D is visible */}
      <section style={{ height: '100vh' }} />
      
      {/* Styles – floating glass cards */}
      <section style={{ padding: '10vh 5vw', pointerEvents: 'auto' }}>
        <h2 className="section-title">{t('styles.title')}</h2>
        <div className="styles-grid">
          {['realism', 'blackwork', 'traditional'].map((style) => (
            <div key={style} className="glass-card" data-tilt>
              <h3>{t(`styles.${style}.name`)}</h3>
              <p>{t(`styles.${style}.desc`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Masters – parallax portfolio */}
      <Masters />

      {/* Interactive map */}
      <MapSection />

      {/* Footer */}
      <Footer />
    </main>
  )
}
