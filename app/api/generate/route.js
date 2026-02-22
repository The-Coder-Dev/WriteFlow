import OpenAI from "openai";
import { NextResponse } from "next/server";

const client = new OpenAI({
  apiKey: process.env.GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
});

export async function POST(req) {
  try {
    const { title, tone } = await req.json();

    const completion = await client.chat.completions.create({
      model: "openai/gpt-oss-20b",
      messages: [
        {
          role: "system",
          content: "You are a professional blog writer.",
        },
        {
          role: "user",
          content: `Write a ${tone} blog about: ${title}`,
        },
      ],
    });

    return NextResponse.json({
      content: completion.choices[0].message.content,
    });

  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}