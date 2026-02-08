import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.fromTo(
      avatarRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.8 }
    )
      .fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )
      .fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
      .fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={avatarRef} className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary to-purple-600 p-1 shadow-glow">
              <div className="w-full h-full rounded-2xl bg-dark-secondary flex items-center justify-center">
                <span className="text-6xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-block mb-4">
          <span className="text-sm text-gray-400">
            Hello! I Am{' '}
            <span className="text-primary font-semibold">Abat Sagintayevv</span>
          </span>
        </div>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 font-light mb-2"
        >
          I'm a <span className="text-primary font-semibold">Software Engineer</span>
        </p>
      </div>
    </section>
  )
}

export default Hero
