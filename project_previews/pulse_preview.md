# Pulse Tracker

### Multi-Tenant AI Coaching SaaS · Live & Deployed

---

Most "AI apps" are wrappers around an API call.
This one is a production system.

**The problem:** Building a real AI application means solving problems that 
have nothing to do with the model: rate limiting, user data isolation,
safety evaluation, error monitoring, and a test suite that actually runs. 
Pulse solves all of it, and it's live.

---

**What it is:**

A multi-tenant training and AI coaching platform built entirely solo using 
AI-assisted development, compressing what normally requires a frontend
engineer, backend engineer, security engineer, and AI engineer into a single
production deployment.

Supabase Row Level Security enforces absolute data isolation between users 
at the database level. Upstash Redis rate-limits AI endpoints. The coaching 
assistant (ECHO-P1) classifies user intent before routing to specialized 
response contexts, with PII redaction, prompt injection detection, and 
immutable audit logging on every interaction. LLM safety is evaluated with 
Promptfoo test suites, not just vibes-checked. Vitest unit tests, Playwright 
e2e tests, Sentry monitoring, and GitHub Actions CI round out the production 
hardening.

---

**Stack:** Next.js 16 · TypeScript · Supabase · OpenAI GPT-4o-mini · 
Upstash Redis · Promptfoo · Playwright · Vitest · Sentry · Vercel
