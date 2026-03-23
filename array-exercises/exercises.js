function exercise1() {
  console.log(camelize("background-color") == "backgroundColor");
  console.log(camelize("list-style-image") == "listStyleImage");
  console.log(camelize("-webkit-transition") == "WebkitTransition");
}

function camelize(text) {
  // Convert kebab-case into camelCase
  // Split at `-` and create an array for each element
  // Change the initial character's case to UPPER CASE
  //    But not the first, so only from the second
  // console.log(`text = ${text}`);
  const rawWords = text.split("-");
  const camelized = rawWords.map((item, index) => {
    if (index != 0) {
      const firstLetter = item.slice(0, 1);
      const remainder = item.slice(1);
      item = firstLetter.toUpperCase() + remainder;
    }
    return item;
  });
  const result = String.prototype.concat(...camelized);
  return result;
}
