# 🤖 FAQ Chatbot — CodeAlpha Internship Task 2

A professional AI-powered FAQ Chatbot built with **HTML, CSS, and JavaScript** as part of the **CodeAlpha Artificial Intelligence Internship**.

---

## 🎯 Task Overview

**Task 2: Chatbot for FAQs**
- Collect FAQs related to AI, ML, Python, and Careers
- Match user questions using **NLP Cosine Similarity**
- Display the best matching answer as a chatbot response
- Full professional chat UI for user interaction

---

## ✨ Features

| Feature | Description |
|---|---|
| 🧠 NLP Matching | Cosine similarity scoring to match user questions to FAQs |
| 📂 Sidebar Navigation | Filter by AI, ML, Python, Career, General Tech |
| 📊 Live Stats | Tracks FAQs loaded, questions asked, and matched count |
| 🎯 Confidence Badge | Shows "High match" or "Partial match" on each answer |
| 💡 Related Questions | Suggests related questions from the same topic |
| 🤖 AI Fallback | Claude API answers when no FAQ match is found |
| ⌨️ Typing Indicator | Animated dots while the bot is responding |
| 🕐 Timestamps | Real-time timestamps on every message |

---

## 📁 Project Structure

```
CodeAlpha_FAQChatbot/
│
├── index.html    →  Main HTML structure & layout
├── style.css     →  All styling (sidebar, chat, badges, animations)
├── faq.js        →  FAQ database with 15 entries across 5 topics
├── app.js        →  Chatbot logic (NLP matching + Claude API fallback)
└── README.md     →  Project documentation
```

---

## 🚀 How to Run

### Option 1 — Open directly in browser
1. Clone or download this repository
2. Open `index.html` in any browser (Chrome, Firefox, Edge)
3. No server or installation needed!

### Option 2 — VS Code Live Server (recommended)
1. Open the folder in **VS Code**
2. Install the **Live Server** extension
3. Right-click `index.html` → **Open with Live Server**
4. The chatbot opens at `http://127.0.0.1:5500`

---

## 🧠 How the NLP Matching Works

```
User types a question
        ↓
Tokenize & clean (remove punctuation, lowercase, filter short words)
        ↓
Compare against each FAQ's keywords using Cosine Similarity
        ↓
Score ≥ 0.50  →  High match  (green badge)
Score ≥ 0.25  →  Partial match (yellow badge)
Score < 0.25  →  No match → Claude AI API called as fallback
        ↓
Display answer + confidence badge + related question suggestions
```

---

## 📚 FAQ Topics Covered

- **Artificial Intelligence** — What is AI, Neural Networks, NLP, Deep vs Machine Learning
- **Machine Learning** — Learning roadmap, Supervised/Unsupervised, Overfitting, Algorithms
- **Python** — Beginner guide, Installing libraries, AI libraries
- **Career** — Building an AI career, Data Scientist vs ML Engineer
- **General Tech** — GPU importance, How ChatGPT works

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox layout, animations)
- Vanilla JavaScript (ES6+)
- Font Awesome 6 (icons)
- Claude AI API — Anthropic (fallback responses)

---

## 🏢 About CodeAlpha

CodeAlpha is a leading software development company providing internship opportunities in AI, Web Development, and more.
🌐 [www.codealpha.tech](https://www.codealpha.tech)
