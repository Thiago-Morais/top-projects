const list = document.querySelector("ul");
const input = document.querySelector("input");
const btn = document.querySelector("button");

function onClick(event) {
  event.preventDefault();
  const value = extractInputValue(input);
  const item = createListItem(value);
  list.appendChild(item);
  input.focus();
}

function extractInputValue(input) {
  const value = input.value;
  input.value = "";
  return value;
}

function createListItem(content) {
  const item = document.createElement("li");
  const itemLabel = document.createElement("span");
  const deleteButton = document.createElement("button");
  item.appendChild(itemLabel);
  item.appendChild(deleteButton);
  itemLabel.textContent = content;
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => item.remove());
  return item;
}

btn.addEventListener("click", onClick);
