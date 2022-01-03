// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

var num1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

var num2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("fibFunction", () => {
  it("takes a number and returns array in Fibonacci sequence", () => {
// set expect to equal an array of the length of the number, with the values being the Fibonacci sequence
    expect(fibFunction(num1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(fibFunction(num2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})

// Run the test to make sure you receive red error message that function name is not defined.
// Note: Jest test produced desired "red message"

// b) Create the function that makes the test pass.

const fibFunction = (num) => {

// create array to return. Set first and second index to 1 and 1
var fib = [1, 1];
// create if statement for edge cases where number is less than 3
if (num < 3){
  return [];
// create else statement for other cases
} else {
// create for loop to iterate once per value of number
for (var i = 2; i < num; i++) {

  // Fibonacci sequence formula: Xn = Xn-1 + Xn-2
  let first = fib[i - 2];
  let second = fib[i - 1];
  fib[i] = first + second;
// push the next value into the array
  fib.push(fib[i])
}

// I can't figure out why but this functions is pushing two of the last index
// into the array. Using .pop() gives me the desired output. Not how I wanted
// to solve it but it works.
  fib.pop()
  return fib
}
}

// Note: function produces green "passed" message. Function refactored, as needed.


// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("orderedOdds", () => {
  it("takes an array of numbers and returns the odds in order of least to greatest", () => {
// set expect to equal an array of odds from least to greatest
    expect(orderedOdds(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(orderedOdds(fullArr2)).toEqual([-823, 7, 23])
  })
})

// Run the test to make sure you receive red error message that function name is not defined.
// Note: Jest test produced desired "red message"


// b) Create the function that makes the test pass.

const orderedOdds = (array) => {
// create a new array to push desired values into
  var newArray = []
// loop over the array
  for (var i=0; i < array.length; i++){
// set if statement to search for numbers that are odd
    if (typeof array[i] === "number" && (array[i] % 2 === 1 || array[i] %2 === -1)){
// push numbers that are odd into new array
      newArray.push(array[i])
// use arrow function to sort through array
      newArray = newArray.sort((a, b) => a - b);
    }
  }
  return newArray
}

// Note: function produces green "passed" message. Function refactored, as needed.


// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

var numbersToAdd1 = [2, 4, 45, 9]
// Excpected output: [2, 6, 51, 60]

var numbersToAdd2 = [0, 7, -8, 12]
// Expected output: [0, 7, -1, 11]

var numbersToAdd3 = []
// Expected output: []

// Create Jest test using syntax example from syllubus with describe, it, and expect statements.
describe("someFunction", () => {
  it("takes an array of numbers and returns an array with each number having the value of the previous number added to it", () => {
// set expect to equal an array of numbers, with each following number having the previous added to it
    expect(someFunction(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(someFunction(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(someFunction(numbersToAdd3)).toEqual([])
  })
})

// Run the test to make sure you receive red error message that function name is not defined.
// Note: Jest test produced desired "red message"


// b) Create the function that makes the test pass.

const someFunction = (array) => {
// create if statement for edge case
  if (array.length < 1){
    return []
// create else statement for other cases
  } else {
// create new array variable and set index zero to what it already is
  var summed = [array[0]];
// iterate over the array starting with index 1
  for (var i=1; i < array.length; i++){
// push the value of array[i], with the previous value, in the new array, into the new array
    summed.push(array[i] + summed[i -1])
  }
  }
  return summed
}
