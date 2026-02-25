import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

const footerLinks1 = [
  { Title: "Home", url: "/", id: 1 },
  { Title: "About Us", url: "/", id: 2 },
  { Title: "Features", url: "/", id: 3 },
  { Title: "Blog", url: "/", id: 4 },
  { Title: "Contact us", url: "/", id: 5 },
];
const footerLinks2 = [
  { Title: "How it works", url: "/", id: 1 },
  { Title: "Resources", url: "/", id: 2 },
  { Title: "Support", url: "/", id: 3 },
  { Title: "Privacy", url: "/", id: 4 },
  { Title: "Terms", url: "/", id: 5 },
];

function Footer() {
  return (
    <footer className="w-full h-100">
      <section className="w-full h-full mx-auto max-w-360 flex flex-col gap-6 p-8">
        <div className="w-full flex flex-col md:flex-row gap-4 pt-10">
          <div className="w-full h-full space-y-4">
            <h1 className="text-5xl md:text-7xl font-sora font-medium">
              Build better content faster
            </h1>
            <p className="font-inter max-w-md">
              Join thousands of writers who uses WriteFlow to create engaging
              blog posts daily
            </p>
            <div className="flex gap-3">
              <Button asChild className={`bg-lightgreen`}>
                <Link href="/sign-in">Get Started</Link>
              </Button>
              <Button asChild>
                <Link href="/">Learn More</Link>
              </Button>
            </div>
          </div>

          <div className="w-full flex items-start pt-5 md:justify-end gap-16">
            <div className="flex flex-col font-medium font-inter space-y-1">
              {footerLinks1.map((item) => {
                return (
                  <Link href={item.url} key={item.id}>
                    {item.Title}
                  </Link>
                );
              })}
            </div>
            <div className="flex flex-col font-medium font-inter space-y-1">
              {footerLinks2.map((item) => {
                return (
                  <Link href={item.url} key={item.id}>
                    {item.Title}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-between py-8 border-t">
          <h2 className="font-sora text-xl">WriteFlow</h2>
          <p className="font-inter">© 2026 WriteFlow. All rights reserved</p>
        </div>
      </section>
      <div className="w-full py-5 items-center justify-center flex">
        <Link  href="https://github.com/The-Coder-Dev">Build with 💗 by CoderDev</Link>
      </div>
    </footer>
  );
}

export default Footer;
