const btn = document.querySelector('#v3');
btn.addEventListener("click",()=>console.log("why you clicked me!!!"));
btn.addEventListener("click",()=>console.log("Stop clicking me"),{once:true});//will run first time only