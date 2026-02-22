"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";

function page() {
  const [title, setTitle] = useState("");
  const [tone, setTone] = useState("Professional");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const handleGenerate = async () => {
    setLoading(true);
    setResult("");

    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, tone }),
    });

    const data = await res.json();
    setResult(data.content);
    setLoading(false);
  };

  return (
    <section className="w-full min-h-screen bg-[#043131] ">
      <div className="mx-auto max-w-360 w-full h-full py-9 space-y-10">
        <div className="">
          <h1 className="text-white font-sora text-4xl">Welcome User 😊</h1>
        </div>

        <div className="bg-lightgreen/20 rounded-sm w-full h-full space-y-3 p-6 font-inter">
          <input
            type="text"
            className=" text-white w-full bg-lightgreen/30 rounded-sm p-5"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="text-white bg-lightgreen/30 rounded-sm w-full p-5 "
            value={tone}
            onChange={(e) => setTone(e.target.value)}
          >
            <option className="text-black" value="Professional">Professional</option>
            <option className="text-black" value="Casual">Casual</option>
            <option className="text-black" value="Funny">Funny</option>
          </select>

          <Button onClick={handleGenerate} className="w-full py-8 cursor-pointer bg-[#171717]">
            {loading ? "Generating..." : "Generate"}
          </Button>

          {result && (
            <div className="mt-6 whitespace-pre-wrap bg-white text-black p-4 rounded">
              {result}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default page;
