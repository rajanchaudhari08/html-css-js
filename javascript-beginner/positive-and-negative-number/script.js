/* Write a JavaScript code to get positive numbers from array of integers */

const integers = [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5];

const getPositiveIntegers = integers.filter((integer) => integer > 0);

console.log(getPositiveIntegers);

/* Write a JavaScript code to get negative numbers from array of integers */

const getNegativeIntegers = integers.filter((integer) => integer < 0);

console.log(getNegativeIntegers);
