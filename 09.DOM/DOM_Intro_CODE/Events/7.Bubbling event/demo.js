let btn = document.querySelector('button');
btn.addEventListener('click',(e)=>{
    btn.style.backgroundColor=generate_color();
    btn.style.color=generate_color();
    e.stopPropagation();
   
});

function generate_color(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`;
}


let div=document.querySelector('#container');
div.addEventListener("click",()=>{
  div.classList.toggle("hide");
});