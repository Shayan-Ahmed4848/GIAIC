/*.......Hoisting......*/


// console.log(age)
// var age = 18;


// console.log("Hello World");

// var age = 18;

// console.log(age);


/*-------------------------------------------------------*/

// // var num1; // Hoisting 
// if (true) {
//     var num1 = 18;
// }

// console.log(num1);


/*--------------------------------------------------*/



// let myName = "Hamzah";
// let rollnumber = 1234;
// let subject = "computer";

// let examSheet = {
//     name: "Hamzah",
//     rollNumber: 1234 ,
//     Subject: "Computer",
// } ;

// console.log(examSheet);


// let message = `my name is: ${examSheet.name}and my rollNumber is:`
// ${examSheet.rollNumber}



// let Car = {
//  Name: "Toyota",
// Model: 786,
// Class: "xli",
// }
// let Detail = `My car name is Corolla ${Car.Model}`






/* import different files in a main file and use this is called modules


1.npm Init--yes 
2.npm install Inquirer
3.npm i -- save-dev---(copy from error)
4.line no. 14 change in tsconfig change version to e2020
5. line 30 "Module"change to "ModelNext"
6.line 28 30 "Module resolution" change to " ModdeNext"
7.Add "type" : "module" in packag.jsaon

*/


//  import inquirer from "inquirer";

// let answer = await inquirer.prompt(
//  {
//     name : "q1", // this is name 
//     message : " what is your name ", // this is message
//      type : "input", // type is input
//  }

// )

// console.log(answer.q1)




import inquirer from "inquirer";

let answer = await inquirer.prompt(
 {
    name : "q1", // this is name 
    message : " what is your name ", // this is message
     type : "input", // type is input
 }

)

console.log(answer.q1)
























