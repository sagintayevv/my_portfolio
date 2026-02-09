import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import zerekImg from '../../assets/zerekImg.png'
import elkonImg from '../../assets/elkonImg.png'



gsap.registerPlugin(ScrollTrigger)

interface Project {
  title: string
  description: string
  image: string
  tech: string[]
  links: {
    github?: string
    live?: string
  }
}

const Projects = () => {
  const projectsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    projectsRef.current.forEach((project, index) => {
      if (project) {
        gsap.fromTo(
          project,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            scrollTrigger: {
              trigger: project,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse',
            },
          }
        )
      }
    })
  }, [])

  const projects: Project[] = [
    {
      title: 'Zerek Edus',
      description:
        '',
      image: zerekImg,
      tech: ['Vue2', 'JavaScript', 'Vuetify'],
      links: {
        live: 'https://zerek.edus.kz/main',
      },
    },
    {
      title: 'Elkon KZ',
      description:
        '',
      image: elkonImg,
      tech: ['JavaScript', 'HTML', 'CSS'],
      links: {
        live: 'https://elkon.kz/ru/o_kompanii',
      },
    }
  ]

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Projects I’ve Worked On
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 items-center`}
            >
              <div className="w-full md:w-1/2">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/20 rounded-2xl group-hover:bg-primary/10 transition-colors duration-300" />
                  <div className="relative bg-dark-secondary rounded-2xl p-8 border border-primary/20 group-hover:border-primary/40 transition-all duration-300">
                    <div className="aspect-video bg-dark-tertiary rounded-lg flex items-center justify-center text-6xl">
                      <img src={project.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-4">
                <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                <p className="text-gray-400 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4">
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-2xl">📂</span>
                      <span>Code</span>
                    </a>
                  )}
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      className="flex items-center gap-2 text-gray-300 hover:text-primary transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="text-2xl">🔗</span>
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
