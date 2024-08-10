import { WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  image: string;
  height: number;
  width: number;
}
const WorkCard = (props: WorkCardProps) => {
  return (
    <div className="bg-[#FFF8F2] max-h-full lg:max-h-[400px] rounded-[24px] w-full">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="flex p-[30px]">
          <div className="my-0 lg:my-[90px] text-center lg:text-left">
            <h1
              className={cn(
                "font-semibold text-[24px] lg:text-[32px] leading-[150%] text-[#403930] mt-2 ",
                WorkSans.className
              )}
            >
              {props.title}
            </h1>
            <p className="text-[14px] lg:text-[24px] font-medium leading-[150%]">
              {props.description}
            </p>
            <p className="mt-6 font-semibold text-[#4E5E80] text-[12px] lg:text-[24px]">
              View Case Study
            </p>
          </div>
        </div>
        <div className="flex items-center px-[47px] pb-4 ">
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
};

export default WorkCard;
