"use client";
import { motion, useInView } from "framer-motion";
import { useContext, useState } from "react";
import LenguajeContext from "../Providers/LenguajeProvider";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

const projectsData = [
  {
    id: 1,
    title: "AlcabService Travel Agency",
    description:
      "Landing Page para agencia de viajes radicada en Miami FL creada con React,Tailwind,Framer-motiony desplegada en Azure",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://www.alcabservice.com",
  },
  {
    id: 2,
    title: "Angular All in One",
    description:
      "Proyecto en Angular, tipo toolbox , con aplicacion de clima, juego de piano, convertidor de monedas, Sistema para agendar citas, y buscador de noticias,Tecnologias usadas Angular, Tailwind, Angular Material UI, Typescript",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dragon708/All-in-One-Angular",
    previewUrl: "https://angular-all-in-one.netlify.app",
  },
  {
    id: 3,
    title: "A-pululu Delivery App",
    description:
      "Aplicacion creada en React Native, Tailwind y React Native Paper destinada al uso de los repartidores de la plataforma a-pululu.com",
    image: "/images/projects/3.png",
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "A-pululu E-commerce",
    description:
      "E-commerce creado con React.js, Tailwind,NextUI, BMSPay para pasarela de pagos,API rest con Express.js y Base de datos PostgresSQL, Zeptomail para el envio de Emails, Desplegada en Azure",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "https://a-pululu.com",
  },
  {
    id: 5,
    title: "Dragon-cool Repair",
    description:
      "Landing Page para negocio de reparacion de equipos de refrigeracion con React.js, Tailwind, Framer-Motion, desplegada en Netlify",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dragon708/Dragon-Cool-LandingPage",
    previewUrl: "https://dragon-cool-repair.netlify.app",
  },
  {
    id: 6,
    title: "Project Gap Skipa",
    description:
      "Sistema de gestion de proyectos para compañia Aeroportuaria ,creada con .NET MVC , AJAX, Jquery, Boostrap , y Razor pages ",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "Portafolio",
    description:
      "Portafolio de proyetcos creado con Next.js , Tailwind, Framer-Motion, desplegada en Netlify",
    image: "/images/projects/7.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dragon708/Portafolio",
    previewUrl: "https://jorge-gonzalez.netlify.app",
  },
  {
    id: 8,
    title: "Vet Locator",
    description:
      "Aplicacion creada con Next.js , Tailwind, LocationIQ API, backend con .NET 8 , desplegada en AWS Amplify",
    image: "/images/projects/8.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Dragon708/pet-locator",
    previewUrl: "https://master.d1fv1m3a0amg32.amplifyapp.com/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const { text, ProjectsSectionRef } = useContext(LenguajeContext);

  const isInView = useInView(ProjectsSectionRef, { once: true });
  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section ref={ProjectsSectionRef} id="projects">
      <h2 className="text-center text-4xl font-bold dark:text-white text-black mt-4 mb-8 md:mb-12">
        {text.MisProyetcos}
      </h2>
      <div className="dark:text-white text-black flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name={text.All}
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}>
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
