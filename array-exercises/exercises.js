// ====> Exercise 1 <====
function exercise1() {
  console.log(
    `"background-color" >> "backgroundColor" >> ${camelize("background-color") == "backgroundColor"}`,
  );
  console.log(
    `"list-style-image" >> "listStyleImage" >> ${camelize("list-style-image") == "listStyleImage"}`,
  );
  console.log(
    `"-webkit-transition" >> "WebkitTransition" >> ${camelize("-webkit-transition") == "WebkitTransition"}`,
  );
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

// ====> Exercise 3 <====
function exercise3() {
  let arr = [5, 3, 8, 1];
  let initial = arr.slice();
  filterRangeInPlace(arr, 1, 4);
  console.log(`from: '${initial}' >> to: '${[3, 1]}' >> result: ${arr}`);
}

function filterRangeInPlace(arr, a, b) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < a || b < arr[i]) {
      arr.splice(i, 1);
    }
  }
}

// ====> Exercise 4 <====
function exercise4() {
  let arr = [5, 2, 1, -10, 8];
  const initial = arr;
  const result = arr.sort().reverse();

  console.log(
    `from: '${initial}' >> to: '${[8, 5, 2, 1, -10]}' >> result: '${result}'`,
  );
  // 8, 5, 2, 1, -10
}

exercise4();
