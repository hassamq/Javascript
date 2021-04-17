let arr=[1,2,3];

//array push,pop,shift,unshift
arr.push(4);
arr.push(5);
arr.unshift(0);
arr.shift();
arr.pop();
console.log(arr);

//concat , reverse , index of , includes

let arr2=[10,20,30,40];
arr2 =arr.concat(arr2);
console.log("Array 1 = " +arr);
console.log("Array 2 ="+arr2);
 

let b =arr.reverse();
console.log("Reverse of array 1 = "+b);


console.log("10 is at "+arr2.indexOf(10)+" of array 2");


if(arr.includes(4)){
    console.log("4 exists in array 1");
}


//Reference type and equality

console.log([1,2,3]==[1,2,3]);
console.log([1,2,3]===[1,2,3]);
let new1 =[1,2,3];
let new2 =[1,2,3];
console.log(new1===new2);

new1=new2;
console.log(new1===new2);


//constant arrays
const a=[1,2,3];
a.push(4);
//a=[1];  error
a.pop();

console.log(a);


//dimensional arrays
let dim = [[1,2,3],['ali','ahmed'],[1.1,2.2,3.3]];
console.log(dim);



