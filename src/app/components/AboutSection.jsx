"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a web developer with 2 years of experience, I enjoy
            transforming ideas into elegant, functional websites. My passion
            lies in crafting clean code, optimizing user experiences, and
            staying up-to-date with the latest industry trends. Whether it’s
            front-end magic or back-end wizardry, I’m ready to tackle any
            challenge. Let’s build something remarkable together!
          </p>
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
                <div>+More</div>
              </div>
            </div>
            <div className="mt-2">
              <div className=" text-lg">Education and Certifications:</div>
              <div className="mt-2">
                <ol className="list-disc pl-2">
                  <li>
                    Bachelor's degree in Electronic, (september 2011 - july
                    2014)
                  </li>
                  <li>
                    Meta Front-End Developer Professional Certificate by Meta
                    (march 2024)
                  </li>
                  <li>
                    .NET FullStack Developer specialization by Courcera (march
                    2024 )
                  </li>
                  <li>React Native Certification by Meta (march 2024 )</li>
                  <li>Advance React by Meta (August 2023 )</li>
                  <li>
                    EF SET English Certificate 77/100 (C2 Proficient) oct 2023)
                  </li>
                  <li>+ More in Linkedin</li>
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
