"use client";
import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    (async () => {
      const results = await fetch("/api/list").then((response) =>
        response.json()
      );
      setRestaurants(results);
    })();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          MongoDB with <a href="https://nextjs.org">Next.js!</a> Example
        </h1>
        <br />
        <div>
          {restaurants.map((restaurant) => (
            <div key={restaurant._id} className="flex gap-x-2">
              <h2>{restaurant.name}</h2>
              <p>{restaurant.address.street}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
