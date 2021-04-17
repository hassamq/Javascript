
const jokelist=document.querySelector('ul');


const addjoke=async()=>{
  const jokeText=await getdadjoke();
  console.log(jokeText);
  const newLI= document.createElement('LI');
  newLI.append(jokeText);
  jokelist.append(newLI);
}


const getdadjoke=async()=>{
    try {
        const config ={headers :{accept:'application/json'} }
        const res = await axios.get('https://icanhazdadjoke.com/',config);
        return res.data.joke;
        
    } catch (error) {
        console.log("NO more jokes:(");
    }
   
}

const btn =document.querySelector('button');
btn.addEventListener('click',addjoke);
