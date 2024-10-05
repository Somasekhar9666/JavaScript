const nameContainer = document.getElementById("name-container");
const button = document.getElementById("show-names");
const names = ["Alice", "Bob", "Charlie"];

button.addEventListener("click", () => {
  nameContainer.innerHTML = ""; // Clear previous names
  names.forEach((name) => {
    nameContainer.insertAdjacentHTML("beforeend", `<p>${name}</p>`);
  });
});
