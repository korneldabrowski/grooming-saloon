// export const dynamic = "force-dynamic";

import Landing from "./components/Landing";
import MiniAbout from "./components/MiniAbout";
import PageDivider from "./components/(MiniAbout)/PageDivider";
import BestSellers from "./components/(shop)/BestSellers";
import Reviews from "./components/(Reviews)/Reviews";
import Header from "./components/Header";

import Modal from "@/components/Modal";

export default function Home() {
  return (
    <main className=" font-maven  ">
      <Modal />
      <Header path="/">
        <>
          <button className="btn-outline btn-info btn rounded-full border-4 border-dashed p-2  font-black">
            Book a slot!
          </button>
        </>
      </Header>
      <div className="bg-base-100">
        <div className="mx-auto  max-w-screen-xl">
          <Landing />
        </div>
      </div>

      <div className="bg-base-100">
        <div className="mx-auto   max-w-screen-xl">
          <MiniAbout />
        </div>
      </div>

      <div className="bg-base-100">
        <div className="mx-auto  max-w-screen-xl">
          <PageDivider />
        </div>
      </div>

      <div className=" bg-base-100">
        <div className="mx-auto  max-w-screen-xl p-4">
          <BestSellers />
        </div>
      </div>

      <div className="bg-base-100">
        <div className="mx-auto  max-w-screen-xl p-2 sm:p-4">
          <Reviews />
        </div>
      </div>
    </main>
  );
}
