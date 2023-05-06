import * as React from "react";

const PostGrid = () => {
  return (
    <div className="bg-slate-100 flex justify-around flex-wrap p-4 ">
      {/* card */}
      <div className="h-auto rounded-md overflow-hidden bg-white shadow-lg flex-none p-3 m-2 max-w-[300px]">
        <img
          className="rounded-md w-full"
          src="https://phet.colorado.edu/sims/html/my-solar-system/latest/my-solar-system-420.png"
          alt="img-blur-shadow"
          layout="fill"
        />
        <div className="m-2">
          <h3 className="text-2xl font-bold mb-1">My Solar System</h3>
          <ul className="list-disc text-gray-700">
            <li className="ml-6">ELEV_1_lorem</li>
            <li className="ml-6">ELEV_2_lorem</li>
          </ul>
          <p className="text-gray-500 mb-3">
            Predict how the position, mass, velocity, and distance between
            planetary bodies affect their motion and orbits.
          </p>
          <a className="bg-[#e3f2fd]  py-2 px-4 rounded-md" href="">
            Descopera mai mult
          </a>
        </div>
      </div>
    </div>
  );
};
export default PostGrid;
