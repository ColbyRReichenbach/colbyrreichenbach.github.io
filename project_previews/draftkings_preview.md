# DK Sentinel

### Responsible Gaming Intelligence System · DraftKings

---

Built for one specific job. One specific team. One specific problem.

**The problem:** Responsible gaming analysts at sportsbooks manually review 
hundreds of flagged player cases daily — without consistent tooling, 
regulatory context, or case history. DK Sentinel was designed from the ground 
up to fix that workflow, targeting DraftKings' RG Analytics team directly.

---

**What it does:**

A dbt transformation layer models raw behavioral event data into analyst-ready 
risk signals: session duration variance, deposit velocity, loss chasing 
patterns, time-of-day clustering. The FastAPI backend exposes read-only SQL 
execution with Snowflake-safe guardrails — analysts run evidence queries 
directly from the UI, no data modification risk.

The React/TypeScript frontend provides a persisted case queue with full 
lifecycle tracking (Not Started → In Progress → Submitted), a case file 
workbench with HITL analyst notes and AI-assisted review, and a 
manager-grade dashboard tracking throughput, rigor scores, and compliance 
signals. State-level regulatory logic for MA, NJ, and PA is implemented as 
deterministic SQL checks logged as auditable evidence records.

---

**Stack:** Python · dbt · DuckDB · Snowflake · FastAPI · React · TypeScript · 
OpenAI API · GitHub Actions · Vercel
