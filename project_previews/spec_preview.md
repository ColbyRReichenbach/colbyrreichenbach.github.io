# S.P.E.C. Valuation Engine

## Project Overview
**Spatial · Predictive · Explainable · Conversational**

A full-stack **Automated Valuation Model (AVM)** for residential real estate. This engine doesn't just predict price; it explains *why* using SHAP values and provides investment context via a Generative AI "Oracle."

## Key Highlights
*   **XGBoost & SHAP**: Combines high-performance gradient boosting with **TreeExplainer** to provide granular, feature-level pricing transparency (e.g., "+$50k due to renovation").
*   **Renovation Simulator**: An interactive "What-If" tool that allows users to modify property attributes (e.g., add a bathroom) and see the instant ROI impact.
*   **Geospatial Intelligence**: Visualizes undervaluation/overvaluation clusters on an interactive map using **Pydeck**.
*   **Generative AI Investment Memos**: Integrated **GPT-4o-mini** to write human-like investment thesis memos based on the model's numerical outputs.

## Tech Stack
*   **Python**: Core application logic.
*   **XGBoost**: Predictive modeling.
*   **SHAP**: Model interpretability and feature attribution.
*   **OpenAI API**: Generative AI for text analysis.
*   **Streamlit**: Interactive web dashboard.
*   **Pydeck/Plotly**: Advanced geospatial and statistical data visualization.
*   **Parquet/SQLite**: Hybrid data storage for performance.
