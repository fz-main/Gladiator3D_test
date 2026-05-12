import { useFrame, useThree } from '@react-three/fiber'
import { useScrollProgress } from '../hooks/useScrollProgress'
import Blob from './Blob'
import Needles from './Needles'
import Particles from './Particles'
import { gsap } from 'gsap'

const cameraPath = {
  start: { pos: [0, 0.2, 8], look: [0, 0, 0] },
  mid:   { pos: [0, -1.5, 4], look: [0, 0.3, 0] },
  end:   { pos: [0, -3, 2.5], look: [0, -0.5, 0] }
}

export default function Experience() {
  const progress = useScrollProgress()
  const { camera } = useThree()

  useFrame(() => {
    gsap.to(camera.position, {
      x: cameraPath.start.pos[0] * (1 - progress) + cameraPath.end.pos[0] * progress,
      y: cameraPath.start.pos[1] * (1 - progress) + cameraPath.end.pos[1] * progress,
      z: cameraPath.start.pos[2] * (1 - progress) + cameraPath.end.pos[2] * progress,
      duration: 0.5, overwrite: true,
    })
    camera.lookAt(
      cameraPath.start.look[0] * (1 - progress) + cameraPath.end.look[0] * progress,
      cameraPath.start.look[1] * (1 - progress) + cameraPath.end.look[1] * progress,
      cameraPath.start.look[2] * (1 - progress) + cameraPath.end.look[2] * progress,
    )
  })

  return (
    <>
      <Blob />
      <Needles />
      <Particles />
    </>
  )
}
