let rs = require("readline-sync");



function makeCalculation(operators, firstNumber, secondNumber) {
  if (operators === "+") {
    return firstNumber + secondNumber;
  } else if (operators === "-") {
    return firstNumber - secondNumber;
  } else if (operators === "*") {
    return firstNumber * secondNumber;
  } else {
    return firstNumber / secondNumber;
  }
}

const arrQuestion = ["+", "-", "*", "/"];

const userQuestion = (arrQuestion) => {
  const question = rs.question("What operation would you like to perform? ", {
    limit: arrQuestion,
    limitMessage: `$<lastInput> is not a valid operation. Please try again.`,
  });
  console.log(`${question} is a valid operation`);
  return question;
};

const operator = userQuestion(arrQuestion);

const firstNumber = rs.questionInt("Please enter the first number: ", {
  limitMessage: "This is not a number, please restart program. ",
});

const secondNumber = rs.questionInt("Please enter the second number: ", {
  limitMessage: "This is not a number, please restart program. ",
});

console.log("You have entered a valid answer!");

console.log(firstNumber, userQuestion, secondNumber);

console.log('The result is ', makeCalculation(operator, firstNumber, secondNumber));


