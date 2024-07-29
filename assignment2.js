// Task 1 : Cube of numbers
function cubeNumbers(numbers) {
  return numbers.map((number, index) => number ** 3);
}

// Task 2 : Sum of all numbers
function sumAllNumbers(numbers) {
  return numbers.reduce((acc, num) => num + acc, 0);
}

// Task 3: Use filter to find all prime numbers in an array
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i < Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function getAllPrimeNumbers(numbers) {
  return numbers.filter(isPrime);
}

// Task 4 : Use map, reduce, and filter to calculate the average of squared odd numbers in an array
function averageOfSquaredOdds(numbers) {
  const squaredOdds = numbers
    .filter((num) => num % 2 !== 0)
    .map((num) => num ** 2);
  const sumOfSquares = squaredOdds.reduce((acc, num) => acc + num, 0);
  return squaredOdds.length === 0 ? 0 : sumOfSquares / squaredOdds.length;
}

// Task 5 : Use map, reduce, and filter to find the longest string in an array of strings
function findLongestString(strings) {
  return strings.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );
}

// Task 6: Use map to capitalize the first letter of each word in a sentence
function capitalizeFirstLetter(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Task 7: Use filter to find all students who passed the exam
function getPassingStudents(students) {
  return students.filter((student) => student.score >= 60);
}

// Task 8 : Create a Private Counter for Multiple Instances
function createInstanceCounter() {
  let count = 0;
  return function () {
    count += 1;
    return count;
  };
}
const counter1 = createInstanceCounter();
const counter2 = createInstanceCounter();

// Task 9: Create a Promise-Based Calculator
function calculator(a, b, operation) {
  return new Promise((resolve, reject) => {
    if (operation === "add") {
      resolve(a + b);
    } else if (operation === "subtract") {
      resolve(a - b);
    } else if (operation === "multiply") {
      resolve(a * b);
    } else if (operation === "divide") {
      if (b === 0) {
        reject("Error: Division by zero");
      } else {
        resolve(a / b);
      }
    } else {
      reject("Error: Invalid operation");
    }
  });
}

// Task 10 : Calculate Total Score
function calculateTotalScore(objects) {
  let totalScore = 0;
  objects.forEach((obj) => {
    totalScore += obj.score;
  });
  return totalScore;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const strings = [
  "short string",
  "medium string",
  "a very long string",
  "long string",
];
const sentence = "hello world this is a test";
const students = [
  { name: "Alice", score: 50 },
  { name: "Bob", score: 80 },
  { name: "Charlie", score: 60 },
];
const objects = [{ score: 10 }, { score: 20 }, { score: 30 }];

console.log("Task 1 \n");
console.log(cubeNumbers(numbers));
console.log("Task 2 \n");
console.log(sumAllNumbers(numbers));
console.log("Task 3 \n");
console.log(getAllPrimeNumbers(numbers));
console.log("Task 4 \n");
console.log(averageOfSquaredOdds(numbers));
console.log("Task 5 \n");
console.log(findLongestString(strings));
console.log("Task 6 \n");
console.log(capitalizeFirstLetter(sentence));
console.log("Task 7 \n");
console.log(getPassingStudents(students));
console.log("Task 8 \n");
console.log(counter1());
console.log(counter1());
console.log(counter2());
console.log(counter2());
console.log("Task 9 \n");
calculator(10, 5, "add")
  .then((result) => console.log("Task 9.1 : " + result))
  .catch((error) => console.error("Task 9.1 : " + error));
calculator(10, 0, "divide")
  .then((result) => console.log("Task 9.2 : " + result))
  .catch((error) => console.error("Task 9.2 : " + error));
console.log("Task 10 \n");
console.log("Task 10 : " + calculateTotalScore(objects));
