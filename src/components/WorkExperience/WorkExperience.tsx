import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface ExperienceItem {
  title: string
  company: string
  period: string
  location: string
}

const WorkExperience = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })
  }, [])

  const experiences: ExperienceItem[] = [
    {
      title: 'Entrepreneur',
      company: 'Qalahood',
      location: 'Kazakhstan, Astana',
      period: '2023 - Present',
    },
    {
      title: 'Frontend Developer',
      company: 'Mediana Services Limited',
      location: 'Kazakhstan, Aqtau',
      period: '2022 - 2023',
    }
  ]

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="max-w-xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Work <span className="text-gradient">Experience</span>
        </h2>

        <div className="grid grid-cols-1 gap-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-dark-secondary/50 backdrop-blur-sm rounded-2xl p-6 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-glow"
            >
              <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-primary transition-colors">
                {exp.title}
              </h3>
              <p className="text-gray-400 mb-1">{exp.company}</p>
              <p className="text-gray-400 mb-1">{exp.location}</p>
              <p className="text-sm text-gray-500">{exp.period}</p>

              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WorkExperience
