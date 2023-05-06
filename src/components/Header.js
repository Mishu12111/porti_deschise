import * as React from "react";

const Header = () => {
  return (
    <header className="flex h-[95vh] items-center justify-start p-4  ">
      <div className="max-w-[640px] rounded-md bg-white bg-opacity-10 px-2 py-6 text-center shadow-lg backdrop-blur-md backdrop-filter sm:px-4 sm:text-start">
        <h1 className="text-5xl">Fizica interactivă</h1>
        <p className="pl-2 text-xl  ">
          Descoperă experimente și principii din fizică intr-o manieră atractivă
        </p>
      </div>
    </header>
  );
};

export default Header;
