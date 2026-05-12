import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function Particles() {
  const count = 2500
  const meshRef = useRef()

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const col = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const radius = 5 + Math.random() * 6
      const theta = Math.random() * Math.PI * 2
      const phi = Math.asin((Math.random() * 2) - 1)
      pos[i * 3] = Math.cos(theta) * Math.cos(phi) * radius
      pos[i * 3 + 1] = Math.sin(phi) * radius * 0.8
      pos[i * 3 + 2] = Math.sin(theta) * Math.cos(phi) * radius
      // Dark particles with slight deep red tint
      col[i * 3] = 0.05
      col[i * 3 + 1] = 0.01
      col[i * 3 + 2] = 0.02
    }
    return [pos, col]
  }, [])

  useFrame((state) => {
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.03
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.05
  })

  return (
    <>
      <pointLight position={[0, -2, -6]} intensity={3} color="#ff1a1a" distance={20} />
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={count}
            array={positions}
            itemSize={3}
          />
          <bufferAttribute
            attach="attributes-color"
            count={count}
            array={colors}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.025}
          vertexColors
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          transparent
          opacity={0.9}
        />
      </points>
    </>
  )
}
