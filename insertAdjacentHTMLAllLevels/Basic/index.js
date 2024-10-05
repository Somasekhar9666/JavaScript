const listContainer = document.getElementById("list-container");
const button = document.getElementById("add-item");

let itemCount = 0;

button.addEventListener("click", () => {
  itemCount++;
  listContainer.insertAdjacentHTML("beforeend", `<p>Item ${itemCount}</p>`);
});

//new content will be added right before the closing tag of the listContainer.
