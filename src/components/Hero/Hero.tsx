import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import logo from '../../assets/Me.svg'
import { useLanguage } from '../../context/LanguageContext'

const Hero = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const avatarRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    if (avatarRef.current) {
      tl.fromTo(
        avatarRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 }
      )
    }

    if (titleRef.current) {
      tl.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 },
        '-=0.4'
      )
    }

    if (subtitleRef.current) {
      tl.fromTo(
        subtitleRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.4'
      )
    }

    if (descriptionRef.current) {
      tl.fromTo(
        descriptionRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        '-=0.3'
      )
    }

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div ref={avatarRef} className="mb-8 flex justify-center">
          <img src={logo} alt="" />
        </div>
        <h2 ref={titleRef} className="inline-block mb-4">
          <span className="text-sm ">
            {t.hero.greeting}{' '}
            <span className="text-primary font-semibold">{t.hero.name}</span>
          </span>
        </h2>
        <p
          ref={subtitleRef}
          className="text-xl md:text-2xl text-gray-300 font-light mb-2"
        >
          {t.hero.rolePrefix}{' '}
          <span className="text-gradient font-semibold">{t.hero.roleHighlight}</span>
        </p>
        <p
          ref={descriptionRef}
          className="text-xl md:text-2xl text-gray-300 font-light mb-2"
        >
          {t.hero.description}
        </p>
      </div>
    </section>
  )
}

export default Hero
