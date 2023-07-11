var counterContainer = document.getElementById("website-counter");
var resetButton = document.getElementById("reset");
var visitCount = localStorage.getItem("page_view");

// Check if page_view entry is present
if (visitCount) {
  visitCount = Number(visitCount);
  visitCount += 1;
  localStorage.setItem("page_view", visitCount);
} else {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
}
counterContainer.innerHTML = visitCount;

// Adding onClick event listener
resetButton.addEventListener("click", () => {
  visitCount = 1;
  localStorage.setItem("page_view", 1);
  counterContainer.innerHTML = visitCount;
});