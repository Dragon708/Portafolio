"use client";
import dynamic from "next/dynamic";
import { useContext } from "react";
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
      metric: text.Years,
      value: "3",
      postfix: "+",
    },
    {
      metric: text.Projects,
      value: "20",
      postfix: "+",
    },
    // {
    //   prefix: "~",
    //   metric: text.Users,
    //   value: "3000,000",
    // },
    {
      metric: text.Certifications,
      value: "25",
    },

  ];
  return (
    <div className="pb-20">
      <div className="sm:border-[#33353F] sm:border rounded-md py-2 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
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
