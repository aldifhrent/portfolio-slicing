import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import Image from "next/image";
const AboutMe = () => {
  return (
    <section className="mt-16 bg-[#FFDDBF] px-[121px]  w-full py-2 h-fit ">
      <div className="flex flex-col lg:flex-row justify-between items-center gap-x-[108px]">
        <div className="py-[95.5px]">
          <h1
            className={cn(
              "font-semibold text-[30px] md:text-[40px]",
              eczar.className
            )}
          >
            A Little About Me
          </h1>
          <div
            className={cn(
              "mt-4 space-y-2 text-[14px] lg:text-[20px]",
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
              "flex justify-center items-center gap-x-2 px-[66px] py-6 bg-transparent  rounded-[16px] text-[#4D5566] w-[270px] h-[84px] text-center text-[24px] mt-[40px] font-semibold ",
              WorkSans.className
            )}
          >
            Contact Me
          </button>
        </div>
        <div className="">
          <Image
            src="/images/aboutme.svg"
            alt="About Me"
            width={550}
            height={100}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
