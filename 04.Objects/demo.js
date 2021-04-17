//creating objects
let obj = {firstname:'Ali',lastname:'something'};

//accessing values from objects
console.log(obj);
console.log(obj.firstname);
console.log(obj['lastname']);


//modify values of object
obj.firstname='changed';
console.log(obj.firstname);

                                        //nested objects
//objects inside array

let array=[
{product:'abc',price:'123',quantity:'1'},
{product:'bca',price:'321',quantity:'2'},
{product:'xyz',price:'000',quantity:'0'}
];
console.log(array[0]);
console.log(array[0].product); //accessing value of object from inside of an array

//arrays inside objects
let obj1={
    name:'something',
    age:'19',
    subjects:['urdu','english','computer']
};

console.log(obj1);
