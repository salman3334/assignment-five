// Copy Number
function copyNumber(number) {
  navigator.clipboard.writeText(number);
  alert("Copied: " + number);
  addToHistory("Copied", number);
}

// Call Number
function callNumber(number) {
  alert("Calling: " + number);
  addToHistory("Called", number);
}

// Add to History
function addToHistory(action, number) {
  const historyList = document.getElementById("history-list");

  if (historyList.children[0]?.classList.contains("italic")) {
    historyList.innerHTML = "";
  }

  const li = document.createElement("li");
  li.textContent = `${action}: ${number}`;
  historyList.prepend(li);
}

// Clear History
function clearHistory() {
  const historyList = document.getElementById("history-list");
  historyList.innerHTML = '<li class="text-gray-400 italic">No history yet...</li>';
}
