"use client";
import { useContext } from "react";
import { FaGraduationCap, FaTools } from "react-icons/fa";
import LenguajeContext from "../Providers/LenguajeProvider";

const AboutSection = () => {
  const { text, AboutSectionRef } = useContext(LenguajeContext);

  const styles = {
    section: {
      maxWidth: "800px",
      margin: "0 auto",
      padding: "40px",
      fontFamily: "Segoe UI, sans-serif",
      color: "#333",
    },
    heading: {
      fontSize: "2rem",
      marginBottom: "20px",
    },
    subheading: {
      fontSize: "1.5rem",
      marginTop: "30px",
      marginBottom: "10px",
    },
    paragraph: {
      fontSize: "1.1rem",
      lineHeight: "1.6",
      marginBottom: "15px",
    },
    list: {
      paddingLeft: "20px",
      marginBottom: "20px",
    },
    listItem: {
      fontSize: "1.1rem",
      marginBottom: "8px",
    },
  };

  return (
    <section
      className="dark:text-white text-black"
      ref={AboutSectionRef}
      id="about"
    >
      <div className="md:grid md:grid-cols-1 gap-8 justify-center items-center pn-8 px-4 xl:gap-16 w-full mx-auto sm:pb-8 xl:px-16">

        <div className="mt-4 md:mt-0 text-left flex flex-col w-full h-full">
          <section >
            <h2 style={styles.heading}>{text.greeting}</h2>
            <p style={styles.paragraph}>{text.intro}</p>
            <p style={styles.paragraph}>{text.credentials}</p>
            <ul style={styles.list}>
              {text.bullets.map((item, index) => (
                <li key={index} style={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
            <p style={styles.paragraph}>{text.passion}</p>
            <p style={styles.paragraph}>{text.future}</p>
            <p style={styles.paragraph}>{text.closing}</p>
          </section>
        </div>
        <div className="w-full rounded-lg grid lg:grid-cols-2 p-2 xl:p-6  gap-10 duration-300 ">

          <div className="bg-transparent border-2 border-slate-300 border-dashed rounded-lg p-6 transition-shadow duration-300 w-full ">


            <div className="flex items-center gap-3 mb-4 text-green-600">
              <FaGraduationCap className="text-2xl" />
              <h2 className="text-xl font-semibold">{text.EduAndCert}</h2>
            </div>
            <ol className="list-disc list-inside dark:text-white text-gray-700 dark:text-whitespace-y-2 text-md">
              <li>{text.bachelor}</li>
              <li>{text.FrontEnd}</li>
              <li>{text.Net}</li>
              <li>{text.ReacyNative}</li>
              <li>{text.React}</li>
              <li>{text.AI}</li>
              <li>{text.EF}</li>
              <li>
                <a
                  href="www.linkedin.com/in/jorge-a-gonzález-molina-330337251"
                  target="_blank"
                  className="text-green-600 hover:underline font-medium"
                >
                  {text.MoreLink}
                </a>
              </li>
            </ol>
          </div>
          <div className="bg-transparent border-2 border-slate-300 border-dashed rounded-lg p-6 transition-shadow duration-300 w-full ">

            <div className="flex items-center justify-center gap-3 mb-4 text-indigo-600">
              <FaTools className="text-2xl" />
              <h2 className="text-xl  font-semibold">Skills</h2>
            </div>
            <ol className="list-disc list-inside text-gray-700 dark:text-white text-md grid grid-cols-2 lg:grid-cols-3   gap-y-2">
              {[
                "Next.js", "Express", "React.js", "React Native", ".NET MVC", ".NET Core",
                "Node.js", "PostgreSQL", "SQL Server", "TypeScript", "Tailwind", "Git",
                "Docker", "AWS", "Azure", "Supabase"
              ].map((skill, index) => (
                <li
                  key={index}
                  className="font-semibold"
                >
                  {skill}
                </li>
              ))}
            </ol>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
