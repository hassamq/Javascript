const btn=document.querySelector('#btn1');
btn.onclick = ()=>console.log("YOU CLICKED ME!!");
function scream(){
    console.log("ahhhhhh");
    console.log("Stop touching me!!!!");
}
btn.onmouseenter=scream;