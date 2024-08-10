import Image from "next/image";
import TestimonialCard from "./testimonial-card";
import { eczar, WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
const Testimonial = () => {
  return (
    <section className="px-[62px] py-[128px]">
      <div className="flex flex-col mt-[128px] items-center">
        <div>
          <h1
            className={cn(
              "text-center text-[40px] font-semibold leading-[125%] tracking-[2%]",
              eczar.className
            )}
          >
            Some Generous Words
          </h1>
          <p className={cn("mt-2 font-medium text-[20px]", WorkSans.className)}>
            Some of my favorite testimonials from my clients
          </p>
        </div>
        <div className="flex justify-between mt-[96px] relative w-full items-center">
          <div className="hidden lg:absolute left-0 top-1/2 transform -translate-y-1/2">
            <Image
              src="/icons/chevron-left-testimonial.svg"
              alt="Chevron Left Testimonial"
              width={56}
              height={56}
            />
          </div>

          <div className="flex flex-col lg:flex-row mx-auto items-center text-left md:text-center">
            <TestimonialCard
              text={
                "I had grown a little bit disappointed when I realized that my work would not be taking me in any new, creative design directions. Thankfully, I found Salman Khan and his creativity that goes above and beyond, proving to be exactly what I needed to take."
              }
              author={"Aika Chan"}
            />
            <TestimonialCard
              text={
                "Salman Khan is the best designer that I have ever worked with. He is seriously what you would call 'creative': he innovatively solves all sorts of problems and always delivers both prompt and high quality work. I can't recommend him enough!"
              }
              author={"Arakan Chan"}
            />
          </div>
          <div className="hidden lg:absolute right-0 top-1/2 transform -translate-y-1/2">
            <Image
              src="/icons/chevron-right-testimonial.svg"
              alt="Chevron Right Testimonial"
              width={56}
              height={56}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
