from flask import Flask, render_template, request, jsonify
import sqlite3

app = Flask(__name__)

@app.route("/")
def main():
    return render_template("index.html")

@app.route("/test")
def test():
    return render_template("test.html")

@app.route("/submit_results", methods=["POST"])
def submit_results():
    data = request.get_json()
    print("Received data:", data)

    wpm = data.get("wpm")
    cpm = data.get("cpm")
    accuracy = data.get("accuracy")
    time_taken = data.get("time")

    # Save to SQLite
    connection = sqlite3.connect("results.db")
    cursor = connection.cursor()
    cursor.execute(
        "INSERT INTO results (wpm, cpm, accuracy, time) VALUES (?, ?, ?, ?)",
        (wpm, cpm, accuracy, time_taken)
    )
    connection.commit()
    connection.close()

    return jsonify({"status": "saved"})

if __name__ == "__main__":
    app.run(debug=True)
