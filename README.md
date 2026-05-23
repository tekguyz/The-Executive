# The Executive Image — Ceramic Coating & Mobile Detailing

Stuart, FL's premier luxury surface care specialized in automotive, marine, and aeronautical ceramic coatings and elite detailing.

## Direct Deployment Guide to Vercel

Follow these steps to deploy this premium Next.js 15 application to production:

1. **Clone the Repository**
   ```bash
   git clone <your-repository-url>
   cd the-executive-image
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a local configuration file `.env.local` based on `.env.example`:
   ```bash
   cp .env.example .env.local
   ```
   Open `.env.local` and configure your API keys and production hostnames:
   - `NEXT_PUBLIC_SITE_URL=https://theexecutiveimage.com`
   - `CONTACT_EMAIL=info@theexecutiveimage.com`
   - `RESEND_API_KEY=your_resend_api_key_here`

4. **Run Locally for Testing**
   Launch the development server to test interactions locally:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the live dashboard.

5. **Commit & Push to Github**
   ```bash
   git add .
   git commit -m "feat: complete final luxury production release"
   git push origin main
   ```

6. **Deploy to Vercel**
   - Head over to the [Vercel Dashboard](https://vercel.com).
   - Click **Add New...** and select **Project**.
   - Import your GitHub repository.
   - Expand the **Environment Variables** group and input:
     - `NEXT_PUBLIC_SITE_URL` &rarr; `https://theexecutiveimage.com`
     - `CONTACT_EMAIL` &rarr; `info@theexecutiveimage.com`
     - `RESEND_API_KEY` &rarr; *(Your secret key generated in your Resend account)*
   - Click **Deploy**. Vercel will build and publish your standalone static-optimized application container in 1-2 minutes.

## Core Features & Infrastructure

- **Luxury Theme & Styling:** Engineered with tailored typography pairings, high-contrast gold/charcoal accents, and dynamic hardware shadows.
- **Micro-interactions:** Staggered section fade-in triggers, gold shimmering button scans, and fluid scroll tracking.
- **Zod-backed Leads Catch:** A strict server-side validation pipeline with instant customer receipt replies and company push notifications using Resend.
- **Search Engine Optimizations:** Dynamic structured LocalBusiness LD+JSON schema tags, pre-loaded layout headers, and indexable sitemaps.
