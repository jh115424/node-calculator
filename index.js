let rs = require("readline-sync");
const operators = ["/", "*", "-", "+"];
let firstNumber = 0;
let secondNumber = 0;

let userQuestion = rs.question("What operation would you like to perform? ");
console.log = rs.question(
  "Please select one of the following operations:  / , * , - , or + : "
);

let wrongOperator = rs.question(
  "That is not a valid operation, please restart program. "
);

let userQuestionTwo = rs.question("what operation would you like to perform? ");
console.log = rs.question(
  "Please select one of the following operations:  / , * , - , or + : "
);

console.log = rs.question(
  "This is not a valid operation, please restart program. "
);

const numbers = ["1", "2", "3", "4", "5", "6", "7"];

firstNumber = rs.question(
  " Please enter the first number: 1 , 2 , 3 , 4 , 5 , 6 , 7: "
);

let wrongOperatorTwo = rs.question(
  " This is not a number, please restart program. "
);

let userQuestionThree = rs.question(
  "what operation would you like to perform? "
);
console.log = rs.question(
  "Please select one of the following operations: 1 , 2 , 3 , 4 , 5 , 6 , 7: "
);

console.log = rs.question(" That is a valid operation! ");

secondNumber = rs.question(
  "Please enter the second number: 1 , 2 , 3 , 4 , 5 , 6 , 7: "
);
console.log = rs.question(" This is not a number, please restart program. ");

let userQuestionFour = rs.question(
  "Please enter the second number: 1 , 2 , 3 , 4 , 5 , 6 , 7: "
);

console.log = rs.question("That is the valid operation! ");

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

console.log = rs.question(
  makeCalculation(operators, firstNumber, secondNumber)
);
