const heartBtns = document.querySelectorAll(".heart");
    const callBtns = document.querySelectorAll(".call-btn");
    const copyBtns = document.querySelectorAll(".copy-btn");

    const heartCount = document.getElementById("heart-count");
    const coinCount = document.getElementById("coin-count");
    const copyCount = document.getElementById("copy-count");
    const historyList = document.getElementById("history-list");
    const clearHistory = document.getElementById("clear-history");

    let coins = 100, hearts = 0, copies = 0;

    // Heart
    heartBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        hearts++;
        heartCount.textContent = hearts;
      });
    });

    // Copy
    copyBtns.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const card = e.target.closest(".bg-white");
        const number = card.querySelector("p.font-semibold").textContent;
        navigator.clipboard.writeText(number);
        copies++;
        copyCount.textContent = copies;
        alert("Copied: " + number);
      });
    });

    // Call
    callBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        const name = btn.getAttribute("data-name");
        const number = btn.getAttribute("data-number");
        if(coins < 20){
          alert("Not enough coins!");
          return;
        }
        coins -= 20;
        coinCount.textContent = coins;
        alert("Calling " + name + " (" + number + ")");
        const li = document.createElement("li");
        li.textContent = name + " - " + number;
        historyList.appendChild(li);
      });
    });

    // Clear
    clearHistory.addEventListener("click", () => {
      historyList.innerHTML = "";
    });



