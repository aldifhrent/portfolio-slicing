import { WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import React from "react";

type TestimonialProps = {
  text: string;
  author: string;
};
const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div className="w-full lg:w-[460px] h-full">
      <p
        className={cn(
          "text-[20px] text-center lg:text-start",
          WorkSans.className
        )}
      >
        {props.text}
      </p>
      <h1 className="mt-[15px] font-bold text-[20px] tracking-[25] text-center lg:text-start">
        {props.author}
      </h1>
    </div>
  );
};

export default TestimonialCard;
