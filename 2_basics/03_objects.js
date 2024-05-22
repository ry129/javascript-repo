//singleton
//object which makes with constructor makes singleton.constructor//singleton is not made by literal.
// object literals

Object.create //singleton made with constructor
const mysym=Symbol("key1")
const JsUser={
    name:"Riya",
    "full name":"Riya Yadav",//cant acces by dot(.)
    [mysym]:"mykey1",
    age:18,
    location:"Bhopal",
    email:"Riya@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Tuesday"]
}
console.log(JsUser.email)
console.log(JsUser["email"]);

JsUser.email="riya@chatgpt.com"//this will chnage the value of email
//Object.freeze(JsUser)//we cant chng the value of any object.

JsUser.greeting=function(){
    console.log("Hello Js user");
}
console.log(JsUser.greeting);

JsUser.greetingTwo=function(){
    console.log(`Hello JsUser , ${this.name}`);
}
    console.log(JsUser.greetingTwo());
