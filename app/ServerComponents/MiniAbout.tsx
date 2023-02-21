import React from "react";

const MiniAbout = () => {
  return (
    <section className=" overflow-hidden  pt-24 pb-12">
      <h2 className=" inline-block -rotate-3  rounded-full bg-yellow-300/80 p-4 text-2xl sm:text-4xl">
        A grooming experience like no other
      </h2>
      <div className="flex flex-col gap-y-10 px-4 sm:flex-row ">
        <div className="flex flex-col ">
          <p className="my-12 rounded-md bg-info p-6 font-exo text-base  font-light sm:w-3/5">
            Welcome to Bark-tiful Grooming by Karolina! We are a team of
            passionate dog lovers who believe that every dog deserves to be
            pampered and look their best. We understand that your furry friend
            is more than just a pet, they are a member of your family.
            <br />
            <br /> That's why we offer a grooming experience like no other.
          </p>
          <button className="btn-outline btn-success btn mr-auto rounded-full border-4 border-dashed p-2  font-black">
            Learn even more!
          </button>
        </div>

        <div className=" relative  ml-auto h-96 w-48 rounded-tl-[120px] bg-yellow-300/40 sm:ml-0 sm:w-[37rem] ">
          <img
            src="upLeftDog.png"
            alt="happy dog"
            className="absolute bottom-[-40px] right-0 z-20 w-48"
          />
        </div>
      </div>
    </section>
  );
};

export default MiniAbout;
