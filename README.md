# WriteFlow – AI Blog Generator
WriteFlow is a modern AI-powered blog generator that helps users create professional blog content instantly.
Built with Next.js, Clerk authentication, and Groq AI API.

# 🚀 Features
🔐 Secure authentication with Clerk

🧠 AI-powered blog generation

🎨 Clean and responsive dashboard UI

📝 Select blog tone (Professional, Casual, etc.)

⚡ Fast responses using Groq LLM

🛡️ Protected dashboard routes

# Tech Stack

1. Frontend: Next.js (App Router), React

2. Authentication: Clerk

3. AI API: Groq (OpenAI GPT-OSS 20B)

4. Styling: Tailwind CSS

5. Deployment Ready: Vercel compatible

# Run Locally

// Install dependencies
pnpm install

// Start development server
pnpm dev

## Open: 
http://localhost:3000

# Route Protection
The /dashboard route is protected using Clerk middleware.
Users must sign in to access the blog generator.
