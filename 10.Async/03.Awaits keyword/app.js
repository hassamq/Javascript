const delayedcolor_change=(color,delay)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
           document.body.style.backgroundColor=color;
           resolve();
        },3000);
    });
}


//    delayedcolor_change('red',1000)
//    .then(()=>delayedcolor_change('orange',1000))
//    .then(()=>delayedcolor_change('blue',1000))
//    .then(()=>delayedcolor_change('violet',1000))
//    .then(()=>delayedcolor_change('indigo',1000))
//    .then(()=>delayedcolor_change('olive',1000))
   
async function rainbow(){
    await delayedcolor_change('red',1000);
    await delayedcolor_change('yellow',1000);
    await delayedcolor_change('green',1000);
    await delayedcolor_change('blue',1000);
    await delayedcolor_change('indigo',1000);
    await delayedcolor_change('violet',1000);
    await delayedcolor_change('orange',1000);
    
    
}
rainbow();