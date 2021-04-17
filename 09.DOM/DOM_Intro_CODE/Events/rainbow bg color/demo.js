const btn = document.querySelector('#bg_btn');
const h1=document.querySelector('h1');
btn.addEventListener("click",()=>{
   let new_color=generate_color();
   console.log(new_color);
   document.body.style.backgroundColor=new_color;
   h1.innerText=new_color;


});

const newbtn=document.querySelectorAll("#color");
for(let b of newbtn){
    b.addEventListener("click",colorize);
}

const newh1=document.querySelectorAll("#h1_color");
for(let hd  of newh1){
    hd.addEventListener("mouseover",colorize);
}

function colorize(){
    this.style.backgroundColor=generate_color();
    this.style.color=generate_color();
    console.log(generate_color());
     
     
     
}


function generate_color(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}