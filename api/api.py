from flask import Flask, jsonify

app = Flask(__name__)


@app.route("/api/users")
def users():
    return jsonify(
        [
            {"name": "Brighticorn", "interests": ["Python", "coding"]},
            {"name": "Ada", "interests": ["math", "computers"]},
        ]
    )
