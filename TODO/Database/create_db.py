import sqlite3
import os

# Define the path to the database file
db_path = 'G:/TODO/Database/khaleeha-3la-Allah.db'

# Create the directory if it doesn't exist
os.makedirs(os.path.dirname(db_path), exist_ok=True)

# Connect to the SQLite database (it will be created if it doesn't exist)
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Create a table (if it doesn't already exist)
cursor.execute('''
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
    )
''')

# Commit changes and close the connection
conn.commit()
conn.close()

print(f"Database '{db_path}' created successfully.")
