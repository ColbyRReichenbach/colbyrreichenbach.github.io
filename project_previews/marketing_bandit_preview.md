# Marketing Bandit (Profit Optimization)

## Project Overview
This project simulates an **Epsilon-Greedy Multi-Armed Bandit** algorithm designed to maximize **Total Profit** rather than just Click-Through Rate. It addresses the real-world challenge where high-click ads may lead to low-value conversions or high costs.

## Key Highlights
*   **Profit vs. Clicks:** Unlike traditional optimization which chases clicks, this agent accounts for **Cost Per Impression (CPI)** and **Conversion Value**, ensuring high ROAS (Return on Ad Spend).
*   **Real-Time Adaptation:** The algorithm balances **Exploration** (testing new ads) and **Exploitation** (doubling down on winners) to adapt to changing market conditions.
*   **Monte Carlo Simulation:** The dashboard runs hundreds of simulated campaigns to prove the statistical significance of the Bandit's outperformance over A/B testing.
*   **Interactive Simulation:** Built with Streamlit to allow users to tweak "Epsilon" decay rates and see how aggressive exploration affects long-term profit.

## Tech Stack
*   **Python**: Simulation logic.
*   **Reinforcement Learning**: Epsilon-Greedy Bandit algorithms.
*   **Streamlit**: Interactive simulation dashboard.
*   **SciPy/NumPy**: Statistical generation and analysis.
