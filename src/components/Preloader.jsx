import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Preloader({ onLoaded }) {
  const container = useRef(null)
  const text = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(container.current, {
          clipPath: 'inset(0% 0% 100% 0%)',
          duration: 1.2,
          ease: 'power4.inOut',
          onComplete: onLoaded,
        })
      }
    })
    tl.fromTo(text.current,
      { opacity: 0, scale: 1.2, filter: 'blur(20px)' },
      { opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.8, ease: 'power3.out' }
    )
    .to(text.current, {
      keyframes: [
        { textShadow: '-4px 0 red, 4px 0 blue', duration: 0.1 },
        { textShadow: '0 0 transparent', duration: 0.1 },
        { textShadow: '-4px 0 red, 4px 0 blue', duration: 0.1 },
      ],
      duration: 0.4,
    }, '+=0.3')
  }, [])

  return (
    <div ref={container} style={{
      position: 'fixed', inset: 0, zIndex: 1000, background: '#000',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      clipPath: 'inset(0% 0% 0% 0%)'
    }}>
      <h1 ref={text} style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: 'clamp(3rem, 12vw, 8rem)',
        letterSpacing: '0.2em', color: '#f0f0f0', textTransform: 'uppercase'
      }}>
        Gladiator
      </h1>
    </div>
  )
}
