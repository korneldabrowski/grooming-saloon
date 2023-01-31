import React from "react";
import Header from "./Header";
import NavIcons from "./NavIcons";
import Paw from "./Paw";

const Landing = () => {
  return (
    <div className=" px-2">
      <div className=" border-[1px] border-gray-200/50 w-full "></div>
      <NavIcons size={24} />
      <div className="text-center mt-6 sm:px-36 text-3xl sm:text-6xl font-maven font-semibold whitespace-pre-line">
        <h1 className=" ">
          <span className="bg-yellow-300/60 rounded-full py-2 px-2">
            Paw-fect
          </span>
          grooming for your <br />
        </h1>
        <p className="sm:my-6 bg-red-300/60  rounded-full py-2 px-2   w-auto inline-block -rotate-[6deg]">
          furry friend
        </p>
      </div>

      <div className="justify-center relative overflow-hidden  h-2/3 lg:h-1/2 flex lg:flex-row flex-col    mx-auto mt-12 sm:mt-12">
        <div className="blobElement top-0 md:-left-4  bg-purple-300 "></div>
        <div className="blobElement top-10 md:-right-4  bg-yellow-300 animation-delay-2000"></div>
        <div className="blobElement -bottom-8 md:-left-20  bg-pink-300   animation-delay-4000"></div>
        <h3 className="lg:absolute left-0 text-lg text-center  text-gray-500/80">
          Making your furry friend look and feel their best,
          <br />{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-violet-500 font-semibold">
            one paw at a time.
          </span>
        </h3>

        <Paw />
        <div className=" lg:absolute relative lg:right-0 flex lg:flex-col flex-row justify-between text-base lg:top-0 mt-4 lg:gap-y-5 flex-wrap">
          <h1 className="heroElements">
            Expert
            <br /> grooming
          </h1>
          <h1 className=" heroElements">
            Personalized
            <br /> care
          </h1>
          <h1 className="heroElements">
            Eco-friendly
            <br /> products
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Landing;
