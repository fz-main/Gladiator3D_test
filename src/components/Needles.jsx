import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'

function Needle({ position, rotation, scale }) {
  const group = useRef()
  useFrame((state) => {
    group.current.position.y += Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.002
    group.current.rotation.z += 0.005
  })
  return (
    <group ref={group} position={position} rotation={rotation} scale={scale}>
      <mesh>
        <cylinderGeometry args={[0.02, 0.02, 0.8, 8]} />
        <meshStandardMaterial color="#cccccc" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 0.45, 0]}>
        <coneGeometry args={[0.03, 0.2, 8]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.95} roughness={0.05} />
      </mesh>
      <mesh position={[0, -0.2, 0.1]}>
        <sphereGeometry args={[0.05, 16, 16]} />
        <meshStandardMaterial color="#111" metalness={0.3} roughness={0.4} emissive="#110000" emissiveIntensity={0.5} />
      </mesh>
    </group>
  )
}

export default function Needles() {
  const needles = useMemo(() => {
    const arr = []
    for (let i = 0; i < 35; i++) {
      const angle = (i / 35) * Math.PI * 2
      const radius = 2.8 + Math.random() * 1.5
      arr.push({
        position: [Math.cos(angle) * radius, (Math.random() - 0.5) * 3.5, Math.sin(angle) * radius - 1.5],
        rotation: [0, 0, Math.random() * Math.PI],
        scale: 0.4 + Math.random() * 0.6,
        key: i
      })
    }
    return arr
  }, [])

  return (
    <group>
      {needles.map((n) => <Needle key={n.key} {...n} />)}
      {Array.from({ length: 15 }).map((_, i) => (
        <mesh key={`ink-${i}`} position={[(Math.random()-0.5)*6, (Math.random()-0.5)*6, (Math.random()-0.5)*4-2]}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial color="#1a0000" emissive="#330000" roughness={0.6} />
        </mesh>
      ))}
    </group>
  )
}
