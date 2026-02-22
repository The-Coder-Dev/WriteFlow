import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";

function CtaSection() {
  return (
    <section className="w-full h-fit relative">
      <div className="w-full h-full mx-auto max-w-360 p-8">
        <div className="w-full h-fit pt-15 pb-6 flex flex-col gap-4 items-center justify-center">
          <p className="font-inter ">Preview</p>
          <p className="text-center font-sora text-3xl max-w-3xl font-medium">
            See your article take shape in real time. WriteFlow transforms raw
            ideas into finished pieces you can publish immediately.
          </p>
          <Button
            className={`font-inter bg-lightgreen hover:bg-black rounded-sm`}
            asChild
          >
            <Link href="/">Try Now</Link>
          </Button>
        </div>

        <div className="w-full h-137.5 rounded-xl relative overflow-hidden">
          <Image
            alt="Image 3"
            src="/img3.webp"
            fill="true"
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
