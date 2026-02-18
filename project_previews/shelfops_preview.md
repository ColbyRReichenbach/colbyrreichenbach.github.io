# ShelfOps

### Retail Inventory Intelligence Platform · Full-Stack

---

Retailers lose billions annually to stockouts and overstocks.
The existing tools are either enterprise-only or too simple to matter.

**The problem:** Mid-market retailers need demand forecasting, real-time 
inventory signals, and ML-driven reorder logic — delivered to the right 
person at the right level of detail. ShelfOps is built around that exact 
workflow, from POS data ingestion to store-level forecast delivery.

---

**What it does:**

The backend is async FastAPI + SQLAlchemy, Celery task queues, 
PostgreSQL/TimescaleDB, Redis caching, and Redpanda/Kafka-compatible event 
streaming. The ML layer runs XGBoost and LSTM forecasting pipelines through 
a model registry with fail-closed promotion gates — the same governance 
pattern used in SPEC-NYC, applied to demand signals.

The dashboard is multi-level by design: C-suite sees revenue impact and 
stockout risk summaries. Data science teams see model performance and retrain 
signals. Store operations see SKU-level forecast alerts and reorder 
recommendations. Enterprise EDI/SFTP integration paths are built and 
validated in CI for ERP connectivity.

---

**Stack:** Python · FastAPI · Celery · PostgreSQL · TimescaleDB · Redis · 
Kafka · XGBoost · LSTM · React · TypeScript · Docker · GitHub Actions
