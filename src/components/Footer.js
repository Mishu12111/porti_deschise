import * as React from "react";

const Footer = () => {
  return (
    <header className="flex h-[95vh] items-center justify-start p-4  ">
      <div className="max-w-[640px] rounded-md bg-white bg-opacity-10 px-2 py-6 text-center shadow-lg backdrop-blur-md backdrop-filter sm:px-4 sm:text-start">
        <h1 className="text-5xl">Meet the team</h1>
        <p className="pl-2 text-xl  ">
          Profesor coordonator: Livia Trestioreanu
        </p>
        <p className="pl-3 text-x2  ">
          Elevi:
        </p>
        <p className="pl-3 text-x2  ">
          Ionuț Alexandru Tudor-Pricop
        </p>
        <p className="pl-3 text-x2  ">
          Dragomir Mihai Andrei
        </p>
      </div>
    </header>
  );
};

export default Footer;
