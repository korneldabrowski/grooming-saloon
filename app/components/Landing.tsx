import React from "react";
import Header from "./Header";
import NavIcons from "./NavIcons";
import Paw from "./Paw";

const Landing = () => {
  return (
    <div className=" p-2 text-neutral">
      <div className="divider"></div>
      <NavIcons size={24} />
      <div className="mt-6 whitespace-pre-line text-center font-maven text-3xl font-semibold sm:px-36 sm:text-6xl">
        <h2 className=" ">
          <span className="rounded-full bg-info py-2 px-4">Paw-fect</span>
          grooming for your <br />
        </h2>
        <p className="inline-block w-auto  -rotate-[6deg] rounded-full bg-success   py-2 px-4 sm:my-6">
          furry friend
        </p>
      </div>

      <div className="relative mx-auto   mt-12 flex h-2/3 flex-col justify-center    sm:mt-12 lg:h-1/2 lg:flex-row">
        <div className="blobElement top-0 bg-purple-300  md:-left-4 "></div>
        <div className="blobElement animation-delay-2000 top-10  bg-yellow-300 md:-right-4"></div>
        <div className="blobElement animation-delay-4000 -bottom-8  bg-pink-300   md:-left-20"></div>
        <h3 className="left-0 text-center text-lg text-gray-500/80  lg:absolute">
          Making your furry friend look and feel their best,
          <br />{" "}
          <span className="bg-gradient-to-r from-red-500 to-violet-500 bg-clip-text font-semibold text-transparent">
            one paw at a time.
          </span>
        </h3>

        <Paw />
        <div className="relative mt-4 flex flex-row flex-wrap justify-between text-base  lg:absolute lg:right-0 lg:top-0 lg:flex-col lg:gap-y-5">
          <h3 className="heroElements ">
            Expert
            <br /> grooming
          </h3>
          <h3 className=" heroElements">
            Personalized
            <br /> care
          </h3>
          <h3 className="heroElements">
            Eco-friendly
            <br /> products
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Landing;
