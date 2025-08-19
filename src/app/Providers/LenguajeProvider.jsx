"use client";
import { createContext, useEffect, useRef, useState } from "react";

const LenguajeContext = createContext();

const Storetext = {
  es: {
    Portafolio: "Portafolio",
    About: "Sobre Mi",
    Projects: "Proyectos Completados",
    Contact: "Contacto",
    Hello: "Hola, Soy",
    hire: "Contratame",
    Download: "Descargar CV",
    Users: "Usuarios",
    Certifications: "Certificaciones Profesionales",
    Years: "Años de Experiencia",
    greeting: "👋 Sobre Mí",
    intro:
      "Como desarrollador web senior, me enfoco en diseñar y entregar soluciones digitales personalizadas que sean escalables, intuitivas y sostenibles. Mi experiencia abarca tecnologías modernas de frontend y backend, con énfasis en arquitectura limpia, rendimiento y diseño centrado en el usuario.",
    credentials:
      "Los proyectos que lidero se guían por metodologías ágiles y buenas prácticas de la industria, con atención constante a:",
    bullets: [
      "🚀 Construcción de aplicaciones web de alto rendimiento",
      "🧩 Diseño de sistemas escalables con código mantenible",
      "🎯 Mejora de la experiencia de usuario mediante diseño UI/UX reflexivo",
      "🔐 Desarrollo de integraciones y APIs seguras y confiables",
      "📈 Apoyo a la transformación digital en diversas industrias"
    ],
    passion:
      "Valoro la excelencia técnica, el aprendizaje continuo y la resolución colaborativa de problemas. Ya sea lanzando nuevos productos, optimizando flujos de trabajo o integrando funciones con IA, el objetivo siempre es generar impacto real mediante tecnología inteligente.",
    lookingAhead: "💼 Mirando al Futuro",
    future:
      "Abierto a nuevas oportunidades que involucren proyectos impactantes, colaboración en equipo y soluciones escalables.",
    closing:
      "Si estás construyendo algo ambicioso, conectemos y exploremos cómo hacerlo crecer juntos.",
    EduAndCert: "Educación y Certificaciones:",
    More: "+ Más",
    MoreLink: "+ Más en Linkedin",
    bachelor: "Licenciatura en Electrónica, (septiembre 2011 - julio 2014)",
    FrontEnd:
      "Meta Front-End Developer Certificado Profesional por Meta (marzo 2024)",
    Net: ".NET FullStack Developer Especialización por Courcera (marzo 2024 )",
    ReacyNative: "React Native Certificación por Meta (marzo 2024 )",
    React: "Advance React por Meta (Agosto 2023 )",
    EF: "EF SET English Certificado 77/100 (C2 Competente) oct 2023)",
    AI: "IBM AI Develloper Certificacion Profesional (julio 2025)",
    MisProyetcos: "Mis Proyectos:",
    All: "Todos",
    Connect: "Conectemonos",
    descripConnect:
      "Actualmente estoy buscando nuevas oportunidades, mi bandeja de entrada siempre está abierta. Ya sea que tenga una pregunta o simplemente quiera saludar, haré todo lo posible para responderle!",
    yourEmail: "Tu correo",
    subject: "Asunto",
    message: "Mensaje",
    send: "Enviar Mensaje",
    sayHay: "Solo di hola",
    lesttalk: "Hablemos de...",
  },
  en: {
    Portafolio: "Portfolio",
    About: "About Me",
    Projects: "Projects Completed",
    Contact: "Contact",
    Hello: "Hello, I'm",
    hire: "Hire Me",
    Download: "Download CV",
    Users: "Users",
    Certifications: "Professional Certifications",
    Years: "Years of Experience",
    greeting: "👋 About Me",
    intro:
      "As a senior web developer, I focus on designing and delivering custom digital solutions that are scalable, intuitive, and built to last. My experience spans modern frontend and backend technologies, with a strong emphasis on clean architecture, performance, and user-centered design.",
    credentials:
      "Projects I lead are guided by agile methodologies and industry best practices, with consistent attention to:",
    bullets: [
      "🚀 Building high-performance web applications",
      "🧩 Designing scalable systems with maintainable code",
      "🎯 Improving user experience through thoughtful UI/UX",
      "🔐 Developing secure, reliable integrations and APIs",
      "📈 Supporting digital transformation across industries"
    ],
    passion:
      "I value technical excellence, continuous learning, and collaborative problem-solving. Whether launching new products, streamlining workflows, or integrating AI-powered features, the goal is always to deliver meaningful impact through smart technology.",
    lookingAhead: "💼 Looking Ahead",
    future:
      "Open to new opportunities that involve impactful projects, strong team collaboration, and scalable innovation.",
    closing:
      "If you're building something ambitious, let’s connect and explore how we can make it thrive—together.",
    EduAndCert: "Education and Certifications:",
    More: "+ More",
    MoreLink: "+ More in Linkedin",
    bachelor: "Bachelor's degree in Electronic, (september 2011 - july 2014)",
    FrontEnd:
      "Meta Front-End Developer Professional Certificate by Meta (march 2024)",
    Net: ".NET FullStack Developer specialization by Courcera (march 2024 )",
    ReacyNative: "React Native Certification by Meta (march 2024 )",
    React: "Advance React by Meta (August 2023 )",
    EF: "EF SET English Certificate 77/100 (C2 Proficiente) oct 2023)",
    AI: "IBM AI Developer Professional Certificate (july 2025)",
    MisProyetcos: "My Projects:",
    All: "All",
    Connect: "Let's Connect",
    descripConnect:
      "I'm currently looking for new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
    yourEmail: "Your email",
    subject: "Subject",
    message: "Message",
    send: "Send Message",
    sayHay: "Just saying hi",
    lesttalk: "Let's talk about...",
  },
};

export const LenguajeProvider = ({ children }) => {
  const [lenguaje, setLenguaje] = useState("en");
  const [text, setText] = useState(Storetext[lenguaje]);

  const ProjectsSectionRef = useRef(null);
  const AboutSectionRef = useRef(null);
  const EmailSectionref = useRef(null);

  const toggleLenguaje = () => {
    if (lenguaje === "es") {
      setLenguaje("en");
    } else {
      setLenguaje("es");
    }
  };

  useEffect(() => {
    setText(Storetext[lenguaje]);
  }, [lenguaje]);

  const data = {
    toggleLenguaje,
    text,
    lenguaje,
    EmailSectionref,
    ProjectsSectionRef,
    AboutSectionRef,
  };
  return (
    <LenguajeContext.Provider value={data}>{children}</LenguajeContext.Provider>
  );
};

export default LenguajeContext;
