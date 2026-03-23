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
  const initial = arr.slice();
  const result = arr.sort().reverse();

  console.log(
    `from: '${initial}' >> to: '${[8, 5, 2, 1, -10]}' >> result: '${result}'`,
  );
  // 8, 5, 2, 1, -10
}

// ====> Exercise 5 <====
function exercise5() {
  let arr = ["HTML", "JavaScript", "CSS"];
  const initial = arr.slice();

  let sorted = copySorted(arr);
  console.log(
    `from: '${initial}' >> to: '${["CSS", "HTML", "JavaScript"]}' >> result: ${sorted}`,
  );
  console.log(`from: '${initial}' >> to: '${initial}' >> result: ${arr}`);
}

function copySorted(arr) {
  const copy = arr.slice();
  copy.sort();
  return copy;
}

// ====> Exercise 6 <====
function exercise6() {
  let arr = [1, 2, 3];
  console.log(`initial = '${arr}'`);

  for (let i = 0; i < 5; i++) {
    shuffle(arr);
    console.log(`after shuffle: '${arr}'`);
  }
}

function shuffle(arr) {
  for (let i = 0; i < arr.length; i++) {
    const randomIndex = randomUpTo(arr.length - 1);
    const temp = arr[i];
    arr[i] = arr[randomIndex];
    arr[randomIndex] = temp;
  }

  function randomUpTo(maxRandom) {
    return Math.floor(Math.random() * (maxRandom + 1));
  }
}

// ====> Exercise 7 <====
function exercise7() {
  let strings = [
    "Hare",
    "Krishna",
    "Hare",
    "Krishna",
    "Krishna",
    "Krishna",
    "Hare",
    "Hare",
    ":-O",
  ];
  const result = unique(strings); // Hare, Krishna, :-O
  console.log(`to: '${["Hare", "Krishna", ":-O"]}'; result: '${result}'`);
}

function unique(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!result.includes(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}
