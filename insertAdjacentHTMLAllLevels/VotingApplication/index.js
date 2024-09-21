const pollContainer = document.getElementById("poll-container");
const addOptionButton = document.getElementById("add-option");
const optionInput = document.getElementById("option-input");
let options = [];

addOptionButton.addEventListener("click", () => {
  const option = optionInput.value.trim();
  if (option) {
    options.push(option);
    pollContainer.insertAdjacentHTML(
      "beforeend",
      `<div>${option} <button class="vote-button">Vote</button></div>`
    );
    optionInput.value = ""; // Clear input
  }
});

// Handle voting
pollContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("vote-button")) {
    const optionText = event.target.parentNode.firstChild.textContent.trim();
    alert(`You voted for: ${optionText}`);
  }
});
