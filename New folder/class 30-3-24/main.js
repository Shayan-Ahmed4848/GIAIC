// function greet() {
//     return "Hello world!";
// }
// let message = greet(); // now we are calling the function
// console.log(message);
// function greet() {
//     return "Hello world!";
// }
// let message: string = greet(); // now we are printing that function
// console.log(message);
// function sum() {
//     return 2 + 2;
// }
// console.log(sum());
// function sum() {
//     return 2 + 2;
// }
// let result = sum();
// console.log(result);
// function sum(num1,num2) {
//     return num1 + num2;
// }
// let result = sum(5,5);
// console.log(result);
// function sum(num1:number,num2: number) {
//     return num1 + num2;
// }
// let result = sum(5,5);
// console.log(result);
// function sum(num1:number,num2: number) {
//     return num1 + num2;
// }
// let result = sum(8,5);
// console.log(result);
// function greet(message = "hello") {
//     return message;
// }
// console.log(greet());
// function greet(message = "hello") {
//     return message;
// }
// console.log("Hello world");
function greet(message) {
    if (message === void 0) { message = "wear a sunglasses"; }
    return message;
}
console.log(greet());
