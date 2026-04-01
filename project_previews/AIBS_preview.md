AiBS
Baseball Analytics Intelligence Platform · Live & Deployed

Most sports products visualize games. This one models the decision layer around challenged ball-strike calls.

The problem: MLB’s ABS challenge era created a new analytics surface — challenge timing, overturn patterns, umpire volatility, and game-state consequence — but there are very few products built to structure that information into something analyzable. AiBS turns ABS events into a full analytical system rather than a one-off dashboard.

What it is:

A full-stack baseball analytics platform built around MLB ABS challenge data, spanning live game pages, team and umpire intelligence, bounded AI-assisted interpretation, and editorial workflows. The product supports both fan and org viewing modes, changing the framing and analytical emphasis without changing the underlying facts.

Under the hood, AiBS uses PostgreSQL as the serving and product database, Python ETL for ingestion and enrichment, and a SQL-first application pattern to power server-rendered analytical views. The product currently includes pregame/live/final game hubs, challenge timelines, strike-zone drilldowns, leaderboard and detail-page analytics, baseball-scoped AI workflows with authenticated bounded tools and telemetry, and editorial/community infrastructure including publishing, comments, moderation, and public profiles. Testing includes Vitest, Playwright, and Python unittest coverage. 

Stack: Next.js 16 · React 19 · TypeScript · PostgreSQL · Python ETL · OpenAI · Clerk · Vitest · Playwright
