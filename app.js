// ======================================
//  FAQ Chatbot Pro — app.js
//  CodeAlpha Task 2
// ======================================

let currentTopic = 'all';
let isLoading   = false;
let qTotal      = 0;
let mTotal      = 0;

// ---- Set welcome timestamp ----
document.getElementById('welcome-ts').textContent = getTime();
document.getElementById('faq-count').textContent  = FAQ_DB.length;

// ---- Topic filter ----
function setTopic(topic, el) {
  currentTopic = topic;
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  el.classList.add('active');
}

// ---- Get current time string ----
function getTime() {
  const d = new Date();
  return d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
}

// ---- NLP: Cosine Similarity Matching ----
function cosineSim(userWords, keywords) {
  let match = 0;
  userWords.forEach(w => {
    if (keywords.some(k => k.includes(w) || w.includes(k))) match++;
  });
  return match / Math.max(userWords.length, 1);
}

function findBestFAQ(query) {
  const words = query
    .toLowerCase()
    .replace(/[?!.,]/g, '')
    .split(/\s+/)
    .filter(w => w.length > 1);

  let best = null, topScore = 0;

  const pool = currentTopic === 'all'
    ? FAQ_DB
    : FAQ_DB.filter(f => f.topic === currentTopic);

  pool.forEach(faq => {
    const allKeys = [...faq.keywords, ...faq.q.toLowerCase().split(/\s+/)];
    const score   = cosineSim(words, allKeys);
    if (score > topScore) { topScore = score; best = faq; }
  });

  return { faq: best, score: topScore };
}

// ---- Update sidebar stats ----
function updateStats() {
  document.getElementById('q-count').textContent = qTotal;
  document.getElementById('m-count').textContent = mTotal;
}

// ---- Append a chat message ----
function addMessage(role, text, suggestions = []) {
  const div = document.createElement('div');
  div.className = `msg ${role}`;

  const iconHtml = role === 'bot'
    ? '<div class="msg-icon"><i class="fa-solid fa-robot"></i></div>'
    : '<div class="msg-icon"><i class="fa-solid fa-user"></i></div>';

  div.innerHTML = iconHtml + '<div><div class="bubble"></div></div>';
  div.querySelector('.bubble').textContent = text;

  // Suggestion buttons
  if (suggestions.length) {
    const row = document.createElement('div');
    row.className = 'sugg-row';
    suggestions.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'sq';
      btn.textContent = s;
      btn.onclick = () => quickAsk(s);
      row.appendChild(btn);
    });
    div.querySelector('div:last-child').appendChild(row);
  }

  // Timestamp
  const ts = document.createElement('div');
  ts.className = 'ts';
  ts.textContent = getTime();
  div.querySelector('div:last-child').appendChild(ts);

  document.getElementById('msgs').appendChild(div);
  scrollToBottom();
  return div;
}

// ---- Typing indicator ----
function showTyping() {
  const div = document.createElement('div');
  div.className = 'msg bot';
  div.id = 'typing-indicator';
  div.innerHTML = `
    <div class="msg-icon"><i class="fa-solid fa-robot"></i></div>
    <div>
      <div class="typing">
        <span></span><span></span><span></span>
      </div>
    </div>
  `;
  document.getElementById('msgs').appendChild(div);
  scrollToBottom();
}

function hideTyping() {
  const t = document.getElementById('typing-indicator');
  if (t) t.remove();
}

function scrollToBottom() {
  const m = document.getElementById('msgs');
  m.scrollTop = m.scrollHeight;
}

// ---- Send message ----
async function sendMsg() {
  const inp   = document.getElementById('uinput');
  const query = inp.value.trim();
  if (!query || isLoading) return;

  inp.value = '';
  inp.style.height = '40px';
  isLoading = true;
  document.getElementById('sbtn').disabled = true;

  qTotal++;
  updateStats();

  addMessage('user', query);
  showTyping();

  const { faq, score } = findBestFAQ(query);

  if (faq && score >= 0.25) {
    // --- FAQ match found ---
    await new Promise(r => setTimeout(r, 600));
    hideTyping();
    mTotal++;
    updateStats();

    const isHighMatch = score >= 0.5;
    const botDiv      = addMessage('bot', faq.a);

    // Confidence badge
    const badge = document.createElement('span');
    badge.className = `cbadge ${isHighMatch ? 'high' : 'med'}`;
    badge.innerHTML = `
      <i class="fa-solid fa-${isHighMatch ? 'check' : 'sliders'}" style="font-size:9px"></i>
      ${isHighMatch ? 'High match' : 'Partial match'}
    `;
    botDiv.querySelector('.bubble').appendChild(badge);

    // Related questions
    const related = FAQ_DB
      .filter(f => f.topic === faq.topic && f.id !== faq.id)
      .slice(0, 2)
      .map(f => f.q);

    if (related.length) {
      const row = document.createElement('div');
      row.className = 'sugg-row';
      row.style.marginTop = '8px';
      related.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'sq';
        btn.textContent = s;
        btn.onclick = () => quickAsk(s);
        row.appendChild(btn);
      });
      // Insert before the timestamp
      const msgInner = botDiv.querySelector('div:last-child');
      const ts       = msgInner.querySelector('.ts');
      msgInner.insertBefore(row, ts);
    }

  } else {
    // --- No FAQ match: call Claude API ---
    try {
      const response = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-6',
          max_tokens: 1000,
          system: 'You are a helpful FAQ chatbot specializing in Artificial Intelligence, Machine Learning, Python programming, and tech careers. Give concise, clear answers in 2-3 sentences. Be friendly and encouraging.',
          messages: [{ role: 'user', content: query }]
        })
      });

      const data = await response.json();
      hideTyping();

      const text = data.content
        ?.map(c => c.text || '')
        .join('') || 'Sorry, I could not process that. Please try rephrasing.';

      addMessage('bot', text, ['What is AI?', 'How do I learn ML?']);

    } catch (err) {
      hideTyping();
      addMessage('bot',
        'Something went wrong. Please check your connection and try again.',
        ['What is AI?', 'How do I learn ML?']
      );
    }
  }

  isLoading = false;
  document.getElementById('sbtn').disabled = false;
}

// ---- Quick ask from suggestion buttons ----
function quickAsk(q) {
  document.getElementById('uinput').value = q;
  sendMsg();
}

// ---- Enter key sends, Shift+Enter = new line ----
document.getElementById('uinput').addEventListener('keydown', e => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMsg();
  }
});

// ---- Auto-resize textarea ----
document.getElementById('uinput').addEventListener('input', function () {
  this.style.height = '40px';
  this.style.height = Math.min(this.scrollHeight, 100) + 'px';
});
