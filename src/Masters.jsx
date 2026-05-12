import { useTranslation } from 'react-i18next'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const works = [
  { src: '/img/realism-1.jpg', artist: 'Viktor Valkov' },
  { src: '/img/blackwork-1.jpg', artist: 'Anna Šeredová' },
  { src: '/img/traditional-1.jpg', artist: 'Oldřich Hladík' },
]

export default function Masters() {
  const { t } = useTranslation()
  const containerRef = useRef()

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll('.master-card')
    cards.forEach((card) => {
      gsap.fromTo(card, 
        { scale: 0.85, filter: 'brightness(0.6)' },
        {
          scale: 1,
          filter: 'brightness(1)',
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.2,
          },
        }
      )
    })
  }, [])

  return (
    <section ref={containerRef} style={{ padding: '10vh 5vw', pointerEvents: 'auto' }}>
      <h2 className="section-title">{t('masters.title')}</h2>
      <div className="masters-grid">
        {works.map((w, i) => (
          <div key={i} className="master-card" style={{ backgroundImage: `url(${w.src})` }}>
            <div className="card-overlay">
              <span>{w.artist}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
