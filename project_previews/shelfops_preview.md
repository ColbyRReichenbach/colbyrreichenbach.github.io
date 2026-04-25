# ShelfOps

### Inventory Decision System

---

I built ShelfOps as an inventory decision system for retail operations. It takes store, SKU, supplier, and inventory signals and turns them into forecasts, stockout alerts, reorder recommendations, and purchase-order review workflows.

---

## Problem

Inventory work sits across a lot of noisy systems: transactions, on-hand inventory, supplier constraints, reorder rules, promotions, receiving issues, and exception events. I wanted this project to connect those layers into an operational workflow instead of stopping at a forecast chart.

---

## Data and workflow

I modeled stores, products, suppliers, transactions, inventory levels, forecasts, alerts, purchase orders, integration events, anomalies, EDI logs, distribution-center inventory, transfers, shrinkage, planograms, and receiving discrepancies.

That data layer supports replenishment review, inventory-risk monitoring, forecast inspection, and retraining or promotion decisions.

---

## System

ShelfOps includes:

- Async FastAPI backend with SQLAlchemy models and versioned APIs.
- PostgreSQL and TimescaleDB persistence with Redis caching.
- Celery workers for forecasts, retraining, EDI, SFTP, event ingestion, monitoring, and scheduling.
- Kafka-compatible event ingestion patterns.
- Forecasting workflows and model-governance checks.
- Human-reviewed purchase-order and alert workflows.
- React and TypeScript operations dashboard for inventory, forecasts, alerts, integrations, and model operations.

---

## Evaluation and reliability

I also built tests and validation paths for API behavior, data contracts, EDI and SFTP flows, event ingestion, forecast endpoints, model quality checks, promotion gates, retraining failure modes, rollback paths, security guardrails, and purchase-order workflows.

The part I would want a hiring manager to notice is the full operational pattern:

```text
messy retail data
-> structured domain model
-> forecasting and alert layer
-> human review workflow
-> dashboard surfaces
-> model and integration checks
```

---

## Best fit

Data Engineering · Analytics Engineering · MLOps · Operations Systems · Applied Data Systems

---

## Stack

Python · FastAPI · SQLAlchemy · PostgreSQL · TimescaleDB · Redis · Celery · Kafka-compatible ingestion · React · TypeScript · Docker
