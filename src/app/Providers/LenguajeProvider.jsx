"use client";
import { createContext, useEffect, useState } from "react";

const LenguajeContext = createContext();

const Storetext = {
  es: {
    Portafolio: "Portafolio",
    About: "Sobre Mi",
    Projects: "Proyectos",
    Contact: "Contacto",
    Hello: "Hola, Soy",
    hire: "Contratame",
    Download: "Descargar CV",
    Users: "Usuarios",
    Certifications: "Certificaciones",
    Years: "Años",
    Descripcion:
      "Soy un desarrollador web con 2 años de experiencia, disfruto transformando ideas en sitios web elegantes y funcionales. Mi pasión radica en crear código limpio, optimizar las experiencias de los usuarios y mantenerme actualizado con las últimas tendencias de la industria. Ya sea magia de front-end o magia de back-end, estoy listo para enfrentar cualquier desafío. Construyamos algo notable juntos!",
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
    Projects: "Projects",
    Contact: "Contact",
    Hello: "Hello, I'm",
    hire: "Hire Me",
    Download: "Download CV",
    Users: "Users",
    Certifications: "Certifications",
    Years: "Years",
    Descripcion:
      " I am a web developer with 2 years of experience, I enjoy transforming ideas into elegant, functional websites. My passion lies in crafting clean code, optimizing user experiences, and staying up-to-date with the latest industry trends. Whether it’s front-end magic or back-end wizardry, I’m ready to tackle any challenge. Let’s build something remarkable together!",
    EduAndCert: "Education and Certifications:",
    More: "+ More",
    MoreLink: "+ More in Linkedin",
    bachelor: "Bachelor's degree in Electronic, (september 2011 - july 2014)",
    FrontEnd:
      "Meta Front-End Developer Professional Certificate by Meta (march 2024)",
    Net: ".NET FullStack Developer specialization by Courcera (march 2024 )",
    ReacyNative: "React Native Certification by Meta (march 2024 )",
    React: "Advance React por Meta (August 2023 )",
    EF: "EF SET English Certificate 77/100 (C2 Proficiente) oct 2023)",
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

  const data = { toggleLenguaje, text, lenguaje };
  return (
    <LenguajeContext.Provider value={data}>{children}</LenguajeContext.Provider>
  );
};

export default LenguajeContext;
