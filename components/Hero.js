import Image from "next/image";
import React from "react";
import BgHero from "../public/BG Hero.png";
import CheckMark from "../public/Checkmark.png";

const Hero = () => {
  return (
    <div className="max-w-screen-2xl flex items-center justify-between m-auto mt-10">
      <div className="w-1/2">
        <h1 className="text-6xl text-purple-900 font-semibold leading-tight">
          Unlimited Designs. <br /> Flat Monthly Fee.
        </h1>
        <p className="text-md text-gray-400 font-medium mt-5 leading-loose w-4/5">
          Get unlimited designs in areas such as web design, app design,
          brochures and much more for a flat monthly fee. No additional charges.
        </p>
        <div className="flex items-center   w-4/5 mt-5">
          <input
            className="px-4 py-3 border-gray-400  rounded-md border"
            placeholder="Enter a email address"
          />
          <button className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all px-5 py-3 ml-4 rounded-md shadow-inner font-medium">
            Try For Free
          </button>
        </div>
        <div className="flex items-center mt-5 text-gray-400 text-sm">
          <div className="flex items-center mr-5">
            <img src={CheckMark} alt="check" className="mr-3" />
            14 days money back guarentee
          </div>
          <div className="flex items-center">
            <img src={CheckMark} alt="check" className="mr-3" />
            No credit card required
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <Image
          src={BgHero}
          height={600}
          className="rounded-md overflow-hidden  "
          objectFit="cover"
          layout="intrinsic"
          width={800}
        />
      </div>
    </div>
  );
};

export default Hero;
