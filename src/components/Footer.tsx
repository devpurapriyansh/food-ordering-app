import { defaultConfig } from "next/dist/server/config-shared";
import Link from "next/link";
import react from "react";

const Footer = () => {
  return (
    <div className=" h-1/2 md:h-24 p-4 lg:px-20 xl:px-40 text-red-500 flex items-center justify-between  ">
      <Link href="/" className="font-bold text-xl ">
        NAVELI
      </Link>
      <p>ALL RIGHTS RESERVED</p>
    </div>
  );
};

export default Footer;
