import React from "react";

const MiniAbout = () => {
  return (
    <section className=" pt-24 mt-12 mb-12">
      <h2 className=" text-2xl sm:text-4xl  inline-block bg-yellow-300/80 p-4 rounded-full -rotate-3">
        A grooming experience like no other
      </h2>
      <div className="flex flex-col sm:flex-row px-4 gap-y-10 ">
        <div className="flex flex-col ">
          <p className="text-base my-12 p-6 bg-cyan-300/80 rounded-md sm:w-3/5  font-exo font-light">
            Welcome to Bark-tiful Grooming by Karolina! We are a team of
            passionate dog lovers who believe that every dog deserves to be
            pampered and look their best. We understand that your furry friend
            is more than just a pet, they are a member of your family.
            <br />
            <br /> That's why we offer a grooming experience like no other.
          </p>
          <button className="border-2 mr-auto p-2 rounded-full text-red-500 -rotate-6 hover:text-black hover:border-red-500 hover:bg-red-500/50 border-dashed  border-red-500">
            Learn even more!
          </button>
        </div>

        <div className=" bg-yellow-300/40  w-48 ml-auto sm:ml-0 sm:w-[37rem] h-96 rounded-tl-[120px] relative ">
          <img
            src="upLeftDog.png"
            alt="happy dog"
            className="absolute bottom-[-40px] w-48 right-0 z-20"
          />
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;
