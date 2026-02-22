import {
  SignUp
} from "@clerk/nextjs";

import { ClerkLoaded, ClerkLoading } from "@clerk/nextjs";
import Link from "next/link";

export default function Page() {
  return (
    <section className="w-full flex justify-center items-center h-screen py-22 bg-[#043131] relative">
      <div className="w-1/2  h-full flex items-center justify-center font-inter flex-col gap-6">
        <h1 className="font-sora text-4xl text-white max-w-md text-center">
          Create your Account
        </h1>
        <ClerkLoading>
          <div className="w-100 h-120 bg-gray-300 animate-pulse rounded-md"></div>
        </ClerkLoading>

        <ClerkLoaded>
          <SignUp 
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
            fallbackRedirectUrl="/dashboard"
          />
        </ClerkLoaded>
      </div>
    </section>
  );
}
