// /* Global Variable : which can be used in a whole program(whole scope) anywere... */
/*local scope : ( ) this is block */
// let age = 18;
// if (true)
// {
//      console.log(age)
// }
// let age = 18;
// let firstName = "Ali"
// if (true){
//     let firstName = "Humza"
//     console.log(age)
//     console.log(firstName) // Humza will print not Ali because whatver variable is in block will print.
// }
var age = 18;
var firstName = "Ali";
if (true) {
    var firstName_1 = "Humza";
    console.log(age);
    console.log(firstName_1); // Humza will print not Ali because whatver variable is in block will print.
}
