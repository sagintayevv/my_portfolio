import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const AnimatedBackground = () => {
  const orbsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    orbsRef.current.forEach((orb, index) => {
      if (orb) {
        gsap.to(orb, {
          x: `${Math.random() * 100 - 50}px`,
          y: `${Math.random() * 100 - 50}px`,
          scale: Math.random() * 0.5 + 0.8,
          duration: 10 + index * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        })
      }
    })
  }, [])

  return (
    <div className="animated-background">
      <div
        ref={(el) => (orbsRef.current[0] = el)}
        className="floating-orb bg-primary"
        style={{
          width: '400px',
          height: '400px',
          top: '10%',
          left: '10%',
        }}
      />
      <div
        ref={(el) => (orbsRef.current[1] = el)}
        className="floating-orb bg-purple-600"
        style={{
          width: '300px',
          height: '300px',
          top: '50%',
          right: '15%',
        }}
      />
      <div
        ref={(el) => (orbsRef.current[2] = el)}
        className="floating-orb bg-indigo-600"
        style={{
          width: '350px',
          height: '350px',
          bottom: '10%',
          left: '20%',
        }}
      />
    </div>
  )
}

export default AnimatedBackground
