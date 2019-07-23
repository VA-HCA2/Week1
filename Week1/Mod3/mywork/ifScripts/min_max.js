"use strict"
//User Input
var a = 10
var b = 7
var c = 11

//calculation
var maxNumber;
var minNumber

//Max Number;
//a
if (a > b &&
    a > c) {
    var maxNumber = a;
}
else if (b > a &&
    b > c) {
    var maxNumber = b;
}
else {

    var maxNumber = c;

}

//Min Number
console.log( "The maximum Number is "+maxNumber)

if (a < b &&
    a <  c) {
    var minNumber = a;
}
else if (b < a &&
    b < c) {
    var minNumber = b;
}
else {

    var minNumber = c;

}

console.log( "The minimun Number is "+minNumber)