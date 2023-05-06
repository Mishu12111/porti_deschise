import * as React from "react";

const Header = () => {
  return (
    <header className="h-[95vh] flex justify-start items-center p-4 ">
      <div className="backdrop-filter backdrop-blur-md bg-white bg-opacity-10 py-6 px-2 rounded-md text-center sm:text-start sm:px-4 max-w-[720px]">
        <h1 className="text-5xl">Fizica interactiva</h1>
        <p className="pl-2 text-xl inline">
          Descopera experimente si principii din fizica intr o maniera atractiva
          pentru toate varstele....
        </p>
      </div>
    </header>
  );
};

export default Header;
