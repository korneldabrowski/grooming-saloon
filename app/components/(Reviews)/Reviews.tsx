"use client";
import React, { useState } from "react";
import Image from "next/image";

const ReviewsData = [
  {
    id: 1,
    name: "John Doe",
    image: "upLeftDog.png",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam odit voluptate eaque, optio modi quo fugit quod iure sunt officiis in quasi labore provident maiores veritatis error voluptas quaerat. Optio, et accusamus! Blanditiis adipisci veritatis quas? Consequuntur nisi laudantium suscipit sed fuga, fugit, ipsum molestias, sequi sit doloribus accusantium blanditiis!",
    rating: 5,
  },
  {
    id: 2,
    name: "John Doe",
    image: "mainDog.png",
    text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum placeat natus maxime sed libero ex in asperiores perspiciatis reiciendis atque nostrum temporibus adipisci, eaque neque earum, veritatis alias modi iste saepe animi officia consectetur sunt aut ad. Nesciunt accusamus, commodi doloremque minima quis fugiat reprehenderit beatae ea, odio nihil quas!",
    rating: 4,
  },
  {
    id: 3,
    name: "John Doe",
    image: "upRightDog.png",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum nulla, officiis dolor in minus numquam qui quo eaque impedit amet ipsa et ad rerum esse praesentium iusto voluptatem quidem, facere ex placeat blanditiis veniam nisi id? Pariatur perspiciatis, repellendus voluptate accusantium quas debitis corrupti, voluptatibus necessitatibus eaque sunt doloribus nobis.",
    rating: 5,
  },
];
type Review = {
  id: number;
  name: string;
  image: string;
  text: string;
  rating: number;
};

const Reviews = () => {
  const [review, setReview] = useState<Review>(ReviewsData[0]);

  const Star = ({ fill }: { fill: "orange" | "gray" }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill={fill}
      className="w-6 h-6"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );

  const makeStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star fill={i < rating ? "orange" : "gray"} />
    ));

  return (
    <section className=" mb-12  relative">
      <div className=" flex">
        <h2 className="text-end ml-auto  text-2xl sm:text-4xl font-medium">
          Valuable words from our customers
        </h2>
      </div>
      <div className="flex flex-col sm:flex-row justify-between mx-auto w-full sm:w-2/3 gap-x-10 mt-4 ">
        <div className="relative flex">
          <div className="relative h-64 w-64 bg-red-500/80 my-auto mx-auto sm:ml-auto z--50 rounded-b-full overflow-hidden">
            <img
              src={review.image}
              alt="happy dog"
              className="ml-auto z-50 absolute left-1/2  -translate-x-1/2 bottom-0 w-1/2
                "
            />
          </div>
        </div>
        <div className=" flex-1 sm:py-4">
          <div className="flex flex-col ">
            <div className="text-base relative my-12 p-6 bg-cyan-300/80 rounded-md z-50 font-exo font-light">
              {/* <div className="w-28 h-28 rounded-full bg-yellow-500/80 absolute bottom-[-50px] right-[-50px] z-[-999]"></div> */}
              <p>{review.text}</p>
            </div>
            <div className="flex">{makeStars(review.rating)}</div>
            <div className="flex gap-x-4 justify-end">
              <button
                className={`px-4 py-2 ${
                  review.id === ReviewsData[0].id
                    ? "bg-orange-600"
                    : "bg-orange-600/50"
                }`}
                onClick={() => setReview(ReviewsData[0] as Review)}
              ></button>
              <button
                className={`px-4 py-2 ${
                  review.id === ReviewsData[1].id
                    ? "bg-orange-600"
                    : "bg-orange-600/50"
                }`}
                onClick={() => setReview(ReviewsData[1])}
              ></button>
              <button
                className={`px-4 py-2 ${
                  review.id === ReviewsData[2].id
                    ? "bg-orange-600"
                    : "bg-orange-600/50"
                }`}
                onClick={() => setReview(ReviewsData[2])}
              ></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
