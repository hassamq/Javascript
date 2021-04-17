      //Default parameter:If you don't pass parameter it automatically give value to the parameter

      function rollDie(Sides=6){
          console.log(Sides);
      }

      rollDie(20);

      //Spread function

    let nums=[2,3,5,6,7,913,10010];
    
    console.log(Math.max(nums));
    console.log(Math.max(...nums));//will pass each array element as a parameter
    console.log(nums);
    console.log(...nums);
     //using spread in objects
     let obj ={name:'Ali',age:34};
    let obj1={...obj,gender:'male'};
    console.log(obj1);
    

    //Rest parameter

  function sum(...nums){
    return nums.reduce((first,current)=>first+current)

  }


//Destructing arrays

let scores=[100,99,89,45,34,21];
const[gold,silver,bronze,...runners]=scores;
console.log(gold);
console.log(silver);
console.log(bronze);
console.log(runners);

//Destructing objects
let details={
  name:"Something",
  age:"19",
  gender:"M",
  address:"asdasdasfafa"
}
const{name:username,age,gender,address}=details;
console.log(username);
console.log(address);

