// const myHeading = document.querySelector("h1")
// myHeading.textContent = "Hello, Dog Lover";


// document.querySelector("html").addEventListener("click", function(){
//     alert("Ouch! Stop poking me!");
// })

//Alternative way to do the event listener.
// document.querySelector("html").addEventListener("click", () => {
//     alert("Ouch! Stop poking me!");

// })


const myImage = document.querySelector("img");
myImage.onclick = () =>{
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/dogs.jpeg"){
        myImage.setAttribute("src", "images/dogs1.jpeg")
    }else{
        myImage.setAttribute("src","images/dogs.jpeg")
    }

};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    const myName = prompt("Please enter your name.")
    if (!myName){
        setUserName();
    }else{
        localStorage.setItem("name", myName);
        myHeading.textContent = `Hello ${myName}, Dog Lover`;
    }
}

if(!localStorage.getItem("name")){
    setUserName();
}else{
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Hello ${storedName}, Dog Lover`;
}

myButton.onclick = () => {
setUserName();
}