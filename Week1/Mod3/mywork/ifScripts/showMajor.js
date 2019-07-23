"use strict"

//User Input

var studentName="Bob"
var studentCode="BIOL"

//Calculation
var departmentOffice;

if(studentCode=="BIOL")
{
    var departmentOffice="Science Bldg. Room 310";
    var studentMajor="Biology"

}

else if ( studentcode=="CSCI")
{
    var departmentOffice="Sheppard Hall, Room 314";
    var studentMajor="Computer Science"

}

else if ( studentcode=="ENG")
{
    var departmentOffice="Kerr Hall,Room 201";
    var studentMajor="English"

}

else if ( studentcode=="HIST")
{
    var departmentOffice="Kerr Hall,Room 214";
    var studentMajor="English"

}

else 
{
    var departmentOffice="Westly Hall,Room 310";
    var studentMajor="Marketing"

}

console.log( "Student: "+studentName)
console.log( "Name of Major: "+studentMajor)
console.log( "Department Office: "+departmentOffice)

 

