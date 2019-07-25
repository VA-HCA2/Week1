"use strict";

function greetUser()
 {
    const nameField=document.getElementById("name");
    let name=nameField.value;
    alert("Hello "+name);
}

function init() 
{
    const btn = document.getElementById("helloBtn");
    btn.onclick = greetUser;
}

window.onload = init;
