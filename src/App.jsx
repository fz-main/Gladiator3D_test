import { Suspense, useState, useEffect, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows } from '@react-three/drei'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

import Preloader from './components/Preloader'
import Experience from './components/Experience'
import Navbar from './components/Navbar'
import Sections from './components/Sections'
import { ScrollProvider } from './hooks/useScrollProgress'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const [loading, setLoading] = useState(true)
  const lenisRef = useRef(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })
    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      ScrollTrigger.update()
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <ScrollProvider lenis={lenisRef}>
      {loading && <Preloader onLoaded={() => setLoading(false)} />}
      <Navbar />
      <Sections />
      <div style={{ position: 'fixed', inset: 0, zIndex: -1 }}>
        <Canvas
          camera={{ position: [0, 0, 8], fov: 45, near: 0.1, far: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: 'high-performance' }}
        >
          <color attach="background" args={['#050505']} />
          <fog attach="fog" args={['#050505', 10, 40]} />
          <ambientLight intensity={0.5} />
          <spotLight position={[5, 8, 10]} angle={0.3} intensity={2} color="#ff2d2d" castShadow />
          <spotLight position={[-5, 2, -5]} angle={0.4} intensity={1.5} color="#aaaaff" />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.6} scale={10} blur={3} far={10} />
          {!loading && <Experience />}
        </Canvas>
      </div>
    </ScrollProvider>
  )
}
