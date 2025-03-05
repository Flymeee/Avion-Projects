// Selecting a single element
let header = document.getElementById("header");

// Selecting multiple element
let navLink = document.getElementsByClassName("navLink");
console.log(navLink);

// Modifying Elements Text
let text = document.querySelector(".title").textContent;
document.querySelector("#carName").textContent = text;

// Modifying Elements Style
let description = document.getElementById("description");
description.style.backgroundColor = "red";


// Adding a button and event listener for button clicks
let submit = document.getElementById("btn_submit");
function signUp(){
    let email = document.getElementById("email").value;
    alert(email + " will receive news and updates!");
}
submit.addEventListener("click", signUp);