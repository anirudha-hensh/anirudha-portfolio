# Anirudha Hensh — React + AI Portfolio

A recruiter-oriented React portfolio rebuilt as a polished, visual, modern site.

## Stack

- React + Vite
- Framer Motion for motion/transition effects
- Lucide React icons
- Serverless `/api/chat` function for an AI portfolio assistant
- OpenAI Responses API when a server-side API key is configured
- Local demo fallback when no API key is configured

## What is inside

- High-contrast hero with animated orbital scene
- Purple / cyan / pink visual system
- Dark / light mode
- Responsive mobile nav
- Project filtering
- Project case-note modal
- Scroll reveal animations
- AI Portfolio Copilot drawer
- Education and contact sections
- Resume download
- GitHub / LinkedIn links

## Run locally

Requires Node.js LTS.

```bash
npm install
npm run dev
```

For the AI endpoint locally, the easiest approach is to deploy with Vercel or run with the Vercel CLI.

## AI setup

Create a `.env.local` file (do not commit it):

```env
OPENAI_API_KEY=your_real_key
OPENAI_MODEL=gpt-6-luna
```

The API key is read by `api/chat.js` on the server side. Do NOT rename it to `VITE_OPENAI_API_KEY`, because Vite client variables are bundled for the browser.

The portfolio remains usable without the key: `/api/chat` returns a small verified-profile demo fallback.

## Personalize before publishing

1. Replace `your-email@example.com` in `src/main.jsx`.
2. Add your actual PDF at:
   `public/resume/Anirudha_Hensh_Resume.pdf`
3. Replace the project GitHub profile links with individual repository URLs when available.
4. Add project screenshots later by replacing the project visual blocks if desired.

## Deployment

### Vercel (recommended for AI mode)

1. Import the repository into Vercel.
2. Add `OPENAI_API_KEY` in Project Settings → Environment Variables.
3. Optionally add `OPENAI_MODEL`.
4. Deploy.

### Static hosting

The frontend can still be built with `npm run build`, but the AI assistant will fall back to demo mode unless `/api/chat` is deployed somewhere that supports serverless functions.

## Notes

The portfolio deliberately avoids invented work experience or numerical project outcomes. Replace placeholders only with information you can verify.
