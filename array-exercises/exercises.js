// ====> Exercise 1 <====
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
  const rawWords = text.split("-");
  const camelized = rawWords.map((item, index) => {
    if (index !== 0) {
      const firstLetter = item.slice(0, 1);
      const remainder = item.slice(1);
      item = firstLetter.toUpperCase() + remainder;
    }
    return item;
  });
  const result = String.prototype.concat(...camelized);
  return result;
}

// ====> Exercise 2 <====
function exercise2() {
  let arr = [5, 3, 8, 1];

  let filtered = filterRange(arr, 1, 4);

  console.log(`filtered = ${filtered} === 3,1`); // 3,1 (matching values)
  console.log(`arr = ${arr} === 5,3,8,1`); // 5,3,8,1 (not modified)
}

function filterRange(arr, a, b) {
  // We might have to use a filter to clamp the values between a and b (inclusive)
  return arr.filter((item) => a <= item && item <= b);
}
