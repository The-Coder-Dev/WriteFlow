import React from "react";
import { Badge } from "@/components/ui/badge";
import { Zap } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const card = [
  {
    title: "SEO Optimized from the start",
    description:
      "Every piece ranks better, drives traffic, and reaches the right readers",
    image: "/img1.webp",
    imageAlt: "Image 1",
    linkText: "Explore",
    linkUrl: "/",
    id: 1,
  },
  {
    title: "Your Voice, Amplified",
    description:
      "Maintain your unique style while AI handles the research and structure",
    image: "/img2.webp",
    imageAlt: "Image 2",
    linkText: "Explore",
    linkUrl: "/",
    id: 2,
  },
  {
    title: "Endless topic variations",
    description:
      "Generate multiple angles on any subject to keep your content fresh",
    image: "/img3.webp",
    imageAlt: "Image 3",
    linkText: "Explore",
    linkUrl: "/",
    id: 3,
  },
];

function Feature() {
  return (
    <section className="w-full h-fit p-5 bg-[#054241] flex items-center justify-center md:py-20">
      <div className="w-full h-full mx-auto max-w-360 flex flex-col space-y-4 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <Badge
            variant="Default"
            className={`bg-[#043131]/75  flex items-center justify-center font-inter uppercase `}
          >
            <span className="text-lightgreen">Features</span>
            <Zap fill="#0EA5A4" stroke="none" size={1} data-icon="inline-end" />
          </Badge>
          <h1 className="text-white font-sora text-2xl sm:text-4xl font-medium text-center">
            Lighting Fast Generation
          </h1>
          <p className="font-inter text-white text-center">
            Your ideas become polished articles in seconds, not hours
          </p>
        </div>

        <div className="w-full h-full grid md:grid-cols-3 p-1 gap-4">
          {card.map((items) => {
            return (
              <FeatureCard
                key={items.id}
                Title={items.title}
                ImageUrl={items.image}
                Description={items.description}
                ImageAlt={items.imageAlt}
                linkText={items.linkText}
                linkUrl={items.linkUrl}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Feature;
