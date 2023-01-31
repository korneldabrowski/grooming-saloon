import Image from "next/image";

import Landing from "./components/Landing";
import MiniAbout from "./components/MiniAbout";
import PageDivider from "./components/(MiniAbout)/PageDivider";
import BestSellers from "./components/(shop)/BestSellers";
import Reviews from "./components/(Reviews)/Reviews";
import Header from "./components/Header";
export default function Home() {
  return (
    <main className="font-maven  ">
      <Header>
        <>
          <button className=" px-4 py-2 border-dashed	 border-orange-500/70 border-[3px] rounded-full text-base tems-center text-orange-500/80 hover:text-black hover:bg-orange-300/50 hover:border-orange-400">
            Book a slot!
          </button>
        </>
      </Header>
      <div className="bg-[#fffded]">
        <div className="max-w-screen-xl  mx-auto">
          <Landing />
        </div>
      </div>

      <div className="max-w-screen-xl bg-white mx-auto">
        <MiniAbout />
      </div>

      <div className="bg-[#fffded]">
        <div className="max-w-screen-xl  mx-auto">
          <PageDivider />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl  mx-auto p-4">
          <BestSellers />
        </div>
      </div>

      <div className="bg-white">
        <div className="max-w-screen-xl  mx-auto p-2 sm:p-4">
          <Reviews />
        </div>
      </div>
    </main>
  );
}
