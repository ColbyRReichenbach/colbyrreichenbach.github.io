# SPEC-NYC

### Production Automated Valuation Model · NYC Real Estate

---

Most AVM demos stop at "I got a good R²."
This one doesn't.

**The problem:** Real estate valuation at scale requires more than a trained 
model — it requires a system that knows when its predictions are trustworthy, 
when they've drifted, and when to retrain. Built on 1M+ real NYC property 
transactions, SPEC-NYC is a full production DS workflow, not a notebook.

---

**What makes it production-grade:**

The pipeline runs from raw NYC Open Data ingestion (retries, caching, Pandera 
data contracts) through XGBoost training with Optuna tuning, SHAP 
explainability artifacts, and a champion/challenger model arena — every 
promotion requires passing defined gates with human sign-off and a documented 
rollback path. Segment-level scorecards (PPE10, MdAPE, R²) break performance 
out by property tier so underperforming slices can't hide behind good 
aggregates. Drift monitoring and release validation tell the system when to 
retrain.

Every experiment is hypothesis-driven: tracked with a hypothesis ID, dataset 
version, feature set version, and pass/fail criteria before a single line of 
training code runs.

---

**Stack:** Python · XGBoost · Optuna · MLflow · SHAP · Pandera · Docker · 
FastAPI · Streamlit · NYC Open Data
