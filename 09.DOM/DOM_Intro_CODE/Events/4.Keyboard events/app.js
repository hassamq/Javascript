const btn = document.querySelector("button");
btn.addEventListener("click",(evt)=>console.log(evt));

const input=document.querySelector("input");
input.addEventListener("keydown",(evt)=>console.log(evt.code,evt.key));


window.addEventListener("keydown",(evt)=>{
    switch(evt.code){
        case'ArrowUp':
        console.log("up!!!");
        break;
        case'ArrowDown':
        console.log("down!!!");
        break;
        case'ArrowLeft':
        console.log("left!!!");
        break;
        case'ArrowRight':
        console.log("right!!!");
        break;
        default:
            console.log("ignored");
    }
});