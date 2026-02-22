"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import {
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

const links = [
  { title: "Home", id: 1, url: "/" },
  { title: "About", id: 2, url: "/" },
  { title: "Contact", id: 3, url: "/" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="w-full flex items-center justify-center  text-white bg-[#043131]">
      <nav className="w-full h-full mx-auto max-w-360 py-6 px-4 flex items-center justify-between border-b border-lightgreen/10">
        <Link href="/" className="font-sora">
          WriteFlow
        </Link>

        {/* Menu Links */}
        <div className=" gap-2 uppercase hidden md:flex text-sm font-inter font-medium">
          {links.map((item) => {
            return (
              <Link href={item.url} key={item.id}>
                {item.title}
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className=" gap-2 font-inter hidden md:flex ">
          {/* If user is NOT signed in */}
          <SignedOut>
            <div className="flex gap-3">
              <Button
                asChild
                className={`bg-[#151A1A]/30 hover:bg-[#151A1A] transition-colors duration-300 py-2  px-4 text-white rounded-md font-inter font-medium text-sm cursor-pointer`}
              >
                <Link href="/sign-in">Log In</Link>
              </Button>
              <Button
                asChild
                className={`bg-lightgreen/30 hover:bg-[#151A1A] transition-colors duration-300 py-2  px-4 text-white rounded-md font-inter font-medium text-sm cursor-pointer`}
              >
                <Link href="/sign-up">Get Started</Link>
              </Button>
            </div>
          </SignedOut>

          {/* If user IS signed in */}
          <SignedIn >
            <Button className="mr-3" >
              <Link href="/dashboard" >Dashboard</Link>
            </Button>
            <UserButton fallback="/dashboard"  />
          </SignedIn>
        </div>

        <div
          className="z-100 flex md:hidden curosr-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <div className="w-full absolute top-20 p-3 right-0 left-0 z-99 overflow-hidden ">
            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{ opacity: 0, y: 40 }}
              transition={{
                type: "tween",
              }}
              className="flex flex-col p-5 bg-lightgreen/20 rounded-md backdrop-blur-md gap-4 uppercase md:hidden text-sm font-inter font-medium"
            >
              {links.map((item) => {
                return (
                  <Link href={item.url} key={item.id}>
                    {item.title}
                  </Link>
                );
              })}

              <div className="flex gap-2 font-inter">
                <Button
                  asChild
                  className={`bg-lightgreen/30 w-full hover:bg-[#151A1A] transition-colors duration-300 py-2  px-4 text-white rounded-md font-inter font-medium text-sm cursor-pointer`}
                >
                  <Link href="/sign-in">Get Started</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;

// <SignedOut >
//   <SignInButton />
//   <SignUpButton>
//     <button className="bg-[#6c47ff] text-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
//       Sign Up
//     </button>
//   </SignUpButton>
// </SignedOut>
// {/* Show the user button when the user is signed in */}
// <SignedIn>
//   <UserButton />
// </SignedIn>
