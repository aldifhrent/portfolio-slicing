"use client";

import { cn } from "@/lib/util";
import { WorkSans } from "@/lib/font";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { XMarkIcon } from "@heroicons/react/16/solid";

interface HeaderMobileProps {
  isOpen: boolean;
  handleClick: () => void;
}

const HeaderMobile = ({ isOpen, handleClick }: HeaderMobileProps) => {
  const pathname = usePathname();
  const navMenu = [
    {
      name: "Home",
      href: "/",
      active: pathname === "/",
    },
    {
      name: "Work",
      href: "/work",
      active: pathname === "/work",
    },
    {
      name: "Testimonials",
      href: "/testimonials",
      active: pathname === "/testimonials",
    },
    {
      name: "About",
      href: "/about",
      active: pathname === "/about",
    },
  ];
  return (
    <nav
      className={cn(
        "fixed inset-0 flex flex-col items-center justify-center gap-4 font-semibold text-[#594F43] bg-[#FFDDBF] p-4 z-50",
        WorkSans.className,
        isOpen ? "flex" : "none"
      )}
    >
      <button onClick={handleClick} className="absolute top-4 right-4">
        <XMarkIcon width={24} height={24} />
      </button>
      {navMenu.map((nav) => (
        <Link
          href={nav.href}
          key={nav.name}
          className={cn(
            "gap-8 font-semibold hover:text-black",
            nav.active ? "text-black" : "text-[#594F43]"
          )}
        >
          {nav.name}
        </Link>
      ))}
    </nav>
  );
};

export default HeaderMobile;
