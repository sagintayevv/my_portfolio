import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import zerekImg from "../../assets/zerekImg.png";
import elkonImg from "../../assets/elkonImg.png";
import todoImg from "../../assets/todoImg.png";
import qlhdImg from "../../assets/qlhdImg.png";
import { useLanguage } from "../../context/LanguageContext";

gsap.registerPlugin(ScrollTrigger);

interface ProjectCard {
  title: string;
  description: string;
  image: string;
  tech: string[];
  links: {
    github?: string;
    live?: string;
    githubLabel: string;
    liveLabel: string;
  };
}

const Projects = () => {
  const projectsRef = useRef<(HTMLDivElement | null)[]>([]);
  const { t } = useLanguage();

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
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          },
        );
      }
    });
  }, []);

  const projects: ProjectCard[] = [
    {
      ...t.projects.items[0],
      image: zerekImg,
      links: {
        ...t.projects.items[0].links,
        live: "https://zerek.edus.kz/main",
      },
    },
    {
      ...t.projects.items[1],
      image: elkonImg,
      links: {
        ...t.projects.items[1].links,
        live: "https://elkon.kz/ru/o_kompanii",
      },
    },
    {
      ...t.projects.items[2],
      image: todoImg,
      links: {
        ...t.projects.items[2].links,
        live: "https://nfactorialproject4.vercel.app/",
      },
    },
    {
      ...t.projects.items[3],
      image: qlhdImg,
      links: {
        ...t.projects.items[3].links,
        live: "https://www.qalahood.kz/",
      },
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          {t.projects.title}
        </h2>

        <div className="space-y-32">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => (projectsRef.current[index] = el)}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
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
                <h3 className="text-3xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

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
                      <span>{project.links.githubLabel}</span>
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
                      <span>{project.links.liveLabel}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
