# Proactive Retention Agent

### Churn Risk Decision Workflow

---

I built Proactive Retention Agent to turn churn modeling into a reviewable analyst queue. It combines churn probability, customer value, and complaint context so a retention team can prioritize who to contact, why they are at risk, and what context should shape the response.

---

## Problem

A churn score alone does not tell a team what to do next. Retention workflows need prioritization, business logic, and context. A moderate-risk customer with high lifetime value may matter more than a high-risk customer with low value, and complaint text often explains why the risk exists.

---

## Data and workflow

I used a telecom churn dataset, structured customer features, complaint text, and customer lifetime value inputs. The workflow turns model output into a ranked analyst queue rather than a standalone prediction table.

---

## System

The system includes:

- XGBoost churn model served through FastAPI.
- Dockerized API and model layer.
- complaint theme and sentiment classification service.
- Priority logic that combines churn probability and customer value.
- Streamlit dashboard with demo and live pipeline modes.
- Transparent inspection of API responses, feature values, and prompts.

---

## Evaluation and reliability

I tuned the model for recall because missed churners are more costly in this workflow than extra review volume. I also compare that tuning against a baseline and expose the decision logic so a reviewer can inspect why each customer was prioritized.

---

## Best fit

Product Data Science · ML Engineering · Text Classification · Business Analytics

---

## Stack

Python · XGBoost · FastAPI · Docker · Streamlit · Pandas · Scikit-learn
