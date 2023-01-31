import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  alt: string;
  image: string;
  color: string;
};

const PageItem = ({ title, alt, image, color }: Props) => {
  const colorVariants: Record<string, string> = {
    red: "bg-red-500/50",
    cyan: "bg-cyan-500/50",
    green: "bg-green-500/50",
    yellow: "bg-yellow-500/50",
    blue: "bg-blue-500/50",
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-x-4 flex-1 ">
      <div className={`${colorVariants[color]} py-8 sm:px-12 sm:py-8 relative`}>
        <Image fill src={image} alt={alt} className="absolute" />
      </div>
      <h3 className="sm:text-2xl text-md">{title} </h3>
    </div>
  );
};

export default PageItem;
