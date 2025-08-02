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
