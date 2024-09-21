const input = document.getElementById("user-input");
const addButton = document.getElementById("add-name");
const dynamicList = document.getElementById("dynamic-list");
let nameArray = [];

addButton.addEventListener("click", () => {
  const name = input.value.trim();
  if (name) {
    nameArray.push(name);
    dynamicList.insertAdjacentHTML("beforeend", `<p>${name}</p>`);
    input.value = ""; // Clear input field
  }
});
