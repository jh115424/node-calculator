let rs = require("readline-sync");

let firstNumber = 0;
let secondNumber = 0;
const operators = ["/", "*", "-", "+"];

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

let userQuestion = rs.question("What operation would you like to perform? ");

mathOperator = rs.question(
  "Please select one of the following operators:  / , * , - , or + :) "
);
while (!operators.includes(mathOperator)) {}
console.log("That is not a valid operation, please restart program. ");

firstNumber = rs.questionInt("Please enter the first number: ");
limitMessage: "This is not a number, please restart program. ";
{
}

secondNumber = rs.questionInt("Please enter the second number: ");
limitMessage: "This is not a number, please restart program. ";
{
}
console.log("You have entered a valid answer!");

console.log(makeCalculation(mathOperator, firstNumber, secondNumber));
