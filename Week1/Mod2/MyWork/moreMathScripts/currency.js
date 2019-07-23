"use strict";

//inputs (in the real world, from a html form)
var numUsDollars=100;
var targetcurrency= "Yen Currency";

//Calculate when user clicks button
var eurorate=1.12;
var yenrate=0.0093;

if( targetcurrency=="Euro Currency") {
    var euroCurrency=numUsDollars/eurorate;   
   console.log("Your "+targetcurrency+" for $ "+numUsDollars+" is " +euroCurrency);
} else { 
    var yenCurrency=numUsDollars/yenrate;    
    console.log("Your "+targetcurrency+ " for $ "+numUsDollars+" is " +yenCurrency);
}
  
