/* Write a JavaScript code to get even numbers from array of integers */

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getEvenNumbers = numbers.filter((integer) => integer % 2 === 0);

console.log(getEvenNumbers);
