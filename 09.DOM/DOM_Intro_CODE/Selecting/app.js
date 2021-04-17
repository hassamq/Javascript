/*const all_images=document.getElementsByTagName('img');
for(let img of all_images){
    img.src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png';
}*/

//getElementsByClassName
const square_images=document.getElementsByClassName('square');
for(let img of square_images){
    img.src='https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Male_Silkie.png/460px-Male_Silkie.png';
}

//Query Selector
document.querySelector('h1');
document.querySelector(".square");  //class
document.querySelector(".square:nth-of-type(2)");
document.querySelector("#banner");  //id
document.querySelectorAll(".square");
document.querySelector('a[title="Plumage"]');

const links = document.querySelectorAll("p a");
for(let link of links){
    console.log(link.href);
}