//array

const myArr=[0,1,2,3,4,5]
const myHeros=["shaktiman","doremon"];
const myArr2=new Array(1,3,2,4);
console.log(myArr[0]);

//Array Methods

myArr.push(6)//it simply add the value to the array.
myArr.pop()//it removes the last value from array.
myArr.unshift(9);//it adds the value at first index of array and shifts the rest value.
myArr.shift();
console.log(myArr.includes(9));
console.log(myArr.indexOf(9))//the number whic is not present in array it gives -1 for that
const newArr=myArr.join()//it changes array to string format.
console.log(typeof newArr);

console.log(myArr);
//slice,splice
console.log("A ",myArr);
const myn1=newArr.slice(1,3);//it does not include last value
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3); 
console.log("C ",myArr);//it changes its original array in that it does not print the value which is in splice 1,3 it prints rest all value 0,4,5.
console.log(myn2);//it include last value

