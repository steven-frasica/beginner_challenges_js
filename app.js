console.log("it worked");

// 1 . Create a function that returns the sum of two numbers
const addition = (num1, num2) => {
  return num1 + num2;
};

console.log(addition(2, 3));
console.log(addition(-1, -4));
console.log(addition(-1, 5));
console.log(addition(10, -12));

// 2. Create a function that converts hours into seconds
// function hoursIntoSeconds(hour) {
//   return hour * 60**2;
// }

// const hoursIntoSeconds = (hour) => {
//   return hour * 60 ** 2;
// };

const hoursIntoSeconds = (hour) => hour * 60 ** 2;

console.log("hoursIntoSeconds 5", hoursIntoSeconds(5));
console.log("hoursIntoSeconds 1", hoursIntoSeconds(1));
console.log("hoursIntoSeconds 2", hoursIntoSeconds(2));
console.log("hoursIntoSeconds 4", hoursIntoSeconds(4));
console.log("hoursIntoSeconds 6", hoursIntoSeconds(6));

// 3. Calculate the Perimeter of a Rectangle
// Create a fn that takes length and width of a rectangle and return its perimeter

const calcPerimeter = (length, width) => {
  // return length * 2 + width * 2;
  return (length + width) * 2;
};

console.log("calcPerimeter 6, 7", calcPerimeter(6, 7));
console.log("calcPerimeter 5, 4", calcPerimeter(5, 4));
console.log("calcPerimeter 2, 9", calcPerimeter(2, 9));

// 4. Calculate the Area of a Triangle
// write a function that takes the base and height of a triangle and return its area.

const calcTriangleArea = (base, height) => {
  return 0.5 * base * height;
};

console.log("calcTriangleArea 3, 2", calcTriangleArea(3, 2));
console.log("calcTriangleArea 10, 10", calcTriangleArea(10, 10));
console.log("calcTriangleArea 20, 20", calcTriangleArea(20, 20));

// 5. Extend a string
// Write a fn that acccepts a string and add 'Frontend' onto the end of it.
// Accept a string
// Adding strings is similar to adding numbers
// Don't forget to return your result

// using function keyword
// function appendFrontend(str) {
//   return str + 'Frontend;'
// }

// arrow function
const appendFrontend = (str) => str + "Frontend";

console.log(appendFrontend("Apple"));
console.log(appendFrontend("Banana"));
console.log(appendFrontend("Pear"));
console.log(appendFrontend("Orange"));

// 6. Greater than 100?
// Given two numbers, return true if the sum of both numbers is greater than 100. Otherwise, return false

const sumGreaterThan100 = (num1, num2) => num1 + num2 > 100;

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(200, 10));
console.log(sumGreaterThan100(100, -50));

// long function form
// function sumGreaterThan100(num1, num2) {
//   if (num1 + num2 > 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

console.log(sumGreaterThan100(100, -50));

// 7. Less than or Equal to Zero?
// Write a fn that accepts a number and returns true if it is less than or equal to zero, otherwise returns false.

// long function form
// function lessThanOrEqualToZero(num) {
//   return num <= 0;
// }

// arrow function
const lessThanOrEqualToZero = num => num <= 0;

console.log('lessThanOrEqualToZero 2', lessThanOrEqualToZero(2));
console.log('lessThanOrEqualToZero -3', lessThanOrEqualToZero(-3));
console.log('lessThanOrEqualToZero 0', lessThanOrEqualToZero(0));

// 8. Opposite boolean
// Given a boolean (true or false), return the opposite boolean

const oppositeBoolean = bool => !bool;

console.log("oppositeBoolean true", oppositeBoolean(true))
console.log("oppositeBoolean false", oppositeBoolean(false))

// 9. Not the number 0
// Given any element, return true if it is not the number 0

const notNumberZero = num => num !== 0;

console.log('0', notNumberZero(0))
console.log('5', notNumberZero(5))
console.log('null', notNumberZero(null))

// 10. Calculate the remainder
// Given two numbers, return their remainder when divided by each other.

const calcRemainder = (num1, num2) => num1 % num2;

console.log('calcRemainder',calcRemainder(4, 2))
console.log('calcRemainder',calcRemainder(7, 8))
console.log('calcRemainder',calcRemainder(9, 8))

// 11. Is the number odd?
// Given two numbers, return true if the number is odd

const isOdd = num => num % 2 !== 0

console.log('1', isOdd(1))
console.log('2', isOdd(2))
console.log('3', isOdd(3))
console.log('88', isOdd(88))

// 12. Is number even? return 1 if true, return -1 if false

const isNumberEven = num => num % 2 === 0 ? 1 : -1;

function boolInteger(num) {
  return num % 2 === 0 ? 1 : -1;
}

function booleanInteger(num) {
  if (num % 2 === 0) {
    return 1;
  }
  return -1;
}

console.log('booleanInteger', booleanInteger(2))

console.log("isNumberEven 2", isNumberEven(2))
console.log("isNumberEven 11", isNumberEven(11))
console.log("isNumberEven 8", isNumberEven(8))
console.log("isNumberEven 9", isNumberEven(9))

// 13. Check if a user is logged in AND subscribed

const isLoggedInAndSubscribed = (str1, str2) => str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED';

console.log(isLoggedInAndSubscribed("LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInAndSubscribed("NOT_LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInAndSubscribed("LOGGED_IN", "NOT_SUBSCRIBED"))

function loggedAndSubbed(str1, str2) {
  return str1 === 'LOGGED_IN' && str2 === 'SUBSCRIBED'
}

console.log(loggedAndSubbed("LOGGED_IN", "SUBSCRIBED"));

// 14. Check if a user is logged in OR subscribed

const isLoggedInOrSubscribed = (str1, str2) => str1 === "LOGGED_IN" || str2 === "SUBSCRIBED";

console.log(isLoggedInOrSubscribed("LOGGED_IN", "UNSUBSCRIBED"))
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"))
console.log(isLoggedInOrSubscribed("LOGGED_IN", "SUBSCRIBED"))
console.log(isLoggedInOrSubscribed("LOGGED_OUT", "UNSUBSCRIBED"))

