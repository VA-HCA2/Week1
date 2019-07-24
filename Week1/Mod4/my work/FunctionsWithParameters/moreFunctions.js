"use strict"
//Functions
function displayMailingLabel(name,address,city,state,zip)
{
        var information = "Name: " +name+ " Address:"+address+", "+city+" "+state+"  "+zip+ "  ";
        console.log(information)
}
        //Add 
function addNumbers(num1,num2)
{
        var sumOfNumbers = num1 + num2;
        var message= +num1+"+"+num2+"="+sumOfNumbers
        console.log(message)
}

        //Multiply
function multNumbers(num1,num2)
{
        var multiplyNumbers = num1 * num2;
        var message2= +num1+"x"+num2+"="+multiplyNumbers
        console.log(message2)
}
        //Divide

function divNumbers(num1,num2)
{
        var divNumbers = num1 / num2;
        var message3= +num1+"/"+num2+"="+divNumbers
        console.log(message3)
}

//User Input

var myName = "Vanessa"
var myAddress = " 11671 Hidden Terrace"
var myCity= "San Antonio"
var myState= " TX"
var myZipCode= 78245;
var num1=3
var num2=4
var total;

//Call Function

displayMailingLabel(myName,myAddress,myCity,myState,myZipCode);
addNumbers(num1,num2)
multNumbers(num1,num2)
divNumbers(num1,num2)
