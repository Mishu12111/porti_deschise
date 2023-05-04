import * as React from "react";
import HeroImg from "../images/hero.jpg";
const Header = () => {
  return (
    <header className="h-[90vh] p-8 flex flex-col justify-center items-start">
      <div className="bg-gray-700 text-[#FEFEFF]/70 rounded-md px-4 py-8 w-[90%]  lg:w-[50%] backdrop-filter backdrop-blur-lg bg-opacity-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold ">
          Fizica Interactiva
        </h1>
        <p className="mt-1 pl-2 lg:pl-4 sm:text-base lg:text-2xl font-semibold ">
          Descopera experimente si principii din fizica intr o maniera atractiva
          pentru toate varstele....
        </p>
      </div>
    </header>
  );
};

export default Header;
