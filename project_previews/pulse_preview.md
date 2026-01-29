
# Pulse Tracker: AI-Native Training Ecosystem

Pulse Tracker is a production-hardened athletic training platform powered by a custom fine-tuned RAG architecture. It serves as a case study in building reliable, context-aware AI agents that can safely manage physical training protocols while adhering to strict privacy and safety guardrails.

![Pulse Dashboard](static/images/pulse_preview.png)

## Engineering Highlights

### 🛡️ Production-Grade AI Safety & Evals
Built a robust evaluation pipeline using **Promptfoo** to continuously test model behavior against a suite of adversarial techniques and regression cases.
*   **Automated Red-Teaming**: CI/CD integration tests for prompt injection attempts (DAN, role-play overrides) and PII leakage.
*   **Deterministic Guardrails**: Implemented regex-based input hygiene and streaming response validation to intercept forbidden terms before they reach the client.
*   **Safety-First Reasoning**: Custom instruction sets force the model to identify injury signals (e.g., "sharp pain") and strictly route them to a "STOP" protocol rather than offering medical advice.

### 🧠 Context-Aware RAG Architecture
Moved beyond simple vector search by implementing a semantic **Context Router** that builds dynamic system prompts based on user intent.
*   **Intent Classification**: Stateless classifier determines if a query is 'Logistics', 'Injury', or 'Analysis' before retrieving context.
*   **Hybrid Context Injection**: Dynamically assembles XML-structured system prompts (`<training_knowledge>`, `<user_state>`) to prevent context window overflow while maintaining awareness of the 52-week meso-cycle.
*   **Stateful Persona Switching**: API-driven switching between "Analytic" (dry, metric-focused) and "Coach" (motivational) personas based on user preference metadata.

### 🔒 Privacy-First Tool Use
Architected a granular permission layer for Function Calling (e.g., `getRecentLogs`, `getBiometrics`).
*   **Privacy Mode Architecture**: Hard-coded logic disables the `tools` definition object passed to the LLM if a user's privacy setting is enabled, preventing the model from even hallucinating data access.
*   **Rate-Limited Inference**: Redis-backed sliding window rate limiting prevents API abuse and cost overrun at the edge.

## Tech Stack
*   **AI/LLM**: GPT-4o-mini (Vortex Optimized), Vercel AI SDK (StreamText), Promptfoo
*   **Backend**: Next.js 16 App Router, Supabase (RLS), Edge Functions
*   **Infrastructure**: Upstash Redis (Rate Limiting), Sentry (Observability)
