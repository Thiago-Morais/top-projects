const container = document.querySelector("#container");
container.appendChild(generateRedText());
container.appendChild(generateBlueTitle());
container.appendChild(generateComplexDiv());

function generateRedText() {
  const redText = document.createElement("p");
  redText.textContent = "Hey I’m red!";
  redText.style.color = "red";
  return redText;
}

function generateBlueTitle() {
  const blueTitle = document.createElement("h3");
  blueTitle.textContent = "I’m a blue h3!";
  blueTitle.style.color = "blue";
  return blueTitle;
}

function generateComplexDiv() {
  const div = document.createElement("div");
  div.style.border = "solid black";
  div.style.backgroundColor = "pink";
  div.appendChild(generateInnerTitle());
  div.appendChild(generateInnerText());
  return div;

  function generateInnerTitle() {
    const innerTitle = document.createElement("h1");
    innerTitle.textContent = "I’m in a div";
    return innerTitle;
  }

  function generateInnerText() {
    const innerText = document.createElement("p");
    innerText.textContent = "ME TOO!";
    return innerText;
  }
}
