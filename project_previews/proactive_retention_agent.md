# Proactive Retention Agent

### MLOps + LLMOps Pipeline · Real Telecom Data

---

By the time a telecom analyst finds a high-risk customer,
that customer has usually already decided to leave.

**The problem:** Retention teams are reactive by default. This system flips 
that by automatically surfacing the right customers, in the right priority
order, with the context needed to act immediately.

---

**What it does:**

A high-recall XGBoost churn model (69% recall vs. 55% baseline, deliberately
tuned to minimize missed churners over false positives) runs containerized in 
Docker and served via FastAPI. Google Gemini classifies live customer complaint 
text by theme and sentiment, turning unstructured data into structured risk 
signals. A business logic layer combines churn probability with Customer 
Lifetime Value to produce a Priority Score, so retention teams always call
the highest expected-value customers first, not just the most recently flagged.

The Streamlit dashboard runs in two modes: Demo for instant exploration, 
Live Pipeline for real-time ML + LLM integration with full technical 
transparency: raw API responses, feature values, and prompt templates visible.

---

**Stack:** Python · XGBoost · FastAPI · Docker · Google Gemini API · 
Streamlit · Pandas · Scikit-learn
