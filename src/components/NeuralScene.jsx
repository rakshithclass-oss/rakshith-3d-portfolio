import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, OrbitControls, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

function Core({ motionOn }) {
  const group = useRef(null)
  const shell = useRef(null)
  useFrame((state, delta) => {
    if (!group.current || !motionOn) return
    group.current.rotation.y += delta * 0.16
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.sin(state.clock.elapsedTime * 0.28) * 0.12, 0.025)
    if (shell.current) shell.current.rotation.z -= delta * 0.1
  })

  return (
    <group ref={group}>
      <mesh scale={1.03}>
        <icosahedronGeometry args={[1, 5]} />
        <meshPhysicalMaterial color="#8068ff" roughness={0.19} metalness={0.45} clearcoat={1} clearcoatRoughness={0.12} transmission={0.08} thickness={0.7} />
      </mesh>
      <mesh scale={0.78}>
        <icosahedronGeometry args={[1, 4]} />
        <meshBasicMaterial color="#b5a7ff" wireframe transparent opacity={0.22} />
      </mesh>
      <group ref={shell}>
        <mesh rotation={[0.9, 0.2, 0.35]}>
          <torusGeometry args={[1.38, 0.012, 12, 160]} />
          <meshStandardMaterial color="#52e5d0" emissive="#1a9c93" emissiveIntensity={1.2} metalness={0.8} roughness={0.25} />
        </mesh>
        <mesh rotation={[1.2, 0.4, -0.5]}>
          <torusGeometry args={[1.53, 0.008, 10, 160]} />
          <meshStandardMaterial color="#9b8aff" emissive="#6c52dc" emissiveIntensity={1.4} />
        </mesh>
      </group>
      <mesh position={[0.34, 0.32, 0.82]}>
        <sphereGeometry args={[0.07, 20, 20]} />
        <meshBasicMaterial color="#d8fff7" />
      </mesh>
    </group>
  )
}

function SceneContents({ motionOn }) {
  return (
    <>
      <ambientLight intensity={0.75} />
      <pointLight position={[3, 3, 4]} intensity={22} color="#a99aff" />
      <pointLight position={[-3, -2, 2]} intensity={12} color="#43dccb" />
      <Float speed={motionOn ? 1.2 : 0} rotationIntensity={0.12} floatIntensity={motionOn ? 0.28 : 0}>
        <Core motionOn={motionOn} />
      </Float>
      <Sparkles count={70} scale={4.4} size={2.1} speed={0.25} opacity={0.55} color="#b7b0ff" />
      <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.55} autoRotate={motionOn} autoRotateSpeed={0.35} />
    </>
  )
}

export default function NeuralScene() {
  const [motionOn, setMotionOn] = useState(true)
  return (
    <div className="scene-shell">
      <Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.8]} gl={{ alpha: true, antialias: true }}>
        <SceneContents motionOn={motionOn} />
      </Canvas>
      <div className="scene-caption"><span className="scene-pulse" /> NEURAL CORE / 3D INTERACTIVE</div>
      <button className="motion-toggle" onClick={() => setMotionOn((value) => !value)} type="button">
        <span className={motionOn ? 'toggle-dot active' : 'toggle-dot'} /> Motion {motionOn ? 'on' : 'off'}
      </button>
    </div>
  )
}
