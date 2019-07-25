"use strict";

function add()
 {
    let num1=document.getElementById("num1").value;
    num1=parseInt(num1);

    let num2=document.getElementById("num2").value;
    num2=parseInt(num2);

    let sum= num1 + num2;
    const resultField=document.getElementById("result");
    resultField.value= sum;
 }

 function substract()
 {
    let num1=document.getElementById("num1").value;
    num1=parseInt(num1);

    let num2=document.getElementById("num2").value;
    num2=parseInt(num2);

    let subst= num1 - num2;
    const resultField=document.getElementById("result");
    resultField.value=subst;
 }

 function multi()
 {
    let num1=document.getElementById("num1").value;
    num1=parseInt(num1);

    let num2=document.getElementById("num2").value;
    num2=parseInt(num2);

    let multi= num1 * num2;
    const resultField=document.getElementById("result");
    resultField.value=multi;
 }

 function divide()
 {
    let num1=document.getElementById("num1").value;
    num1=parseInt(num1);

    let num2=document.getElementById("num2").value;
    num2=parseInt(num2);

    let div= num1 / num2;
    const resultField=document.getElementById("result");
    resultField.value=div;
 }

 function init() 
{
    const btn= document.getElementById("addBtn");
    btn.onclick =add;

    const btn1= document.getElementById("addBtn1");
    btn1.onclick =substract;

    const btn2= document.getElementById("addBtn2");
    btn2.onclick =multi;

    const btn3= document.getElementById("addBtn3");
    btn3.onclick =divide;
}

window.onload = init;


  