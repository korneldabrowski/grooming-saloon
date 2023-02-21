// export const dynamic = "force-dynamic";

import Landing from "./ServerComponents/Landing";
import MiniAbout from "./ServerComponents/MiniAbout";
import PageDivider from "./ServerComponents/(MiniAbout)/PageDivider";
import BestSellers from "./ServerComponents/(shop)/BestSellers";
import Reviews from "./ServerComponents/(Reviews)/Reviews";
import Header from "./ServerComponents/Header";

import Modal from "./Modal";

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
