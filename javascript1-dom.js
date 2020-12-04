//Ex 6 :엘리먼트 노드의 속성 & css속성 변경
window.addEventListener("load",function(){
    var section=document.querySelector(".section6");
    
    var titleInput=document.querySelector(".title-input");
    var menuListDiv=document.querySelector(".menu-list");
    var addButton=document.querySelector(".add-button");
    var delButton=document.querySelector(".del-button");
    
    addButton.onclick=function(){
        var title=titleInput.value;
        //누적연산자를쓰게되면 새건물을 짓는것처럼 없애고 새로만들고 하기때문에 더커진문자열로 되서 
        //데이터사용량이 많아진다.
        var html='<li><a href="">'+title+'</a></li>';
        var li=document.createElement("li");
        li.innerHTML=html;
        //menuListDiv.appendChild(li);
        menuListDiv.append(li);//apppend는 여러개의 ,node를 추가할수잇고 string | node를 할수도잇다.
        //apppend는 여러개의 ,node를 추가할수잇고 string | node를 할수도잇다.
        // var title=titleInput.value;
        // var txtNode=document.createTextNode(title);
        
        // var aNode=document.createElement("a");
        // aNode.href="adafadfa";
        // aNode.appendChild(txtNode);

        // var liNode=document.createElement("li");
        // liNode.appendChild(aNode);

        // menuListDiv.appendChild(liNode);


        // var title=titleInput.value;
        // var txtNode=document.createTextNode(title);
        // menuListDiv.appendChild(txtNode);

    };
    delButton.onclick=function(){
       // var txtNode=menuListDiv.childNodes[0];
        //바로지워지지않는이유는 textNode로 감싸져잇기때문에 2번째이후에지워지는
        //것이다.
        var liNode=menuListDiv.children[0];
       // menuListDiv.removeChild(liNode);
       liNode.remove();//자기자신을 지우는거
     

    };
})





//Ex5:엘리먼트 노드의 속성 변경 select datalist로 node속성바꾸기
window.addEventListener("load",function(){
    var section=document.querySelector("#section5");
    var srcInput=document.querySelector(".src-input")
    var imgSelect=document.querySelector(".img-select")
    var changeButton=document.querySelector(".change-button");
    var img=section.querySelector(".img");
    var colorInput=document.querySelector(".color-input");

    changeButton.onclick= function(){
        alert("aa");
        img.src='imges/'+srcInput.value;
       
       
        // CSS 속성 변경
        //img.src="imges/"+imgSelect.value;
      // img.style["border-color"]=colorInput.value;
        img.style.borderColor=colorInput.value;
        console.log(img.className);
      
    }
 });

//Ex4:chaildNodes를 이용한 선택
window.addEventListener("load",function(){
    var section4=document.getElementById("section4");
   var box=document.querySelector(".box");
   for(var i in box)
   console.log(box[i]);
    var input1=box.children[0];//childNodes[0];
    var input2=box.children[1];//childNodes[1];
    //children은 태그를 가진자식객체를 인식하지만 childNodes는 빈공간도 node객체로 인식하기때문에 주의를해야한다.

    input1.value="hello";
    input2.value="okay";
   // document.write(input1.value);
 });

//Ex3:selector API Level1
window.addEventListener("load",function(){
    var section3=document.getElementById("section3");
    //var inputs=section2.getElementsByTagName("input");
     var txtX=section3.querySelector("input[name='x']"); 
     var txtY=section3.querySelector(".txt-y"); 
     var btnadd=section3.querySelector(".btn-add"); 
     var txtsum=section3.querySelector(".txt-sum"); 
    
 //    var txtX=input[0];
 //    var txty=input[1];
 //    var btnadd=input[2];
 //    var txtSum=input[3];
     btnadd.onclick=function(){
         console.log("gg");
    //문자열 값을 parseInt형변환하여 전환해줌
    var x=parseInt(txtX.value);
    var y=parseInt(txtY.value);
   // sum.value=x1+y1;//인트는 자동으로 합쳐지면서 문자로 전환됨
    
   txtsum.value=x+y;
  
     }
 });

 
//Ex2:엘리먼트 선택방법개선하기
window.addEventListener("load",function(){
   var section2=document.getElementById("section2");
   //var inputs=section2.getElementsByTagName("input");
    var txtX=section2.getElementsByClassName("txt-x")[0]; 
    var txtY=section2.getElementsByClassName("txt-y")[0]; 
    var btnadd=section2.getElementsByClassName("btn-add")[0]; 
    var txtsum=section2.getElementsByClassName("txt-sum")[0]; 
   
//    var txtX=input[0];
//    var txty=input[1];
//    var btnadd=input[2];
//    var txtSum=input[3];
    btnadd.onclick=function(){
        console.log("ad");
   //문자열 값을 parseInt형변환하여 전환해줌
   var x=parseInt(txtX.value);
   var y=parseInt(txtY.value);
  // sum.value=x1+y1;//인트는 자동으로 합쳐지면서 문자로 전환됨
   
  txtsum.value=x+y;
    }
});




// Ex1:계산기 프로그램 만들기
window.addEventListener("load",function(){
    var x=document.getElementById("txt-x");
    var y=document.getElementById("txt-y");
    var btn=document.getElementById("btn-add");
    var sum=document.getElementById("txt-sum");

    btn.onclick=function(){
   //문자열 값을 parseInt형변환하여 전환해줌
   var x1=parseInt(x.value);
   var y1=parseInt(y.value);
  // sum.value=x1+y1;//인트는 자동으로 합쳐지면서 문자로 전환됨
   
   sum.value=x1/y1;
    }
});