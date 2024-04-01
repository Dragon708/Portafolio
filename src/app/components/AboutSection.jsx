"use client";
import React, { useTransition, useState, useContext } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import LenguajeContext from "../Providers/LenguajeProvider";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();
  const { text } = useContext(LenguajeContext);
  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="dark:text-white text-black" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-image.png"
          width={500}
          height={500}
          className="dark:shadow-2xl"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold dark:text-white text-black mb-4">
            {text.About}
          </h2>
          <p className="text-base lg:text-lg">{text.Descripcion}</p>
          <div className="flex flex-col justify-start gap-5 mt-8">
            <div className="mt-2">
              <div className="text-lg">Skills:</div>
              <div className="flex flex-wrap mt-2 gap-3 list-disc pl-2">
                <div>Next.js</div>
                <div>Express</div>
                <div>React.js</div>
                <div>React Native</div>
                <div>.NET MVC</div>
                <div>.NET Core</div>
                <div>Node.js</div>
                <div>PostgreSQL</div>
                <div>JavaScript</div>
                <div>{text.More}</div>
              </div>
            </div>
            <div className="mt-2">
              <div className=" text-lg">{text.EduAndCert}</div>
              <div className="mt-2">
                <ol className="list-disc pl-2">
                  <li>{text.bachelor}</li>
                  <li>{text.FrontEnd}</li>
                  <li>{text.Net}</li>
                  <li>{text.ReacyNative}</li>
                  <li>{text.React}</li>
                  <li>{text.EF}</li>
                  <li>{text.MoreLink}</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
