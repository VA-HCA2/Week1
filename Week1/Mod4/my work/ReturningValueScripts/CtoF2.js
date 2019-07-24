// Converts Celsius to Fahrenheit 

"use strict";

function convertCtof(c)
{
        var f=(c*(9/5))+32
        return f;      
}


//User Input

var celsiusTemp=70;
var fahrenheit;


fahrenheit=convertCtof(celsiusTemp);

console.log(celsiusTemp+" degrees celsius is "+fahrenheit+" degrees fahrenheit")