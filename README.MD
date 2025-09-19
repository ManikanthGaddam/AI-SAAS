🚀 AI SaaS Platform – PERN Stack (PostgreSQL, Express, React, Node.js)

A fully functional AI SaaS Application with subscription billing, built using the PERN stack and deployed on Vercel.
This platform integrates powerful AI features such as article/blog generation, image editing, and resume analysis, along with secure authentication and premium subscription handling.

✨ Key Features

🔐 User Authentication – Secure sign-up, sign-in, and profile management with Clerk

💳 Subscription Billing – Premium subscription plans to unlock advanced AI features

🗄️ PostgreSQL Database – Serverless Postgres powered by Neon

⚡ Deployed on Vercel – Optimized for scalability and performance

🧠 AI-Powered Features

📝 Article Generator – Generate full-length articles by providing a title & desired length

📰 Blog Title Generator – Generate blog titles based on a keyword & category

🖼️ Image Generator – Create images from text prompts using AI

🪄 Background Remover – Upload an image & get a transparent background

🎯 Object Remover – Upload an image & remove specific objects with AI

📄 Resume Analyzer – Upload your resume & receive an in-depth AI-powered analysis

🛠️ Tech Stack
# Frontend
React.js (with Vite/CRA depending on setup)
Clerk Authentication
TailwindCSS / PREBUILT UI

# Backend
Node.js
Express.js
PostgreSQL (Neon – serverless database)
Other Integrations
Stripe (for subscription billing)
OpenAI / Replicate / other AI APIs for AI features

Vercel (deployment)

⚙️ Installation & Setup
1. Clone the Repository
git clone https://github.com/your-username/ai-saas-platform.git
cd ai-saas-platform

2. Install Dependencies
For both frontend & backend:
npm install

3. Setup Environment Variables
Create a .env file in the root directory with the following:

# Clerk
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key

# Database
DATABASE_URL=your_postgres_neon_connection_url

# Stripe
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret

# AI APIs
OPENAI_API_KEY=your_openai_api_key
REPLICATE_API_KEY=your_replicate_api_key

# App
NODE_ENV=development
PORT=5000

4. Run the Application

Backend:
npm run server


Frontend:
npm run dev

5. Deployment
Frontend & Backend deployed seamlessly on Vercel

Ensure environment variables are configured inside your Vercel dashboard

🚀 Deployment on Vercel

Push your repository to GitHub

Connect GitHub repo to Vercel

Add environment variables in Vercel project settings

Deploy directly with one click

🔑 Premium Workflow

User signs up via Clerk

Free users get access to limited AI features

To unlock premium AI tools, user subscribes via Stripe

Subscription status stored in PostgreSQL (Neon)

Premium users enjoy unlimited usage of AI features



📜 License

This project is licensed under the MIT License – free to use and modify.

🙌 Acknowledgements

Clerk - for authentication

Neon - for PostgreSQL hosting

Stripe - for billing

OpenAI - & Replicate for AI services

Vercel - for deployment
