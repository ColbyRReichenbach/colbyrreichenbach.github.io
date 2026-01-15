# Self-Optimizing Ad Campaign

## Project Overview
An advanced implementation of a **Thompson Sampling Multi-Armed Bandit** algorithm. This system treats ad creatives as "arms" and dynamically allocates traffic to the most promising variations in real-time using Bayesian probability.

## Key Highlights
*   **Bayesian Inference:** Uses **Beta Distributions** to model the probability of success (CTR) for each ad, updating beliefs after every single impression.
*   **Efficiency:** drastically reduces "Regret" (wasted ad spend) compared to traditional A/B tests, which must spend 50% of the budget on losing ads until significance is reached.
*   **Thompson Sampling:** Implements one of the most efficient algorithms for balancing exploration and exploitation in online decision making.
*   **Live Benchmark:** The accompanying dashboard benchmarks this probabilistic approach against fixed-allocation strategies, visualizing the massive "Lift" in cumulative clicks.

## Tech Stack
*   **Python**: Algorithm implementation.
*   **Bayesian Statistics**: Beta distributions, Thompson Sampling.
*   **Streamlit**: Visualization dashboard.
*   **Matplotlib**: Statistical plotting (Standard Deviation bands).
