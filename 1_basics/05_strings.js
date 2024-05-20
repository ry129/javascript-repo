const name= "hituu"
const repoCount= 20
//console.log(name + repoCount + "value"); //-- outdated version.

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// second format to define string

const gameName = new String('hitu-hc-com')
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)
console.log(newString);
const anotherString=gameName.slice(-6,4)
console.log(anotherString);

const newStringOne = "     riyesh      "
console.log(newStringOne.trim());//trim start and trim end are also function of trim

const url="https://riya.com/riya%30yadav";

console.log(url.replace('%30','-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));

