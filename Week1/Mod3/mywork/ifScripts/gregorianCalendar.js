// This script checks if a year is leap year or not

// User input
"use strict"
var year = 1917;

// Calculators

var crt1 = year % 400;
var crt2 = year % 100;
var crt3 = year % 4;


if (crt1 == 0) {
    var leapYear = "true";
}
else {
    if (crt2 == 0) {
        var leapYear = "false";
    }

else {
        if (crt3 == 0) {

            var leapYear = "true";
     }

        else {
            var leapYear="false"
        }
    }
}

console.log("Is "+year+ " a leap year? "+leapYear) 

