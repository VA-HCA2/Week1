// Use of Switch to look for name of department 
"use strict"
//User Input

var depCode=1
var depname;

switch (depCode)
{

case 1:
    depname ="Marketing";
    break;
case 5:
    depname="Human Resources";
    break;
case 10:
    depname="Accounting";
    break;    
case 12:
    depname="Legal";
    break;
case 18:
    depname="IT";
    break;
case 20:
    depname="Customer Relations";
    break;
default:
    depname= "<unknown>";    
}

console.log("The department name is "+depname)