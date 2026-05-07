# AiBS / ABS Observatory

### Baseball Analytics & AI Data Product

AiBS is a warehouse-backed baseball analytics platform for Automated Ball-Strike challenge analysis, game/team/umpire context, challenge value, leaderboards, reports, editorial/community features, and AI-assisted interpretation.

## Problem

ABS challenge events create analytical signals around challenge timing, overturn probability, team and umpire behavior, pitch state, and game consequence. Those signals are hard to inspect from isolated event feeds or static box scores.

## System

- Python ETL.
- PostgreSQL schemas and mart views.
- Next.js/React/TypeScript product surfaces.
- Polling, backfill, validation, sample data, and warehouse-serving reconciliation scripts.
- Challenge classification, pitch timelines, modeled overturn probability, daily team/umpire summaries, expectancy baselines, decision value, impact metrics, and editorial summaries.
- AI-assisted interpretation with bounded tools, policy checks, ownership controls, conversation persistence, sanitized tool results, rate limits, usage/cost logging, safety events, and admin review surfaces.

## Stack

Python, PostgreSQL, SQL, Next.js, React, TypeScript, ETL, OpenAI API, Vitest, Playwright.
