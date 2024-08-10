import { WorkData } from "@/const";
import { eczar } from "@/lib/font";
import { cn } from "@/lib/util";
import React from "react";
import WorkCard from "./work-card";

const Work = () => {
  return (
    <section className="px-[112px] py-[88px] bg-[#FFDDBF]">
      <h1
        className={cn(
          "text-[#403930] font-semibold text-[30px] lg:text-[40px] leading-[125%] tracking-[2%]",
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
