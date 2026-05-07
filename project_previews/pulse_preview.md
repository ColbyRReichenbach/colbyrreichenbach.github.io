# Pulse

### Guarded AI Fitness Coach & Training Analytics App

Pulse is a Next.js/Supabase training platform with workout logging, biometrics, PR tracking, phase-specific analytics, user-data export, and a guarded AI coach named ECHO-P1.

## Problem

An AI coaching product cannot just return a generated answer. It needs user context, validation, data boundaries, rate limits, safety handling, and observability around the response.

## System

- Next.js and TypeScript product surfaces for dashboard, workouts, analytics, profile, settings, onboarding, admin AI coach, and guest demo paths.
- Supabase-backed auth and data flows.
- AI chat route with request validation, prompt-injection detection, moderation, sensitive-topic handling, semantic fitness intent routing, privacy mode, conditional user-data tools, streaming response handling, output validation, token/cost logging, and AI interaction records.
- Vitest and Playwright coverage for auth, validation, middleware, guardrails, chat behavior, and workout flows.

## Stack

Next.js, TypeScript, Supabase, OpenAI API, Zod, Upstash Redis, Sentry, Vitest, Playwright, Vercel.
