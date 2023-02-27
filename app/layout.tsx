import "./globals.css";

import { Exo_2 } from "@next/font/google";
import { Maven_Pro } from "@next/font/google";
import Footer from "app/components/Layout/Footer";

const exo_2 = Exo_2({
  subsets: ["latin"],
  variable: "--font-exo",
});

const maven_pro = Maven_Pro({
  subsets: ["latin"],
  variable: "--font-maven",
});

// Static metadata
export const metadata = {
  title: "Barktiful Grooming!",
  description: "A range of products and services for all of your pets needs",
  keywords: [
    "website",
    "home page",
    "example",
    "landing page",
    "prototype",
    "dog",
    "grooming",
    "services",
    "products",
    "shop",
    "pets",
    "pet",
    "cat",
    "cats",
    "dog",
    "dogs",
    "bird",
    "birds",
    "fish",
    "fishes",
    "reptile",
    "reptiles",
    "small animals",
    "small animal",
    "rabbit",
    "rabbits",
    "hamster",
    "hamsters",
    "guinea pig",
    "guinea pigs",
    "ferret",
    "ferrets",
    "chinchilla",
    "chinchillas",
    "mice",
    "mouse",
    "rat",
    "rats",
    "gerbil",
    "gerbils",
    "hedgehog",
    "hedgehogs",
    "sugar glider",
    "sugar gliders",
    "bearded dragon",
    "bearded dragons",
    "lizard",
    "lizards",
    "snake",
    "snakes",
    "turtle",
    "turtles",
    "fish",
    "fishes",
    "goldfish",
    "goldfishes",
    "koi",
    "koi fish",
    "koi fishes",
    "tropical fish",
    "tropical fishes",
    "aquarium",
    "aquariums",
    "fish tank",
    "fish tanks",
    "fish bowl",
    "fish bowls",
  ],
  openGraph: {
    title: "Barktiful Grooming!",
    description: "A range of products and services for all of your pets needs",
    url: "https://www.example.com/",
    siteName: "Barktiful Grooming",
    images: [
      {
        url: "https://www.example.com/images/homepage.jpg",
        width: 1200,
        height: 630,
        alt: "A beautiful image of my homepage",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="bumblebee"
      className={`${exo_2.variable} font-sans ${maven_pro.variable} scrollbarClass   `}
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
