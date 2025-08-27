// Navbar counters
let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

document.getElementById('heart-wrapper').addEventListener('click', () => {
  heartCount++;
  document.getElementById('heart-count').innerText = heartCount;
});

document.getElementById('copy-wrapper').addEventListener('click', () => {
  copyCount++;
  document.getElementById('copy-count').innerText = copyCount;
});

// Hero section event handlers
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
  card.addEventListener('click', () => {
    alert("You clicked: " + card.dataset.name);
  });
});
