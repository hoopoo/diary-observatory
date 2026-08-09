# Diary Observatory

日記に残った人、店、街、身体、時代を、現在から読み直す。

> Diaries do not preserve only writers.  
> They preserve the worlds that surrounded them.

SHIRO & Co. observation project.

## Principle

**Not generation, but excavation.**  
生成ではなく、発掘。

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS v4
- Local TS data + MDX articles (Supabase-ready separation)

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` — Home
- `/writers`, `/writers/[slug]`
- `/diaries`, `/diaries/[slug]`
- `/entries/[date-or-id]`
- `/observations`, `/observations/[slug]`
- `/entities`, `/entities/[slug]`
- `/compare`
- `/about`

## Content

- Structured data: `data/`
- Observation MDX: `content/observations/`
- Types: `lib/types.ts`

Replace `content/observations/heisei-dancho-tei-nichijo.mdx` when the finished manuscript is ready.

## Editorial rules

- No invented quotations or sources
- Unverified current status → `unknown`
- No long diary reproductions
- Always show sources / last verified / source needed
- Separate Fact / Observation / Interpretation
