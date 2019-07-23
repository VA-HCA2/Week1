// This script diplays different greetings depending on the hour 

"use strict"
//User input 

var currentHour = 9;

// Greeting Message
var greeting;

if (currentHour < 10)
{
    var greeting = "Good Morning"
}
else if (currentHour <= 17)
 {

    var greeting = " Good Day"
 }
else
 { 
    var greeting = " Good Evening"
}

console.log("Hello "+greeting)



