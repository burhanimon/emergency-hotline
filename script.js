let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");
const clearHistory = document.getElementById("clearHistory");

// Heart Functionality
document.querySelectorAll(".heart-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    heartCount++;
    heartDisplay.textContent = heartCount;
    icon.innerHTML = <i class="fa-solid fa-heart" style="color:red"></i>;
  });
});

// Copy Functionality
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.parentElement.previousElementSibling.textContent;
    navigator.clipboard.writeText(number);
    alert("Copied Number: " + number);
    copyCount++;
    copyDisplay.textContent = copyCount;
  });
});

// Call Functionality
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const serviceName = btn.parentElement.parentElement.querySelector("h2").textContent;
    const serviceNumber = btn.parentElement.previousElementSibling.textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make a call!");
      return;
    }

    alert(Calling ${serviceName} (${serviceNumber}));
    coinCount -= 20;
    coinDisplay.textContent = coinCount;

    let now = new Date();
    let time = now.toLocaleTimeString();

    const li = document.createElement("li");
    li.innerHTML = <i class="fa-solid fa-phone"></i> ${serviceName} - ${serviceNumber} <span style="color:gray">(${time})</span>;
    historyList.appendChild(li);
  });
});

// Clear History
clearHistory.addEventListener("click", () => {
  historyList.innerHTML = "";
});