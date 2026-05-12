import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useTranslation } from 'react-i18next'

export default function MapSection() {
  const { t } = useTranslation()
  const markerRef = useRef()

  useFrame(({ clock }) => {
    if (markerRef.current) {
      markerRef.current.style.transform = `translate(-50%, -50%) scale(${1 + Math.sin(clock.elapsedTime * 3) * 0.08})`
    }
  })

  return (
    <section style={{ padding: '10vh 5vw', pointerEvents: 'auto' }}>
      <h2 className="section-title">{t('map.title')}</h2>
      <div className="map-container">
        <img src="/map-prague.png" alt="map" style={{ width: '100%', opacity: 0.4 }} />
        <div ref={markerRef} className="studio-marker" style={{
          position: 'absolute', top: '52%', left: '48%', width: 24, height: 24,
          background: '#ff2d2d', borderRadius: '50%', boxShadow: '0 0 20px #ff2d2d',
        }} />
        <p style={{ textAlign: 'center', marginTop: '1rem' }}>{t('map.address')}</p>
      </div>
    </section>
  )
}
