import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    <div className="bg-black h-screen flex flex-col md:flex-row md:justify-between  md:bg-[url('/offerbg.png')] md:h-[70vh] ">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-8 p-6">
        <h1 className="text-white text-5xl font-bold xl:text-6xl">
          Delicious Burger and French Fry
        </h1>

        <p className="text-white xl:text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis commodi
          minus obcaecati, dolorum quia neque?
        </p>

        <CountDown />

        <button className="bg-red-500 text-white rounded-md py-3 px-6 ">
          Order Now
        </button>
      </div>
      {/* Image Container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image
          src="/offerProduct.png"
          alt=" "
          fill
          className=" object-contain "
        />
      </div>
    </div>
  );
};

export default Offer;
