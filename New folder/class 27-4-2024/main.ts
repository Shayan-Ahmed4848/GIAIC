// // Defining a basic object in typeScript

//let person: { name: string; } =\

//name: "Ameen Alam",

//};

//console.log(person.name);

// // Output: Ameen Alam

// let user1 = {            // Object

//     name: "Ahmed",

//     age: 36,

//     role: "father",

//};

// console.log(user1.name);



// let user1: {          // Object

//     name: string ,

//     age: number ,

//     role: string ,

// } = {

//     name:"ahmed",

//     age: 36,

//     role: "father",

// };

// console.log(user1);

// Type Literals

// ONLY Defined Given Set Data Types and Words

// let Trafficlight: "Red" | "Green" | "Blue" = "Blue" ;

// Type Intersection 

type Student = {
    Name : String ;
    RollNumber : Number ;
};

type Teacher = {
    Name : String ;
    Experience : Number ;
};

let Student_01 : Student = {
    Name : "Muhammad Shayan Ahmed" ,
    RollNumber : 57287 ,
};

let Teacher_01 : Teacher = {
    Name : "Sir Hamzah" ,
    Experience : 8 ,
};

let both : Teacher & Student = {
    Name : "Bilal",
    RollNumber : 54321 ,
    Experience : 4 ,
};

