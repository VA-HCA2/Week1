"use strict"
//User input 
var income = 10000;
var fileStatus = "Single";

//calculations
var tax;

if (income < 12000 &&
    fileStatus == "Single") {
    var tax = income * 0.05
}

else if (income < 25000 &&
    fileStatus == "Single") {
    var tax = income * 0.1
}
else if (income < 75000 &&
    fileStatus == "Single") {
    var tax = income * 0.15
}

else if (income < 12000 &&
    fileStatus == "Joint") {
    var tax = income*0
}

else if (income < 25000 &&
    fileStatus == "Joint") {
    var tax = income * 0.6
}
else if (income < 75000 &&
    fileStatus == "Joint") {
    var tax = income * 0.11
}
else {
    var tax = income * 0.20
}

console.log(" Your Federal tax is " + tax)
