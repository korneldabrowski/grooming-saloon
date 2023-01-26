import Image from "next/image";

import Landing from "./components/Landing";
import MiniAbout from "./components/MiniAbout";
import PageDivider from "./components/(MiniAbout)/PageDivider";

export default function Home() {
  return (
    <main className="font-maven  ">
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
    </main>
  );
}
