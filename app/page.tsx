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
    <main>
      <Modal />
      <NavHeader path="/">
        <>
          <button className="btn-outline btn-info btn rounded-full border-4 border-dashed p-2  font-black">
            Book a slot!
          </button>
        </>
      </NavHeader>
      <div className=" mx-auto max-w-screen-xl  bg-base-100 font-maven ">
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
