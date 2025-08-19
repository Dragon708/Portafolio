"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { TypeAnimation } from "react-type-animation";
import LenguajeContext from "../Providers/LenguajeProvider";

const HeroSection = () => {
  const { text, lenguaje } = useContext(LenguajeContext);
  return (
    <section className="lg:py-16">
      <div className="flex transition-all duration-700 ease-in-out justify-between mobile:flex-col ">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-9 place-self-center text-center sm:text-left justify-self-start">
          <h1 className="dark:text-white text-black mb-4 text-3xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {text.Hello}
            </span>
            <br></br>
            <TypeAnimation
              sequence={["Jorge González", 1000, "Full-stack Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl"></p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white">
              {text.hire}
            </Link>
            <a
              href={
                lenguaje === "en"
                  ? "/Pdf/Jorge González CV English.docx"
                  : "/Pdf/Jorge González CV Español.docx"
              }
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
              {/* <span className="block dark:bg-[#121212] bg-white text-black dark:text-white hover:text-white hover:bg-slate-800 rounded-full px-5 py-2"></span> */}
              <span className="block dark:bg-[#121212] bg-white text-black dark:text-white hover:text-white hover:bg-slate-800 dark:hover:bg-slate-800 rounded-full px-5 py-2">
                {text.Download}
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0 ">
          <div className="rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/perfi2l.JPG"
              alt="hero image"
              className="rounded-full absolute transform overflow-clip transition-all duration-700 w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={320}
              height={320}
              quality={100}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
