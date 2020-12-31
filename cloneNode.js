
// function myFunction() {
//     var elmnt = document.getElementsByTagName("DIV")[0];
//     var cln = elmnt.cloneNode(true);
//     document.body.appendChild(cln);
//   }
  function cartBtn(){
    var ordd=document.querySelector(".order-product");
   var productClone=ordd.cloneNode(true);
   ordd.appendChild(productClone);
   alert("성공햇다!!")
    
  };

  //물건 count
  window.addEventListener("load",function(){
    var minus=document.querySelector(".minus");
    var plus=document.querySelector(".plus");
    var number=document.querySelector(".number");
var price=document.querySelector("#pprice");
var tagPrice=document.querySelector(".price2").innerHTML;
pchange=parseInt(tagPrice);
minus.onclick=function(){
  const ss=parseInt(number.value);
  if(ss>1){
    number.value= ss-1;
    totalnumber=pchange*(ss-1);
    price.value=totalnumber;

  }else(ss<1) 

    return ;       
    };
    plus.onclick=function(){
        const ss=parseInt(number.value);
        if(ss>=1)
        number.value=ss+1;
        totalnumber=pchange*(ss+1);
        price.value=totalnumber;
       
    }
  });