import { WorkData } from "@/const";
import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import React from "react";
import Image from "next/image";
interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  height: number;
  width: number;
}

const Work = () => {
  return (
    <section className="px-8 md:px-[112px] py-8 md:py-[88px] bg-[#FFDDBF]">
      <h1
        className={cn(
          "text-[#403930] font-semibold text-[30px] lg:text-[40px] leading-[125%] tracking-[2%] whitespace-nowrap",
          eczar.className
        )}
      >
        My Recent Work
      </h1>
      <div className="flex flex-col gap-y-6 mt-8">
        <WorkCard
          title={"Sheepify States"}
          description={
            "Designed some empty state screens in kawaii style for the popular sheepify app"
          }
          image={"/images/work/sheepify.svg"}
          height={590}
          width={400}
        />
        <WorkCard
          title={"HoneyBunny"}
          description={
            "A colorful dashboard to manage your fictional projects and team, all in a single place."
          }
          image={"/images/work/honeybunny.svg"}
          height={509}
          width={318}
        />
        <WorkCard
          title={"Memrise Redesign"}
          description={
            "I redesigned the popular language learning app memrise in kawaii style to make it more cute."
          }
          image={"/images/work/memrise.svg"}
          height={500}
          width={100}
        />
      </div>
    </section>
  );
};

export default Work;

function WorkCard(props: WorkCardProps) {
  return (
    <div className="bg-[#FFF8F2]  rounded-[24px] w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex">
          <div className="my-0 p-[30px] text-center lg:text-left">
            <h1
              className={cn(
                "font-semibold text-[24px] lg:text-[32px] leading-[150%] text-[#403930] mt-2 ",
                WorkSans.className
              )}
            >
              {props.title}
            </h1>
            <p className="text-[14px] lg:text-[24px] font-medium leading-[150%] max-w-lg">
              {props.description}
            </p>
            <p className="mt-6 font-semibold text-[#4E5E80] text-[12px] lg:text-[24px]">
              View Case Study
            </p>
          </div>
        </div>
        <div className="flex items-center px-[47px] py-0">
          <Image
            src={props.image || ""}
            alt={props.title}
            loading="lazy"
            layout="responsive"
            width={props.width}
            height={props.height}
          />
        </div>
      </div>
    </div>
  );
}
