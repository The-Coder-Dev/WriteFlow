import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

function FeatureCard({
  ImageUrl,
  Title,
  ImageAlt,
  Description,
  linkText,
  linkUrl,
}) {
  return (
    <div className="w-full h-[400px] md:h-[600px] group bg-[#043131] rounded-2xl p-7 flex justify-end gap-5 flex-col relative overflow-hidden">
      <div className="">
        <div className="w-full h-full absolute inset-0 z-9 bg-black/55 "></div>
        <Image
          alt={ImageAlt}
          src={ImageUrl}
          fill="true"
          objectFit="cover"
          className="transform group-hover:scale-105 duration-300"
        />
      </div>
      <div className="z-20 space-y-4 max-w-xs">
        <h2 className="text-white font-sora font-medium text-4xl">{Title}</h2>
        <p className="text-white font-inter text-md">{Description}</p>
        <Link
          href={linkUrl}
          className="flex gap-1 items-center font-inter text-white"
        >
          {linkText} <ChevronRight size={17} />
        </Link>
      </div>
    </div>
  );
}

export default FeatureCard;
