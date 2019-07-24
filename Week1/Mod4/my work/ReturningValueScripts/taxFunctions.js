// Tax calculations for Social Security, Medical Tax and Federal Tax

"use strict";
// social secutity
function getSocSecTax(grossPay)
{
        var tax=(grossPay*0.062)
        return tax;      
}

//Medicare 

function getMedicareTax(grossPay)
{
        var medTax=(grossPay*0.0145)
        return medTax;
}

// Federal Tax

function getFederalTax(grossPay,wcode)

{ 
    var taxrate;

    if  (wcode==0)
{
        var taxrate=grossPay*0.23
}
else if (wcode==1)
{
        var taxrate=grossPay*0.21
} 
else if (wcode==2)
{
        var taxrate=grossPay*0.195
}   
else if (wcode==3)
{
        var taxrate=grossPay*0.185
}   

else{
        var taxrate=grossPay*(0.18-(0.005*(wcode-4)));
}
 return taxrate;
}

//User Input

var grossPay=750;
var wcode=0;
var tax;
var medTax;
var taxrate;

tax=getSocSecTax(grossPay);
medTax=getMedicareTax(grossPay);
taxrate=getFederalTax(grossPay,wcode);


console.log( "Your Social Security Tax on $ "+grossPay+" is $"+tax)
console.log( "Your Med Tax on $ "+grossPay+" is $"+medTax)
console.log( "Your Federal Tax on $ "+grossPay+" code "+wcode+" is "+taxrate)

