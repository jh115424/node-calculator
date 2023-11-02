let rs = require("readline-sync");

let operationPerform = rs.question(
  "What operation would you like to perform? "
);

let userEnterOptions = rs.question("Enter your operation: ");

let symbols = rs.question[("+", "-", "*", "/")];

let invalidCharacter = rs.question("That is not a valid character ");

let restart = rs.question("Restart the program. ");






function invalidOperation() {

  if (symbols === "/") {
    console.log(invalidCharacter + "That is not a valid operation ");
          console.log("Try again ")
  } else if (symbols === "+") { 
    console.log(restart + "Restart the program ");
  }
}



let numbers = [];
let newProgram = rs.question("Please enter the first number "); 

function validOperation() {

     if(numbers === 0) {
          console.log(newProgram + "Please enter the first number ")

} else if (numbers.length === a) {
     console.log(invalidCharacter + "This is not a number")
}

}

