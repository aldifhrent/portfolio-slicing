"use client";
import { WorkSans } from "@/lib/font";
import { cn } from "@/lib/util";
import { Bars3BottomLeftIcon } from "@heroicons/react/16/solid";
import React, { useState } from "react";
import HeaderMobile from "./header-mobile";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="pl-[120px] pt-8">
      <div className="flex items-center">
        <button onClick={handleButton}>
          <Bars3BottomLeftIcon
            width={24}
            height={24}
            className="block lg:hidden"
          />
        </button>

        <nav
          className={cn(
            "hidden lg:flex gap-8 font-semibold text-[#594F43]",
            WorkSans.className
          )}
        >
          <p>Home</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>About</p>
        </nav>
      </div>
      {isOpen && <HeaderMobile isOpen={isOpen} handleClick={handleButton} />}
    </header>
  );
};

export default Header;
