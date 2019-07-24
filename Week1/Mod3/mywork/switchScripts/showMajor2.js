"use strict"

//User Input
var studentName="Bob";
var majorCode="BIOL";
var depname;
var departmentOffice;

switch (majorCode)
{

case "BIOL":
    depname ="Biology";
    departmentOffice="Science Bldg. Room 310";
    break;
case "CSCI":
    depname="Computer Science";
    departmentOffice="Sheppard Hall, Room 314"
    break;
case "ENG":
    depname="English";
    departmentOffice="Kerr Hall,Room 201";
    break;       
case "HIST":
    depname="History";
    departmentOffice="Kerr Hall,Room 214";
    break; 
case "MKT":
    depname="Marketing";
    departmentOffice="Westly Hall,Room 310";
    break; 
default:
    depname= "<unknown>"; 
    departmentOffice="<unknown>";
}     

console.log("Student: "+studentName)
console.log("Major: "+depname)
console.log( "Advising location: "+departmentOffice)
