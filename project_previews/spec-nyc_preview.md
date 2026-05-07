# SPEC-NYC

### Real Estate Valuation ML Governance Pipeline

SPEC-NYC is a Python/TypeScript valuation-modeling and governance pipeline for NYC residential property data. The project focuses on the evidence needed around a model: ETL, feature engineering, evaluation, explainability, monitoring, retrain policy, and release gates.

## Problem

Valuation modeling cannot stop at one aggregate metric. Reviewers need to know where performance holds, where it fails, what changed between versions, and what evidence supports retraining or release.

## System

- Source connectors and canonical data contracts.
- ETL with identity, deduplication, segmentation, temporal history, feature engineering, imputation, and non-leaky proxy feature paths.
- Time-based train/test split and XGBoost evaluation.
- SHAP explainability artifacts.
- Drift and performance monitoring.
- Retrain-policy outputs.
- Champion/challenger and release-gate code.
- Streamlit governance dashboard.
- Next.js API/demo surfaces with Zod contracts and bounded copilot patterns.

## Stack

Python, Pandas, XGBoost, SHAP, Optuna, MLflow-style artifacts, Pandera, Streamlit, Next.js, TypeScript, Zod, PostgreSQL.
