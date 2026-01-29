# Pulse Tracker: AI-Native Training Ecosystem

## Project Overview
Pulse Tracker is a production-hardened athletic training platform powered by a custom fine-tuned RAG architecture. It serves as a case study in building reliable, context-aware AI agents that can safely manage physical training protocols while adhering to strict privacy and safety guardrails.

![Pulse Dashboard](static/images/pulse_preview.png)

## Key Highlights
*   **Production-Grade AI Safety & Evals:** Built a robust evaluation pipeline using **Promptfoo** to continuously test model behavior against adversarial techniques. Implemented CI/CD integration tests for prompt injection and deterministic regex-based guardrails to intercept forbidden terms.
*   **Context-Aware RAG Architecture:** Implemented a semantic **Context Router** that builds dynamic XML system prompts based on user intent (Logistics vs. Injury vs. Analysis). Used stateful persona switching to toggle between "Analytic" and "Coach" modes based on user metadata.
*   **Privacy-First Tool Use:** Architected a granular permission layer for Function Calling. Hard-coded logic disables tool definitions for "Private" users, preventing the model from hallucinating data access, and enforced Redis-backed rate limiting at the edge.

## Tech Stack
*   **AI/LLM**: GPT-4o-mini (Vortex Optimized), Vercel AI SDK (StreamText), Promptfoo
*   **Backend**: Next.js 16 App Router, Supabase (RLS), Edge Functions
*   **Infrastructure**: Upstash Redis (Rate Limiting), Sentry (Observability)
