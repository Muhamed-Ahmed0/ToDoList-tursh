from flask import Flask, render_template, request
import sqlite3

app = Flask(__name__)

# Connect to the SQLite database
def get_db_connection():
    conn = sqlite3.connect('G:/TODO/Database/khaleeha-3la-Allah.db')
    conn.row_factory = sqlite3.Row
    return conn

# Route to render the sign-up form
@app.route('/')
def index():
    return render_template('signup.html')

# Route to handle the form submission
@app.route('/signup', methods=['POST'])
def signup():
    username = request.form['Username']
    email = request.form['Email']
    password = request.form['Password']

    conn = get_db_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
            (username, email, password)
        )
        conn.commit()
        message = "User registered successfully!"
    except sqlite3.IntegrityError:
        message = "Username or email already exists. Please choose a different one."
    finally:
        conn.close()

    return render_template('signup.html', message=message)

if __name__ == '__main__':
    app.run(debug=True)
