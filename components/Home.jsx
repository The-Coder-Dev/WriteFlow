import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

import {
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

function Home() {
  return (
    <section className="w-full h-150 md:h-screen relative flex items-center justify-center p-4 md:pt-20 md:pb-30 bg-[#043131] ">
      <div className="w-full h-full relative flex flex-col md:flex-row  mx-auto max-w-360 rounded-2xl border border-lightgreen/30 overflow-hidden">
        <div className="w-full h-full p-7 space-y-4 md:space-y-8  ">
          <h1 className="text-3xl md:text-8xl text-white font-sora font-semibold">
            Write better blogs in minutes
          </h1>
          <p className="text-white font-inter max-w-lg">
            WriteFlow generates compelling content that resonates with your
            audience. From concept to publication, we handle the heavy lifting.
          </p>

          <div className="flex gap-3 font-inter">
            <Button asChild>
              <Link href="/">Learn More</Link>
            </Button>

            <Button asChild className={`bg-lightgreen/70 transition-colors duration-300`}>
              <Link href="/sign-in">Get Started</Link>
            </Button>
             
          </div>
        </div>

        <div className="w-full h-full bg-amber-700 relative ">
          <Image
            src="/hero.webp"
            fill={true}
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;

{
  /* <div className="w-1/2 h-full p-10 space-y-8 ">
  <h1 className="text-8xl text-white font-sora font-semibold">
    Write better blogs in minutes
  </h1>
  <p className="text-white font-inter">
    WriteFlow generates compelling content that resonates with your audience.
    From concept to publication, we handle the heavy lifting.
  </p>

  <div className="flex gap-2">
    <Button
      asChild
      className={`bg-lightgreen hover:bg-lightgreen/20 text-white font-inter font-medium`}
    >
      <Link href="/">Get Started</Link>
    </Button>

    <Button asChild className={`font-inter `}>
      <Link href="/">Get Started</Link>
    </Button>
  </div>
</div>; */
}
