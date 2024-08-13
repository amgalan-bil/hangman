// const newElement = document.createElement('h1');
// const textContent=document.createTextNode("hii");


// newElement.appendChild(textContent);

// const body = document.getElementsByTagName('body')[0];
// body.appendChild(newElement);

// const img = document.createElement('img')

// img.src="https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?cs=srgb&dl=pexels-8moments-1266810.jpg&fm=jpg"
// img.style.width="100px"
// img.style.height="100px"

// body.appendChild(img);

// const body =document.getElementsByTagName('body')[0];
// body.style.display="flex";
// body.style.gap="12px";
// body.style.justifyContent='center';
// body.style.alignItems='center';
// body.style.height="100vh"

// const colors=["green","blue", "yellow","red"]

// for (let i = 0; i < 4; i++) {
//     const box = document.createElement("div");
//     body.appendChild(box);
//     box.style.height="200px"
//     box.style.width="200px"
//     box.style.backgroundColor =colors[i];
// }

// function test(){
//     const text= document.createTextNode("Hello")
//     const box = document.createElement("div");
//     body.appendChild(box);
//     box.appendChild(text)

// }

// const button=document.getElementsByTagName('button')[0];
// const body = document.getElementsByTagName('body')[0];


// button.onclick = test;

function test(){
    
    const text= prompt("type something")
    if(text === ''){
        alert("Please enter a word")

    }else{
        const element=document.createElement("h1");
        element.innerHTML=text;
        body.appendChild(element);
    }
}

const button=document.getElementsByTagName('button')[0];
const body = document.getElementsByTagName('body')[0];


button.onclick = test;


const input = document.getElementById("input");

input.onchange = function(){
    // console.log(input.value)
    const box = document.createElement("div");
    box.innerHTML = input.value;
    body.appendChild(box);
}