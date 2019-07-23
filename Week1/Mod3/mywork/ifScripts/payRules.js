// user input
"use strict"
var payRate=10;
var hrsWorked=30;
// calculations
var grossPay;

if ( hrsWorked>40)
{
     grossPay=(40*payRate)+((hrsWorked-40)*1.5*payRate)
}
else 
{
     grossPay=hrsWorked*payRate
}

console.log( " Your gross pay is "+grossPay)