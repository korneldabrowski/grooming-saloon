import "./globals.css";

import { Exo_2 } from "@next/font/google";
import { Maven_Pro } from "@next/font/google";
import Footer from "./components/Footer";

const exo_2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="bumblebee"
      className={`${exo_2.variable} font-sans ${maven_pro.variable} scrollbarClass  `}
    >
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body className="p-0">
        {children}

        <Footer />
      </body>
    </html>
  );
}
