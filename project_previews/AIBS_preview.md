# AiBS

### Real-Time Sports Analytics Platform

---

I built AiBS as a real-time sports analytics application around MLB ABS challenge data. The goal was to turn live challenge events into normalized entities, reporting views, article outputs, and interactive reporting for game, team, and umpire analysis.

---

## Problem

ABS challenge events create a new analytical layer: challenge timing, overturn patterns, umpire variance, team behavior, location context, and game-state consequence. Those signals are hard to reason about from isolated events or static box scores. I built AiBS to organize them into a reporting system someone could actually use.

---

## Data and workflow

AiBS works with ABS challenge events, game metadata, enrichment data, standings snapshots, and warehouse and serving tables.

The workflow is:

```text
live events
-> normalized entities
-> analytical views
-> game, team, and umpire reporting
-> editorial output and product UX
-> text summaries where useful
```

---

## System

The project includes:

- Next.js, React, and TypeScript application surfaces.
- PostgreSQL serving and product database.
- Python ETL for ingestion and enrichment.
- Warehouse-to-serving publishing and reconciliation patterns.
- SQL-first analytical views for reporting.
- text summaries tied to baseball context.
- Clerk authentication.
- Publishing, commenting, moderation, and public-facing content features.

---

## Evaluation and reliability

I added Vitest, Playwright, Python unittest coverage, service health checks, database smoke checks, warehouse-serving reconciliation scripts, release smoke tests, and telemetry.

What I would want someone to take away from this project is the system pattern: live events, normalized data, reporting views, user-facing application surfaces, and quality checks across the full path.

---

## Best fit

Analytics Engineering · Real-Time Data Systems · Application Engineering · Data Product Engineering

---

## Stack

Next.js · React · TypeScript · PostgreSQL · Python ETL · Clerk · Vitest · Playwright
