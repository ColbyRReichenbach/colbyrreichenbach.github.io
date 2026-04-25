# SPEC-NYC

### Automated Valuation Workflow

---

I built SPEC-NYC as a production-style valuation workflow on NYC property transaction data. I wanted to focus on the parts of modeling work that matter after training: validation, explainability, segment-level scorecards, promotion checks, and release governance.

---

## Problem

Valuation work cannot stop at a single aggregate metric. I wanted a workflow that shows where the model performs well, where it fails, what changed between versions, and what evidence supports promotion or rollback.

---

## Data and workflow

I used NYC Open Data property transaction records and derived feature and segment datasets. The workflow moves from ingestion and validation to model training, scorecard generation, governance review, and release readiness.

---

## System

SPEC-NYC includes:

- Raw data ingestion with retries and caching patterns.
- Pandera data contracts.
- XGBoost training with Optuna tuning.
- MLflow experiment tracking.
- SHAP explainability artifacts.
- Champion-challenger comparison.
- Human approval gates for promotion.
- Segment-level scorecards.
- FastAPI and Streamlit inspection surfaces.

---

## Evaluation and reliability

I evaluate model performance with PPE10, MdAPE, and R², then break those metrics out by segment so weak slices do not disappear inside acceptable aggregate metrics.

I also track experiments with hypothesis IDs, dataset versions, feature-set versions, and pass-fail criteria so promotion decisions are reproducible.

---

## Best fit

MLOps · ML Engineering · Product Data Science · Model Evaluation · Data Quality

---

## Stack

Python · XGBoost · Optuna · MLflow · SHAP · Pandera · FastAPI · Streamlit · Docker · NYC Open Data
