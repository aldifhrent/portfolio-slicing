"use client";

import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import Image from "next/image";
import { motion } from "framer-motion";

const AboutMe = () => {
  const motionSettings = {
    initial: { x: -100, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 1, ease: "easeInOut" },
  };
  return (
    <section className="mt-16 bg-[#FFDDBF] px-[30px] md:px-[60px] xl:px-[121px] w-full py-2 h-fit xl:h-[680px]">
      <div className="flex flex-col lg:flex-col xl:flex-row justify-between items-center gap-x-[108px] ">
        <motion.div className="py-[95.5px]" {...motionSettings}>
          <h1
            className={cn(
              "font-semibold text-[30px] md:text-[40px] text-center lg:text-left",
              eczar.className
            )}
          >
            A Little About Me
          </h1>
          <div
            className={cn(
              "mt-4 space-y-2 text-[14px] lg:text-[20px] text-center lg:text-left max-w-lg lg:max-w-none",
              WorkSans.className
            )}
          >
            <p>
              I am Salman Khan from Lucknow, India. I am working in an Indian
              Startup as a User Eperience Designer for the past two years.
            </p>
            <p>
              I got featured various times on many big and small marketplaces,
              portfolio websites and blogs. I also received some awards and
              recognitions from some of the big and small award companies.
              Besides designing, I like to watch anime, read books and solve
              sudoku.
            </p>
          </div>
          <button
            style={{ outline: "4px solid #4D5566" }}
            className={cn(
              "flex sm:mx-auto md:mx-auto lg:mx-0 justify-center items-center gap-x-2 px-[66px] py-6 bg-transparent  rounded-[16px] text-[#4D5566] w-[270px] h-[84px] text-center text-[24px] mt-[40px] font-semibold mx-auto",
              WorkSans.className
            )}
          >
            Contact Me
          </button>
        </motion.div>
        <motion.div
          {...motionSettings}
          initial={{
            x: 100,
            opacity: 0,
          }}
        >
          <Image
            src="/images/aboutme.svg"
            alt="About Me"
            width={550}
            height={100}
            className="max-w-md xl:max-w-none"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;
