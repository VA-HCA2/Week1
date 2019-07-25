
function grossPay()
{
   let num1=document.getElementById("num1").value;
   num1=parseFloat(num1);

   let num2=document.getElementById("num2").value;
   num2=parseFloat(num2);


   let grossPay= num1 * num2;
   const resultField=document.getElementById("result");
   resultField.value= grossPay;

   let socialsectax= (grossPay*0.062);
   const sstax=document.getElementById("result2");
   sstax.value= socialsectax;

   let medtax= (grossPay*0.0145);
   const mdtax=document.getElementById("result3");
   mdtax.value= medtax;

}


function init() 
{
    const btn= document.getElementById("addBtn");
    btn.onclick =grossPay;
}

window.onload = init;

