                            //For each function
let f=[2,3,4,5];
f.forEach(function(n){
  console.log(n*n);
}

);

                //Map function
  let even=f.map(function(n){
      return n-1;
  });
  console.log(even);
                
                //Arrow function

    let add_arrays=(f,even)=>{    //let add_arrays=(f,even)=>return f+even ;
                                  //f,even are the parameters and statment after => is return statement

        return f+even;
    }


                //SetTimeout and setInterval
        /*setTimeout*/
    setTimeout(console.log("Hello!!!"),3000);//not works , we have to pass some function as a argument
    setTimeout( ()=>{
        console.log("Are you there!!!")}
        ,3000);
    console.log("BYE!!!!");

    /*setInterval*/
    let id =setInterval(()=>{
     //console.log((Math.random()))     ;
    }
    ,2000                                   /*This function will generate a unique id after every 2 sec*/

    );
     

                      //Filter methods 

    let odd =f.filter(n=>n%2==1);   //n is the argument coming from f 
    console.log(odd);



                 //Some and every methods
    let scores=[32,80,99,100,24,54,67];
    
    console.log(scores.every(n=>n<50));   //every function
    console.log(scores.some(n=>n<50));    //some function



           //reducing function

let pr=[1,2,3,4,5,6,7,8,9,10];
let n=pr.reduce((pre_n,num)=>
 pre_n+num
 );
console.log(n);


    



    