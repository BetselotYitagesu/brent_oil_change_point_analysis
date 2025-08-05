# app pyhton code
from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)


# Endpoint 1: Change Point Data
@app.route("/api/changepoints", methods=["GET"])
def get_changepoints():
    try:
        df = pd.read_json("data/changepoints.json")
        return jsonify(df.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500


# Endpoint 2: Price Series Data
@app.route("/api/price_series", methods=["GET"])
def price_series():
    try:
        df = pd.read_csv("data/brent_prices_cleaned.csv", parse_dates=["Date"])
        df["Date"] = df["Date"].dt.strftime("%Y-%m-%d")
        data = df[["Date", "Price"]].rename(columns={"Date": "date", 
                                                     "Price": "price"})
        return jsonify(data.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
