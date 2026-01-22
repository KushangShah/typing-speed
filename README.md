# Typing Speed Test (Flask + JavaScript)


![Python](https://img.shields.io/badge/Python-3.10+-blue.svg) ![Flask](https://img.shields.io/badge/Flask-2.x-black.svg) ![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg) ![License](https://img.shields.io/badge/License-MIT-green.svg) ![Status](https://img.shields.io/badge/Status-Active-success.svg) ![Deploy](https://img.shields.io/badge/Deploy-Render-purple.svg) [![Render](https://img.shields.io/badge/Hosted%20on-Render-%23652DB7)](https://your-render-url.onrender.com)


A web-based typing speed test inspired by other speed typing test on websites, built using **Flask (Python)** for backend and **JavaScript** for real-time typing metrics.

This project measures:
- WPM (Words Per Minute)
- CPM (Characters Per Minute)
- Accuracy
- Total time taken

---

## 🚀 Live Demo

👉 **Try it here:** https://typing-speed-see0.onrender.com

---

## 🧠 Project Overview

This project helps users test and improve their typing speed in a clean and minimal interface.

I started with the foundations of a full-stack web application, learning:

- How to set up Flask backend
- How to serve HTML templates
- How to integrate CSS & JS
- How to measure typing time in the browser
- How to compute typing metrics (WPM, CPM, Accuracy)
- How to deploy a Flask project to the web
- How to store results in a SQLite database

---

## 🛠️ Tech Stack

**Frontend**
- HTML5
- CSS3
- JavaScript (ES6)

**Backend**
- Python 3
- Flask

**Database (Optional)**
- SQLite (for storing results)

**Deployment**
- Render

---

## ✨ Current Features

✔ Display text to type  
✔ Real-time text input tracking  
✔ Start timer on first keystroke  
✔ Stop timer when finished  
✔ Calculate:
- WPM (Words Per Minute)
- CPM (Characters Per Minute)
- Accuracy (currently 100% placeholder)
- Total time  

✔ Display results on screen  
✔ Simple and clean UI  
✔ Fully deployed online  

---

## 📦 Optional Backend Persistence

We integrated an API route:

```python
/submit_results
````

which allows saving typing test results to SQLite.
This allows future features like:

* Performance history
* Leaderboards
* User accounts

---

## 🗺️ Roadmap (Coming Soon)

Planned improvements include:

* [ ] Real accuracy calculation (character-level)
* [ ] Random text generator
* [ ] Highlighting correct/incorrect characters
* [ ] Dark mode theme
* [ ] Animated caret
* [ ] Restart test button
* [ ] Results history page
* [ ] Leaderboard system
* [ ] User authentication (maybe)
* [ ] Postgres support for persistence in production

---

## 💻 Local Development Setup

Clone the repository

```bash
git clone https://github.com/yourusername/typing-speed.git
cd typing-speed
```

Create virtual environment:

```bash
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Then open in browser:

```bash
http://127.0.0.1:5000
```

---

## 📂 Project Structure

```
typing-speed/
├─ app.py
├─ wsgi.py
├─ requirements.txt
├─ README.md
├─ templates/
│  ├─ index.html
│  └─ test.html
├─ static/
│  ├─ css/
│  │  └─ style.css
│  └─ js/
│     └─ script.js
└─ results.db
```

---

## 🤝 Contributing

Contributions are welcome! Fork the project and submit a PR.

---

## 📄 License

MIT License © 2026 KushangShah