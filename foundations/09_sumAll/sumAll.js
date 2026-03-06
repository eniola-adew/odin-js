const sumAll = function (...args) {
  let firstNumber = args[0];
  let secondNumber = args[1];
  const arrOfNumbers = [];
  for (let i = firstNumber; i <= secondNumber; i++) {
    arrOfNumbers.push(i);
  }
  const sumOfNumbers = arrOfNumbers.reduce((acc, curr) => acc + curr);
  console.log(arrOfNumbers);
  console.log(sumOfNumbers);
};

sumAll(2, 6);
