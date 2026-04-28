import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type Language = "ru" | "en";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  location: string;
}

interface ProjectItem {
  title: string;
  description: string;
  tech: string[];
  links: {
    githubLabel: string;
    liveLabel: string;
  };
}

interface SocialLinkItem {
  label: string;
  href: string;
}

interface Translations {
  nav: {
    home: string;
    about: string;
  };
  hero: {
    greeting: string;
    name: string;
    rolePrefix: string;
    roleHighlight: string;
    description: string;
  };
  workExperience: {
    title: string;
    titleHighlight: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    items: ProjectItem[];
  };
  contact: {
    title: string;
    titleHighlight: string;
    availability: string;
    availabilityHighlight: string;
    phoneLabel: string;
    socialLinks: SocialLinkItem[];
  };
  about: {
    title: string;
    titleHighlight: string;
    description: string;
    skillsTitle: string;
    skillsHighlight: string;
    skills: string[];
  };
}

const translations: Record<Language, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
    },
    hero: {
      greeting: "Привет! Я",
      name: "Абат Сагинтаев",
      rolePrefix: "Я",
      roleHighlight: "Software Engineer",
      description: "Создаю современные и удобные веб-приложения.",
    },
    workExperience: {
      title: "Опыт",
      titleHighlight: "работы",
      items: [
        {
          title: "Предприниматель",
          company: "Qalahood",
          location: "Казахстан, Астана",
          period: "2023 - настоящее время",
        },
        {
          title: "Frontend Developer",
          company: "Mediana Services Limited",
          location: "Казахстан, Актау",
          period: "2022 - 2023",
        },
      ],
    },
    projects: {
      title: "Проекты, над которыми я работал",
      items: [
        {
          title: "Zerek Edus",
          description:
            "Участвовал в разработке фронтенд-части образовательной платформы Zerek для онлайн-обучения. В рамках проекта реализовывал пользовательские интерфейсы и интерактивные компоненты, чтобы сделать обучение удобнее для учеников и преподавателей.",
          tech: ["Vue2", "JavaScript", "Vuetify"],
          links: {
            githubLabel: "Код",
            liveLabel: "Сайт",
          },
        },
        {
          title: "Elkon.kz",
          description:
            "Разработал корпоративный сайт для Elkon KZ с нуля. Создал адаптивный интерфейс на HTML5, CSS3 и JavaScript, обеспечил кроссбраузерность и оптимизацию производительности.",
          tech: ["JavaScript", "HTML", "CSS"],
          links: {
            githubLabel: "Код",
            liveLabel: "Сайт",
          },
        },
        {
          title: "ToDo App",
          description:
            "Приложение ToDo, разработанное в рамках интенсива nFactorial School. Создано на React и JavaScript, включает CRUD-операции, фильтрацию задач и локальное хранение данных. В проекте использованы современные подходы React: хуки и композиция компонентов.",
          tech: ["React", "JavaScript", "Tailwind"],
          links: {
            githubLabel: "Код",
            liveLabel: "Демо",
          },
        },
        {
          title: "Qalahood",
          description:
            "Qalahood — онлайн-платформа для создания и заказа кастомного мерча. Пользователи могут разрабатывать собственные дизайны одежды в удобном конструкторе и сразу оформлять заказ. Проект объединяет функции визуального редактора и e-commerce, упрощая процесс создания уникального бренда или персонализированных вещей.",
          tech: [
            "React",
            "TypeScript",
            "Tailwind",
            "Nest.js",
            "PostgreSQL",
            "Railway",
          ],
          links: {
            githubLabel: "Код",
            liveLabel: "Демо",
          },
        },
      ],
    },
    contact: {
      title: "Связаться",
      titleHighlight: "со мной",
      availability: "Открыт к",
      availabilityHighlight: "работе на полной занятости",
      phoneLabel: "Телефон",
      socialLinks: [
        { label: "Email", href: "mailto:sagintayev.abat@gmail.com" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/abat-sagintayev-2a259524a/",
        },
        { label: "GitHub", href: "https://github.com/sagintayevv" },
      ],
    },
    about: {
      title: "Обо",
      titleHighlight: "мне",
      description:
        "Я Frontend Developer и выпускник nFactorial School с опытом работы в React, TypeScript и современных веб-технологиях. Разрабатывал адаптивные образовательные платформы и корпоративные сайты. Люблю создавать понятные интерфейсы и писать чистый, поддерживаемый код.",
      skillsTitle: "Навыки и",
      skillsHighlight: "технологии",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "REST API",
        "GSAP",
      ],
    },
  },
  en: {
    nav: {
      home: "Home",
      about: "About Me",
    },
    hero: {
      greeting: "Hello! I Am",
      name: "Abat Sagintayev",
      rolePrefix: "I'm a",
      roleHighlight: "Software Engineer",
      description: "I build modern and intuitive web experiences.",
    },
    workExperience: {
      title: "Work",
      titleHighlight: "Experience",
      items: [
        {
          title: "Entrepreneur",
          company: "Qalahood",
          location: "Kazakhstan, Astana",
          period: "2023 - Present",
        },
        {
          title: "Frontend Developer",
          company: "Mediana Services Limited",
          location: "Kazakhstan, Aqtau",
          period: "2022 - 2023",
        },
      ],
    },
    projects: {
      title: "Projects I've Worked On",
      items: [
        {
          title: "Zerek Edus",
          description:
            "Participated in the development of the front-end component of the Zerek educational platform for online learning. Built user interfaces and interactive components to improve the experience for students and teachers.",
          tech: ["Vue2", "JavaScript", "Vuetify"],
          links: {
            githubLabel: "Code",
            liveLabel: "Live Demo",
          },
        },
        {
          title: "Elkon.kz",
          description:
            "Developed a corporate website for Elkon KZ from scratch. Built a responsive interface using HTML5, CSS3, and JavaScript while ensuring cross-browser compatibility and strong performance.",
          tech: ["JavaScript", "HTML", "CSS"],
          links: {
            githubLabel: "Code",
            liveLabel: "Live Demo",
          },
        },
        {
          title: "ToDo App",
          description:
            "ToDo app developed during the nFactorial School intensive. Built with React and JavaScript, it includes CRUD operations, task filtering, and local data storage using modern React patterns.",
          tech: ["React", "JavaScript", "Tailwind"],
          links: {
            githubLabel: "Code",
            liveLabel: "Live Demo",
          },
        },
        {
          title: "Qalahood",
          description:
            "Qalahood is an online platform for creating and ordering custom merchandise. Users can design their own apparel using an intuitive builder and place orders instantly. The project combines a visual editor with e-commerce functionality, simplifying the process of creating a unique brand or personalized products.",
          tech: [
            "React",
            "TypeScript",
            "Tailwind",
            "Nest.js",
            "PostgreSQL",
            "Railway",
          ],
          links: {
            githubLabel: "Code",
            liveLabel: "Live Demo",
          },
        },
      ],
    },
    contact: {
      title: "Get In",
      titleHighlight: "Touch",
      availability: "Currently open for a",
      availabilityHighlight: "full-time position",
      phoneLabel: "Phone",
      socialLinks: [
        { label: "Email", href: "mailto:sagintayev.abat@gmail.com" },
        {
          label: "LinkedIn",
          href: "https://www.linkedin.com/in/abat-sagintayev-2a259524a/",
        },
        { label: "GitHub", href: "https://github.com/sagintayevv" },
      ],
    },
    about: {
      title: "About",
      titleHighlight: "Me",
      description:
        "Hello! I'm a Frontend Developer and nFactorial School graduate with expertise in React, TypeScript, and modern web technologies. Experienced in building responsive educational platforms and corporate websites. Passionate about creating intuitive user interfaces and writing clean, maintainable code.",
      skillsTitle: "Skills &",
      skillsHighlight: "Technologies",
      skills: [
        "React",
        "TypeScript",
        "JavaScript",
        "Next.js",
        "Tailwind CSS",
        "Git",
        "REST API",
        "GSAP",
      ],
    },
  },
};

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

const LANGUAGE_STORAGE_KEY = "portfolio-language";

const LanguageContext = createContext<LanguageContextValue | null>(null);

const getInitialLanguage = (): Language => {
  if (typeof window === "undefined") {
    return "ru";
  }

  const savedLanguage = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return savedLanguage === "en" ? "en" : "ru";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
};
