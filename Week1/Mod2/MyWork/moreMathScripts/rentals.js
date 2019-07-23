// Description: This script calculates the total person charge,
// Money collected fixed.
// Total cost of vans.  

"use strict";
var people=38;
var capacity=15;
var costPerVan=250;
var vans=Math.ceil(people/capacity);
var totalCost=vans*costPerVan;
var perPersonCost=totalCost/people;
var perPersonCharge=perPersonCost.toFixed(2);
var totalMoneyCollected=perPersonCharge*people;

console.log("The total cost per person is $"+perPersonCharge);
console.log("Money collected is $"+totalMoneyCollected.toFixed(2));
console.log("Total Cost of vans is $"+totalCost)
