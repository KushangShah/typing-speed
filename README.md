# Typing Speed Test (Flask + JavaScript)

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![Flask](https://img.shields.io/badge/Flask-2.x-black.svg)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6-yellow.svg)
![License](https://img.shields.io/badge/License-MIT-green.svg)
![Status](https://img.shields.io/badge/Status-Active-success.svg)
![Deploy](https://img.shields.io/badge/Deploy-Render-purple.svg)
[![Render](https://img.shields.io/badge/Hosted%20on-Render-%23652DB7)](https://typing-speed-see0.onrender.com)

A web-based typing speed test inspired by modern typing platforms like Monkeytype, built using **Flask (Python)** for backend and **JavaScript** for real-time typing interaction, metrics, and highlighting.

The test measures:
- **WPM** (Words Per Minute)
- **CPM** (Characters Per Minute)
- **Accuracy**
- **Total characters typed**
- **Time duration**

---

## 🚀 Live Demo

👉 **Try it here:** https://typing-speed-see0.onrender.com

---

## 🧠 Project Overview

This project helps users test and improve their typing speed in a clean and minimal interface, with real-time input feedback and timed tests.

While building this project, I learned:

- How to set up a Flask backend
- How to serve templates using Jinja
- How to integrate CSS & JavaScript for real-time UI
- How to measure input in real-time using JS events
- How to implement a timer-based typing test
- How to compute WPM, CPM, accuracy
- How to add random text generation
- How to highlight correct/incorrect characters like Monkeytype
- How to deploy a Flask project using Render
- How to set up optional SQLite storage for results

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

## 📦 Optional Backend Persistence

There is an API endpoint:

```python
/submit_results
````

which allows saving typing test results into a SQLite database.

This enables potential future features like:

* Saved performance history
* Leaderboards
* User accounts

---

## 🗺️ Roadmap (Future Improvements)

Planned improvements include:

* [x] Real accuracy calculation (character-level)
* [x] Random text generator
* [x] Highlighting correct/incorrect characters
* [x] Animated caret / current-position indicator
* [x] Timed test mode (15s / 30s)
* [ ] Restart test button
* [ ] Live WPM display during typing
* [ ] Dark mode theme support
* [ ] Multiple difficulty modes
* [ ] Stats history page
* [ ] Leaderboard system
* [ ] User authentication (optional)
* [ ] Postgres support for production persistence

---

## 💻 Local Development Setup

Clone the repository:

```bash
git clone https://github.com/yourusername/typing-speed.git
cd typing-speed
```

Create a virtual environment:

```bash
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Open in browser:

```
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
│     ├─ script.js
│     └─ words.js
└─ results.db (optional)
```

---

## 🤝 Contributing

Contributions are welcome! Fork the project and submit a PR.

---

## 📄 License

MIT License © 2026 KushangShah


