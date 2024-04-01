"use client";
import React, { useContext } from "react";
import dynamic from "next/dynamic";
import LenguajeContext from "../Providers/LenguajeProvider";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  const { text } = useContext(LenguajeContext);
  const achievementsList = [
    {
      metric: text.Projects,
      value: "10",
      postfix: "+",
    },
    {
      prefix: "~",
      metric: text.Users,
      value: "2000,000",
    },
    {
      metric: text.Certifications,
      value: "21",
    },
    {
      metric: text.Years,
      value: "2",
    },
  ];
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0">
              <h2 className="dark:text-white text-black text-4xl font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="dark:text-white text-black text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {achievement.postfix}
              </h2>
              <p className="dark:text-[#ADB7BE]   text-black text-base">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
