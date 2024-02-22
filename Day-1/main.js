let numbers = [2, 4, 6, 8, 10];
console.log("Original Array ", numbers);

let numbersMultiplied = numbers.map((num) => num * 2);
console.log("Multiplied Array ", numbersMultiplied);

let numbersIndexes = [];
for (i = 0; i < numbers.length; i++) {
  numbersIndexes.push(i);
}
console.log("Index of each element Array ", numbersIndexes);
