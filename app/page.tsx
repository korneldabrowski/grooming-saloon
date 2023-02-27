// export const dynamic = "force-dynamic";

import Landing from "app/components/LandingPage/(Hero)/Landing";
import MiniAbout from "app/components/LandingPage/(MiniAbout)/MiniAbout";
import PageDivider from "app/components/LandingPage/(MiniAbout)/PageDivider";
import BestSellers from "app/components/LandingPage/(shop)/BestSellers";
import Reviews from "app/components/LandingPage/(Reviews)/Reviews";

import Modal from "./components/Misc/Modal";
import NavHeader from "./components/Layout/NavHeader";

export default function Home() {
  return (
    <main className="">
      <Modal />
      <NavHeader path="/">
        <button className="btn-outline btn-info btn border-4  border-dashed  text-sm   sm:rounded-full  sm:btn-wide">
          Booking
        </button>
      </NavHeader>
      <div className=" mx-auto max-w-screen-xl  bg-base-100 px-2 font-maven">
        <Landing />

        <MiniAbout />

        <PageDivider />

        {/* Below ts exception is required as TypeScript doesn't support async Server Components yet */}
        {/* @ts-expect-error Server Component */}
        <BestSellers />

        <Reviews />
      </div>
    </main>
  );
}
