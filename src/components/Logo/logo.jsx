import Image from "next/image";
import React from "react";
import sblogo from "../../../public/logos/logo1.png";
import Link from "next/link";
const Logo = () => {
  return (
    <Link href="/" className="flex items-center ">
      <div className="w-24 overflow-hidden ">
        <Image
          src={sblogo}
          alt="SB Blog"
          className="w-full h-auto rounded-md"
          width={80}
        />
      </div>
    </Link>
  );
};

export default Logo;
