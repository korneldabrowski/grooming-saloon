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
    red: "bg-error/80",
    cyan: "bg-accent/80",
    green: "bg-success/80",
    yellow: "bg-secondary/80",
    blue: "bg-primary/80",
  };

  return (
    <div className="flex flex-1 flex-col sm:flex-row sm:gap-x-4 ">
      <div className={`${colorVariants[color]} relative py-8 sm:px-12 sm:py-8`}>
        <Image
          fill
          src={image}
          alt={alt}
          sizes="(max-width: 768px) 10vw,
              (max-width: 1200px) 5vw,
              5vw"
          className="absolute"
        />
      </div>
      <h3 className="text-md sm:text-2xl">{title} </h3>
    </div>
  );
};

export default PageItem;
