from flask import Flask, jsonify

app = Flask(__name__, static_folder='../build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route("/api/users")
def users():
    return jsonify(
        [
            {"name": "Brighticorn", "interests": ["Python", "coding"]},
            {"name": "Ada", "interests": ["math", "computers"]},
        ]
    )

# React Router will handle the routing on the frontend in the future
@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))