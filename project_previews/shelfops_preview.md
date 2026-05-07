# ShelfOps

### Retail Replenishment & Demand Forecasting Platform

ShelfOps is a pre-pilot retail inventory decision platform. It turns sales, inventory, catalog, supplier, and integration data into demand forecasts, stockout/overstock risk, replenishment recommendations, simulation outputs, and buyer-facing decision workflows.

## Problem

Retail replenishment decisions are spread across transactions, on-hand inventory, supplier constraints, reorder rules, promotions, receiving issues, purchase orders, and exception events. A useful system cannot stop at a forecast chart; it has to turn forecasts into reviewable operational decisions.

## System

- Async FastAPI backend with SQLAlchemy/PostgreSQL tenant context.
- Redis/Celery workers for scheduled and asynchronous workflows.
- Integration adapters for data ingestion paths.
- Demand forecasting artifacts, dataset snapshots, backtests, model registry and promotion gates.
- SHAP, calibration, evaluation outputs, and replenishment simulations.
- Inventory, forecast, model evidence, replenishment, pilot impact, and integration dashboards in React/TypeScript.

## Stack

Python, FastAPI, SQLAlchemy, PostgreSQL, Redis, Celery, React, TypeScript, LightGBM, SHAP, Pydantic, Docker.
