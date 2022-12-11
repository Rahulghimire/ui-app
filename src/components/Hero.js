import React from "react";

const Hero = () => {
  return (
    <div className="relative">
      <img
        width={1250}
        height={1250}
        src="./assets/44.png"
        alt="back"
        className="object-contain mx-auto blur-sm"
      />
      <div className="absolute left-12 top-20 w-1/2">
        <h1 className="font-bold text-5xl text-blue mb-1">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </h1>
        <span className="pt-4 text-blue">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
          explicabo ea a quam beatae harum possimus quos quidem? et? Repellat
          explicabo ea a quam beatae harum possimus quos quidem? et?
        </span>
        <div className="block mt-4">
          <a className="uppercase px-4 py-2 text-white bg-gray-800 rounded-md shadow hover:bg-gray-600">
            saiba mais
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
