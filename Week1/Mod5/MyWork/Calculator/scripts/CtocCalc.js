// Converts Celsius to Fahrenheit 
"use strict";

function convertCtoF() 
{
        let num3 = document.getElementById("num3").value;
        num3 = parseFloat(num3);

        let convert = ((num3*(9/5))+32);
        const resultField = document.getElementById("result1");
        resultField.value= convert;
}

function init()
{
        const btn4 = document.getElementById("convertBtn");
        btn4.onclick = convertCtoF;
}

window.onload = init;
