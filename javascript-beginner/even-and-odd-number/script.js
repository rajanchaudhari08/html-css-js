/* Write a JavaScript code to get even numbers from array of integers */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumbers = numbers.filter((integer) => integer % 2 === 0);

console.log(getEvenNumbers);

/* Write a JavaScript code to get odd numbers from array of integers */

const getOddNumbers = numbers.filter((integer) => integer % 2 !== 0);

console.log(getOddNumbers);

/* Write a JavaScript code to get positive numbers from array of integers */

const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const getPositiveIntegers = integers.filter((integer) => integer > 0);

console.log(getPositiveIntegers);
