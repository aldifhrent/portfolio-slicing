import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import Image from "next/image";
const ContactMe = () => {
  return (
    <section className="py-[128px] px-[120px]">
      <div className="flex flex-col">
        <h1
          className={cn(
            "font-semibold text-[32px] lg:text-[64px] text-[#403930] w-full lg:w-[892px] ",
            eczar.className
          )}
        >
          Let’s work together and make everything super cute and super useful.
        </h1>
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end ">
          <button
            style={{ outline: "4px solid #4D5566" }}
            className={cn(
              "flex justify-center items-center gap-x-2 px-[66px] py-6 bg-transparent  rounded-[16px] text-[#4D5566] w-[270px] h-[84px] text-center text-[24px] mt-[40px] font-semibold",
              WorkSans.className
            )}
          >
            Contact Me
          </button>
          <div className="flex gap-x-8 gap-y-8 mr-0 lg:mr-[128px] items-center mt-4 lg:mt-0">
            <Image
              src="/icons/Dribbble.svg"
              alt="Dribble"
              width={32}
              height={32}
            />
            <Image
              src="/icons/Instagram.svg"
              alt="Dribble"
              width={32}
              height={32}
            />
            <Image
              src="/icons/Pinterest.svg"
              alt="Pinterest"
              width={32}
              height={32}
            />
            <Image
              src="/icons/Linkedin.svg"
              alt="Linkedin"
              width={32}
              height={32}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
