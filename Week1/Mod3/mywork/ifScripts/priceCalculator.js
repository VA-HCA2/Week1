// This script calcualtes the price giving the customer a discout
// if they spend 100 10% off, 250 20% off 

//user input
"use strict";
var total = 200;

//calculations
var price1 = 0.9;
var price2 = 0.8; 
var tax = 1.08 // to increse the tax add 1 to 0.8 (8% tax on this example)

if (total < 100)
{
    var subTotal = total * tax
}
 else if (total < 250)
    {
        var subTotal = total * tax * price1;
    }
 else {
        var subTotal = total * tax * price2;
    }


console.log( " Your total is $"+subTotal)