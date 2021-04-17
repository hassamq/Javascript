async function  hello(){
    //will return a promise
}

const sing=async()=>{
    throw new Error("UH OH!!!");
   return "LA LA LA LA";
}

sing()
     .then(data=>console.log("The data is : "+data))
     .catch(err=>console.log("Error occurred: "+err))