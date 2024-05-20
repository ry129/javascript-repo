//JS is dynamically typed language

// # primitive(call by value)


//7 types: String,Number,Boolean,null,undefined,Symbol,BigInt
const score=100
const scoreVlue=100.3
const isLoggedIn=null;
const outsideTemp=null;
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);
//const bigNumber=345678n;




// # Reference(Non Primitive)


// Array,Objects,Functions
const heros=["shaktiman","naagraj","doga"]
let myObj={
    name:"riya",
    age:21,
}
const myFunction = function(){
    console.log("hello world");
}
console.log(typeof bigNumber);

//********************Memory********************************/

// Stack(Primitive), Heap (Non-Primitive)

let myYoutubename = "riya@gmail.com"
let anothername=myYoutubename
anothername="chaiorcode"

console.log("myYoutubename");
console.log("anothername");

// for heap
let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}
let userTwo = userOne
userTwo.email="riya@google.com"
console.log(userOne.email);
console.log(userTwo.email);