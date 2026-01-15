# Proactive Retention Agent

## Project Overview
A state-of-the-art **MLOps & LLMOps** pipeline that automates customer retention. It doesn't just predict churn; it explains *why* and prioritizes *who* to call using Generative AI.

## Key Highlights
*   **End-to-End Pipeline:** From raw data ingestion to a deployed API, demonstrating full-stack Data Science capabilities.
*   **XGBoost Service:** A high-recall Churn Prediction model served via **FastAPI** in a **Docker** container.
*   **Generative AI Integration:** Uses **Google Gemini API** to analyze customer complaints and sentiment, generating natural-language summaries for retention agents.
*   **Business Logic Layer:** Calculates a **Priority Score** (CLTV × Churn Probability) to ensure agents focus on the highest-value saves first.
*   **Interactive Dashboard:** A Streamlit frontend for non-technical stakeholders to view the "Hot List" of at-risk customers.

## Tech Stack
*   **Python**: Core language.
*   **XGBoost**: Predictive modeling.
*   **Google Gemini API**: Large Language Model (LLM) for text analysis.
*   **Docker**: Containerization for reproducibility.
*   **FastAPI**: Model serving.
*   **Streamlit**: User interface.
