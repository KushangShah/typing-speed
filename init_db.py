import sqlite3

connection = sqlite3.connect("results.db")
cursor = connection.cursor()

cursor.execute("""
CREATE TABLE IF NOT EXISTS results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    wpm INTEGER,
    cpm INTEGER,
    accuracy INTEGER,
    time REAL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)
""")

connection.commit()
connection.close()

print("Database initialized!")

