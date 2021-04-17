//change event

let input=document.querySelector('input');
let h1=document.querySelector('h1');
input.addEventListener('change',()=>console.log('changed!!!'));
//input event
input.addEventListener('input',()=>{
    console.log('input!!!');
    h1.innerText=input.value;
}
    );
