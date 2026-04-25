# DK Sentinel

### Responsible Gaming Case Review System

---

DK Sentinel is a responsible-gaming analytics project centered on case review, risk-signal modeling, evidence tracking, and analyst workflow. It is structured as a regulated case-management and reporting system for sportsbook risk review.

---

## Problem

Responsible-gaming analysts need to review behavioral risk signals, inspect the evidence behind each flag, maintain case history, and apply state-specific compliance context. A useful system needs deterministic checks, auditability, human review, and clear lifecycle management.

---

## Data and workflow

The project models behavioral event data into analyst-facing risk signals such as session-duration variance, deposit velocity, loss-chasing patterns, and time-of-day clustering. It also tracks case status, analyst notes, regulatory evidence, and manager-level throughput metrics.

---

## System

DK Sentinel includes:

- dbt transformation layer for behavioral-risk signals.
- DuckDB and Snowflake-style analytical modeling.
- FastAPI backend.
- Read-only SQL execution guardrails.
- React and TypeScript case queue and case workbench.
- Analyst notes and review workflow.
- assisted review support.
- Deterministic state-level regulatory checks.
- Manager dashboard for throughput, rigor, and compliance signals.

---

## Evaluation and reliability

The strongest reliability signal is the separation between deterministic compliance checks and assisted review. The system is designed to support analyst judgment, not replace it.

This project is framed as a responsible-gaming case review system for sportsbook analytics workflows, not as work delivered for a specific company.

---

## Best fit

Analytics Engineering · Compliance Analytics · Data Product Engineering · Workflow Automation

---

## Stack

Python · dbt · DuckDB · Snowflake-style modeling · FastAPI · React · TypeScript · GitHub Actions · Vercel
