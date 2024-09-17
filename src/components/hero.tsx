import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="pl-4 md:pl-[60px] xl:pl-[120px] pt-[108px]">
      <div className="flex flex-col lg:flex-col xl:flex-row justify-between gap-x-[54px]">
        <div className="flex flex-col item-start">
          <p
            className={cn(
              "px-6 py-3 bg-[#FFDDBF] hover:bg-[#e4c5aa] text-[#403930] rounded-[10px] font-semibold text-[24px]  leading-[150%] w-fit cursor-pointer",
              WorkSans.className
            )}
          >
            👋 Hello All
          </p>
          <h1
            className={cn(
              "pt-6 text-[59px] sm:text-[42px] md:text-[40px] lg:text-[64px] font-semibold text-[#403930] leading-[125%] tracking-[2%]  max-w-xl",
              eczar.className
            )}
          >
            I’m Salman Khan, A Creative Designer and Storyteller
          </h1>
          <div className="flex flex-col md:flex-row mt-[40px] gap-x-4 gap-y-4">
            <button
              className={cn(
                "flex justify-center items-center gap-x-2 px-[33.5px] py-6 bg-[#4E5E80] hover:bg-[#44516e]  rounded-[16px] text-[#F3F2FF] w-[270px] h-[84px] text-center text-[24px]",
                WorkSans.className
              )}
            >
              View My Work
              <div className="relative w-6 h-6">
                <Image
                  src="/icons/chevron-right-square.svg"
                  alt="Chevron"
                  fill
                  className="object-contain"
                />
              </div>
            </button>
            <button
              style={{ outline: "4px solid #4D5566" }}
              className={cn(
                "flex justify-center items-center gap-x-2 px-[66px] py-6 bg-transparent  rounded-[16px] text-[#4D5566] w-[270px] h-[84px] text-center text-[24px] hover:bg-[#403930] hover:text-white",
                WorkSans.className
              )}
            >
              Contact Me
            </button>
          </div>
        </div>
        <Image
          src="/images/hero.svg"
          width={524}
          height={500}
          alt="Hero Images"
          className="mt-4 md:mt-0"
        />
      </div>
    </section>
  );
};

export default Hero;
