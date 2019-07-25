// Converts Fahrenheit to Celsius
"use strict";

function convertFtoC() 
{
        let num3 = document.getElementById("num3").value;
        num3 = parseFloat(num3);

        let convert = Math.round( (num3 - 32) * (5 / 9));
        const resultField = document.getElementById("result1");
        resultField.value=convert;
}

function init()
{
        const btn4 = document.getElementById("convertBtn");
        btn4.onclick = convertFtoC;
}

window.onload = init;


