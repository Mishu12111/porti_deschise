import * as React from "react";

const PostGrid = () => {
  return (
    <div className="bg-slate-100 grid gap-4 p-4 ">
      {/* card */}

      <div className="h-auto  rounded-md overflow-hidden bg-white shadow-lg flex-none p-3 max-w-[300px]">
        <img
          className="rounded-md w-full"
          src="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system-420.png"
          alt="img-blur-shadow"
          layout="fill"
        />
        <div className="m-2">
          <h3 className="text-2xl font-bold mb-1">My Solar System</h3>
          <p className="text-gray-500 mb-3">
            Predict how the position, mass, velocity, and distance between
            planetary bodies affect their motion and orbits.
          </p>
          <a className="bg-[#d6efff] py-2 px-4 rounded-md" href="">
            Descopera mai mult
          </a>
        </div>
      </div>
    </div>
  );
};
export default PostGrid;
