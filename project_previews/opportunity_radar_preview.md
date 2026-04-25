# Opportunity Radar

### Job, Company, and Contact Workflow System

---

I built Opportunity Radar as a workflow application for tracking jobs, companies, contacts, emails, interviews, warm connections, role requirements, and hiring signals. I wanted to treat a search pipeline as a structured information system rather than a spreadsheet.

---

## Problem

A serious job search spans jobs, companies, ATS systems, contacts, emails, interviews, follow-up timing, resume variants, and hiring-market patterns. Most of that work is fragmented across tabs, spreadsheets, inboxes, and memory. I built Opportunity Radar to consolidate it into a single workflow.

---

## Data and workflow

The system models users, applications, companies, contacts, email events, Gmail tokens, company technology profiles, role interests, ATS behaviors, interviews, notifications, resume drafts, alerts, salary signals, and networking state.

It supports workflows such as:

- tracking applications across ATS systems
- parsing jobs from Greenhouse, Lever, Workday, Ashby, and search sources
- syncing Gmail and calendar context
- identifying warm paths through contacts
- tailoring resumes and drafts
- triggering follow-up and pipeline alerts

---

## System

The repo includes:

- FastAPI backend.
- SQLAlchemy models and Alembic migrations.
- Google OAuth, Gmail sync, calendar sync, encrypted tokens, API keys, and rate limiting.
- Celery workers for polling, follow-up checks, ATS metrics, and digest jobs.
- Services for classification, parsing, company enrichment, contact enrichment, matching, resume tailoring, and salary or tech extraction.
- React and Vite dashboard with Kanban, analytics, calendar, conversations, search, network, and settings views.
- Chrome extension for LinkedIn and career-page tracking.

---

## Evaluation and reliability

I added backend tests across authentication, rate limits, Gmail sync, email intelligence, networking, resume tailoring, monitoring, alerts, salary intelligence, company visits, and ATS behavior logic.

The part I think matters most here is the system design: multi-source workflow data, background automation, enrichment services, and a user-facing operational surface.

---

## Best fit

Workflow Automation · Application Engineering · Data Engineering · Applied Data Systems · Product Engineering

---

## Stack

Python · FastAPI · SQLAlchemy · Alembic · Celery · Redis · Google APIs · React · Vite · Chrome Extension
