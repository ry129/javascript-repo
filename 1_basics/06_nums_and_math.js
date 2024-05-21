const score=100

const balance=new Number(score)
console.log(balance);


console.log(balance.toString().length);
console.log(balance.toFixed(2));

const otherNumber=23.8966
console.log(otherNumber.toPrecision(3));

const hundreds=1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));

//*************************Maths*************************/

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.3));
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.min(4,3,6,8))

console.log(Math.random());//value lies between 0 and 1

console.log((Math.random()*10)+1);// if we want value lies to be between 0 and 6 and many more according to the value.

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
