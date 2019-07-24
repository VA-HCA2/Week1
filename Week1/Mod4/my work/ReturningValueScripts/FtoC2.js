// Converts Fahrenheit to Celsius

"use strict";

function convertFtoC(f)
{
        var c=(f-32)*(5/9)
        return c;      
}


//User Input

var celsiusTemp;
var fahrenheit= 92;

celsiusTemp=convertFtoC(fahrenheit);
console.log(fahrenheit+" degrees farenheit is "+celsiusTemp+" degrees celsius ")

