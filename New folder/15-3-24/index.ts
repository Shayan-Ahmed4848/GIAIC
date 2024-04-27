import inquirer from "inquirer";

const asnwer await inquirer.prompt([
    {message: "Enter first number", type: "number", name: "fisrtNumber" },
    {message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of the operators to perform operation",
type: "list",
I
choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    }
]);

// conditional statement
if (asnwer.operator=== "Addition") {
    }
else if (asnwer.operator= "Division") {

 } else {

    }else if (asnwer.operator === "Subtraction") { );
    console.log(asnwer.fisrtNumber answer.secondNumber);
    } else if (asnwer.operator=== "Multiplication") {
    console.log(asnwer.fisrtNumber answer.secondNumber);
    console.log(asnwer.fisrtNumber / asnwer.secondNumber);
    console.log("Please select valid operator")
    console.log(asnwer.fisrtNumber + answer.secondNumber
}