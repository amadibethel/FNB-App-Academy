const addBtn = document.getElementById('addBtn');
const quoteInput = document.getElementById('quote');
const authorInput = document.getElementById('author');
const quotesList = document.getElementById('quotesList');

function loadQuotes() {
  quotesList.innerHTML = '';
  const keys = Object.keys(localStorage);
  keys.forEach((key) => {
    if (key.startsWith('quote_')) {
      const quote = JSON.parse(localStorage.getItem(key));
      displayQuote(key, quote);
    }
  });
}

function displayQuote(key, quote) {
  const div = document.createElement('div');
  div.className = 'quote-item';
  div.innerHTML = `
    <p>"${quote.text}"</p>
    <span>- ${quote.author}</span>
    <button class="delete-btn" onclick="deleteQuote('${key}')">Delete</button>
  `;
  quotesList.appendChild(div);
}

function deleteQuote(key) {
  localStorage.removeItem(key);
  loadQuotes();
}

addBtn.addEventListener('click', () => {
  const text = quoteInput.value.trim();
  const author = authorInput.value.trim();

  if (text && author) {
    const quote = { text, author };
    const uniqueKey = `quote_${Date.now()}`;
    localStorage.setItem(uniqueKey, JSON.stringify(quote));

    quoteInput.value = '';
    authorInput.value = '';
    loadQuotes();
  } else {
    alert('Please enter both quote and author');
  }
});

// Load quotes when page loads
window.addEventListener('DOMContentLoaded', loadQuotes);