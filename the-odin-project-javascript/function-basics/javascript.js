function add7(a) {
	return a + 7;
}

function multiply(a, b) {
	return a * b;
}

function capitalize(text) {
	const firstLetter = text.at(0).toUpperCase();
	const remainder = text.substring(1, text.length).toLowerCase();
	return firstLetter + remainder;
}

function lastLetter(text) {
	if (text.length <= 1) {
		return text;
	}
	const lastIndex = text.length;
	return text.substring(lastIndex - 1, lastIndex);
}

console.log(add7(10));
console.log(multiply(3, 2));
console.log(capitalize("abcd"));
console.log(capitalize("ABCD"));
console.log(capitalize("aBcD"));
console.log(lastLetter("abcd"));
