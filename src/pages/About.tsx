import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useLanguage } from '../context/LanguageContext'

const About = () => {
  const contentRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
  }, [])

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div ref={contentRef} className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8">
          {t.about.title} <span className="text-gradient">{t.about.titleHighlight}</span>
        </h1>

        <div className="space-y-6 text-gray-300 leading-relaxed mb-12">
          <p>{t.about.description}</p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            {t.about.skillsTitle} <span className="text-gradient">{t.about.skillsHighlight}</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {t.about.skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-dark-secondary/50 border border-primary/20 rounded-full text-gray-300 hover:border-primary/50 hover:text-primary transition-all duration-300 hover:shadow-glow"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
