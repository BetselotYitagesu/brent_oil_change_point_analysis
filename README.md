# ⛽ Brent Oil Price Change Point Analysis

This repository contains a time series analysis project conducted by **Birhan Energies** to investigate how major geopolitical and economic events impact **Brent crude oil prices**. The goal is to provide actionable insights for **investors, policymakers, and energy firms** using Bayesian change point detection techniques.

---

## 🎯 Project Goal

To detect statistically significant **structural breaks** in Brent oil prices using Bayesian modeling (via PyMC3), and to **correlate** these changes with real-world events such as:
- Wars and geopolitical conflicts
- OPEC decisions
- Global economic crises
- Pandemics and recovery periods

This analysis helps answer the question:  
> *"When and how do major events affect oil price trends or volatility?"*

---

## 📦 Project  Structure

├── data/
│ ├── brent_prices.csv # Raw historical Brent oil price data
│ └── key_events.csv # Manually curated list of geopolitical/economic events
├── notebooks/
│ └── 01_exploratory_analysis.ipynb # EDA, log returns, stationarity checks
├── reports/
│ └── interim_report.md # Task 1 summary and workflow
├── src/
│ └── utils.py # Data loaders and transformation functions
├── .gitignore
└── README.md



---

## 📊 Task 1 Summary: Data Understanding & Workflow Design

### ✅ Activities Completed

- **Loaded and cleaned raw data** (with mixed date formats)
- **Compiled 10+ global events** known to affect oil markets
- **Visualized price data** with event overlays
- **Analyzed rolling mean and std** to reveal trends and volatility
- **Computed log returns** to stabilize variance
- **Tested for stationarity** using Augmented Dickey-Fuller test
- **Planned modeling workflow** using PyMC3 Bayesian change point models

### 📁 Key File: `data/key_events.csv`

| Event               | Date       | Description                          |
|--------------------|------------|--------------------------------------|
| Gulf War I         | 1990-08-02 | Iraq invades Kuwait                  |
| Financial Crisis   | 2008-09-15 | Global recession begins              |
| COVID-19 Outbreak  | 2020-03-11 | WHO declares pandemic                |
| Russia–Ukraine War | 2022-02-24 | Full-scale invasion starts           |
| *(and others...)*  |            |                                      |

---

## 🔮 Next Steps (Task 2)

- Apply Bayesian change point model using **PyMC3**
- Detect and interpret key change points
- Quantify before/after effects of major events
- Associate detected shifts with curated event list

---

## 🛠️ Setup Instructions

```bash
# Clone the repository
git clone https://github.com/your-username/brent-oil-change-point.git
cd brent-oil-change-point

# Create and activate virtual environment
python -m venv .venv
source .venv/bin/activate     # On Windows: .venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt


# 🛢️ Task 2: Change Point Modeling and Insight Generation

## 📌 Task 2.1 – Bayesian Change Point Modeling (PyMC3)

### 🎯 Goal

In this task, we implement a **Bayesian change point detection model** using PyMC3 to identify statistically significant structural breaks in Brent oil prices over time. The model helps us understand when a major change in price behavior occurred and how it aligns with real-world geopolitical or economic events.

---

### ⚙️ Model Overview

- **Framework**: PyMC3 (Bayesian Probabilistic Programming)
- **Model Type**: One-change-point model in daily log returns
- **Inference**: MCMC (NUTS for continuous vars, Metropolis for discrete `tau`)
- **Observations**: Daily log returns of Brent oil prices (stationary series)

#### Parameters:
- `tau`: Unknown change point (discrete uniform)
- `mu_1`, `mu_2`: Mean return before and after the change
- `sigma`: Shared volatility

#### Structure:
The model assumes that the time series has **two regimes**, with a switch at some unknown time `tau`. It infers:
- When the change occurred
- What the average returns were before and after

---

### 📉 Sampling Details

- **Draws**: 100 posterior samples per chain
- **Tuning**: 250 steps
- **Chains**: 2
- **Sampler**:
  - `tau` (discrete): Metropolis
  - `mu_1`, `mu_2`, `sigma`: NUTS

---

### 📊 Results

- **Change Point Detected**: [to be filled after inference]
- **Posterior Summary**: Shows high confidence in parameter values
- **Trace Plots**: Used to check convergence and sampling quality

---

### 📁 Key Files

| File | Description |
|------|-------------|
| `notebooks/02_change_point_model.ipynb` | Full model implementation, sampling, and posterior interpretation |
| `data/brent_prices_cleaned.csv` | Cleaned price data with consistent date formats |
| `data/key_events.csv` | Timeline of geopolitical/economic events to be compared with model outputs |

---

### 🧠 Insights (Preliminary)

The Bayesian change point model provides a **probabilistic estimate** of when the structure of returns changed — this is valuable in correlating economic events (e.g., wars, recessions, OPEC cuts) with market responses.

This lays the foundation for deeper analysis in Task 2.2, where we will match detected change points to real events and quantify the impact.

---

### ✅ Next Steps

- Task 2.2: Interpret results and align change points with real-world events


- Task 3: Build an interactive dashboard for
