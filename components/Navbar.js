import React from "react";
import Logo from "../public/logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="py-8 flex items-center justify-between max-w-screen-2xl m-auto">
      <Image src={Logo} height={25} width={70} alt="logo" />

      <div className="flex space-x-5 items-center font-medium">
        <a href="#">Home</a>
        <a href="#">Features</a>
        <a href="#">Pricing & Plans</a>
      </div>

      <div className="flex space-x-5 items-center">
        <a href="#">Sign in</a>
        <button className="bg-purple-900 text-purple-100 hover:bg-purple-800 transition-all  px-5 py-2 rounded-md shadow-inner font-medium">
          Try for free
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
