"use client";
import Image from "next/image";
import React, { useContext } from "react";
import sblogoBlack from "../../../public/logos/logo1.png"; // Logos
import sblogoWhite from "../../../public/logos/logo2.png";
import Link from "next/link";
import { ThemeContext } from "@/context/ThemeContext";
const Logo = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Link href="/" className="flex items-center ">
      <div className="w-24 overflow-hidden ">
        {theme === "light" ? (
          <Image
            src={sblogoBlack}
            alt="SB Blog"
            className="w-full h-auto rounded-md"
            width={100}
          />
        ) : (
          <Image
            src={sblogoWhite}
            alt="SB Blog"
            className="w-full h-auto rounded-md"
            width={100}
          />
        )}
      </div>
    </Link>
  );
};

export default Logo;
