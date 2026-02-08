import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
const About = () => {
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
    }
  }, [])

  const skills = [
    'React',
    'TypeScript',
    'JavaScript',
    'Next.js',
    'Tailwind CSS',
    'Git',
    'REST API',
    'GSAP',
  ]

  return (
    <div className="min-h-screen pt-32 pb-20 px-6">
      <div ref={contentRef} className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-6">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
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
