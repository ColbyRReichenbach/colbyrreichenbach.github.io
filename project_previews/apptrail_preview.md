# AppTrail

### AI Job Search Operating System

AppTrail is a full-stack job-search workflow product that centralizes applications, jobs, contacts, emails, resumes, interviews, company intelligence, research signals, and AI copilot workflows. The audited codebase includes a FastAPI backend, React/Vite dashboard, and Chrome Manifest V3 extension.

## Problem

A serious job search is not one spreadsheet. It spans ATS pages, Gmail, company research, warm contacts, interviews, resume variants, follow-up timing, and repeated browser workflows. AppTrail treats that process as a structured operating system.

## System

- FastAPI backend with async SQLAlchemy and Alembic migrations.
- PostgreSQL data model covering applications, contacts, emails, interviews, jobs, source intelligence, research radar, copilot, and AI governance tables.
- Redis/Celery scheduled jobs for Gmail polling, follow-up checks, ATS metrics, weekly digests, research radar dispatch, heartbeat, and source verification.
- React/Vite dashboard for jobs, analytics, conversations, network, calendar, radar, settings, classifier audit, extraction reports, AI ops, and source intelligence.
- Chrome Manifest V3 extension for job-board extraction and career-page tracking.
- AI services for classification, resume parsing/tailoring, research briefs, search planning, evidence extraction, report writing, verification, and copilot behavior.

## Stack

Python, FastAPI, SQLAlchemy, Alembic, PostgreSQL, Redis, Celery, React, Vite, TypeScript, Chrome MV3, Google APIs, OpenAI, LangGraph, Playwright, Pytest.
