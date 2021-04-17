//Inner text
//document.querySelector('p').innerText='paragraph changed due to inner text';

            //Text content
document.querySelector('p').textContent;


//inner html
document.querySelector('h1').innerText='<i>text changed<i>';//only text is changed no changing in html is done

document.querySelector('h1').innerHTML='<i>Text changed<i>';

                //attributes

let inp= document.querySelector('input[type="text"]');
//inp.getAttribute();
inp.setAttribute("type","color");

//Changing Styles
let h1 = document.querySelector("h1");
h1.style; //will only display inline css
console.log(window.getComputedStyle(h1));
h1.style.color="#ff0728";
let alllinks = document.querySelectorAll('a');
for(let links of alllinks ){
    links.style.color="#ff0728";
    links.style.textDecorationStyle="wavy";
    
}
 

               //Class List

    let h2 = document.querySelector("h2");
    h2.getAttribute("class");//will return null bcz there is no class in h2
    h2.classList.add("purple");
    h2.classList.remove("purple");
    h2.classList.add("purple");
    h2.classList.add("border");
    h2.classList.toggle("border");//to turn it on/off


    //traversing parent/child/siblings
    let square_img = document.querySelector(".square");
    console.log(square_img);
    console.log(square_img.parentElement);
    console.log(square_img.parentElement.children);
    console.log(square_img.nextSibling);
    console.log(square_img.nextElementSibling);


    //append/append child
    let new_img = document.createElement('img');
    new_img.src="https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
    document.body.appendChild(new_img);
    new_img.classList.add('square');

    let new_h3 = document.createElement('h3');
    new_h3.innerText="I am a new h3";
    document.body.appendChild(new_h3);
    
 const p=document.querySelector('p');
    p.append('i am the text!!!yay');

    new_b=document.createElement('b');
    new_b.append("Hello!!!");
    //new_b.append='Hi!!!!';
    p.prepend(new_b);

    const new_h2 = document.createElement('h2');
    new_h2.innerText="Hello im new h2";
    const nh1 = document.querySelector('h1');
    nh1.insertAdjacentElement("afterend",new_h2);

    nh1.after(new_h3);
    //nh1.before(new_h3);


    //remove / remove child
    let first_li=document.querySelector('li');
    //console.log(first_li);
    first_li.parentElement.removeChild(first_li);

    let first_b=document.querySelector('b');
   //first_b.remove();