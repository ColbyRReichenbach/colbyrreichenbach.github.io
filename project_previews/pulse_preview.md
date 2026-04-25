# Pulse Tracker

### Multi-Tenant Coaching Platform

---

I built Pulse Tracker as a coaching application for hybrid athletes. What I wanted to show here was the product and systems work required to make a generated-response feature usable in practice: authenticated context, user-level data isolation, rate limiting, safety checks, telemetry, and tested application behavior.

---

## Problem

A coaching application cannot just return a generated answer. It has to know which user it is serving, access the right context, protect that user's data, constrain unsafe or irrelevant outputs, and stay observable when something breaks.

---

## Data and workflow

Pulse works with user-entered workout logs, bodyweight data, benchmarks, preferences, profile settings, training history, and coaching requests. The workflow connects workout tracking, performance analytics, and user-specific coaching.

---

## System

Pulse includes:

- Next.js and TypeScript product interface.
- Supabase authentication and Row Level Security patterns.
- generated response workflow.
- Context routing and response handling.
- Upstash Redis rate limiting.
- Security-aware request handling.
- Sentry monitoring and Vercel observability.
- Workout, analytics, profile, settings, onboarding, and admin surfaces.

---

## Evaluation and reliability

I added Vitest unit and integration tests, Playwright end-to-end tests, request and security tests, auth checks, health checks, validation tests, middleware tests, and query analytics.

The part I care most about in this project is the application infrastructure around the generated response: authentication, context, safety, observability, and test coverage.

---

## Best fit

Application Engineering · Full-Stack Product · Product Analytics · User Systems

---

## Stack

Next.js · TypeScript · Supabase · Upstash Redis · Sentry · Vitest · Playwright · Vercel
