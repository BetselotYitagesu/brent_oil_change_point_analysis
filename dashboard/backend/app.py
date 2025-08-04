# dashboard/backend/app.py

from flask import Flask, jsonify
import pandas as pd

app = Flask(__name__)


@app.route("/api/changepoints", methods=["GET"])
def get_changepoints():
    try:
        df = pd.read_json("data/changepoints.json")
        return jsonify(df.to_dict(orient="records"))
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
