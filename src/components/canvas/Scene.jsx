import React, { useRef, useLayoutEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, ContactShadows, Float } from '@react-three/drei'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const TorusObject = () => {
  const meshRef = useRef()

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Setup timeline connected to scroll
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: "#overlay-container",
          start: "top top",
          end: "bottom bottom",
          scrub: 1, // Smooth scrubbing
        }
      })

      // Animate rotation and slightly move it down
      tl.to(meshRef.current.rotation, {
        x: Math.PI * 2,
        y: Math.PI * 2,
        ease: "none"
      }, 0)
      
      tl.to(meshRef.current.position, {
        y: -1.5,
        ease: "none"
      }, 0)
    })

    return () => ctx.revert() // Cleanup GSAP on unmount
  }, [])

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={[0, 0.5, 0]}>
        <torusKnotGeometry args={[1.2, 0.35, 200, 32]} />
        <meshPhysicalMaterial 
          color="#8b5cf6" 
          emissive="#2c0050"
          metalness={0.2}
          roughness={0.1}
          transmission={0.9} // glass-like
          thickness={1.5}
          ior={1.5}
        />
      </mesh>
    </Float>
  )
}

export default function Scene() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <color attach="background" args={['#050505']} />
        
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={0.5} color="#f472b6" />
        
        <TorusObject />
        
        <Environment preset="city" />
        <ContactShadows resolution={1024} scale={20} blur={2.5} opacity={0.6} far={10} color="#000000" position={[0, -2.5, 0]} />
      </Canvas>
    </div>
  )
}
