//Ex10-클릭한 컬럼을 기준으로 레코드 정렬하기 #1/

window.addEventListener("load",function(){
var notices=[
    {id:2,title:"자바스크립트란~",regDate:"20-12.8",writerId:"이지훈",hit:4},
    {id:3,title:"크리스마스란~",regDate:"20-12.10",writerId:"이지훈",hit:14},
    {id:4,title:"springBoot~",regDate:"20-12.9",writerId:"이지훈",hit:24}
   
];

    var section=document.querySelector("#section10");
    var noticeList=section.querySelector(".notice-list");
    var titledTd= section.querySelector(".title");
    var tbodyNode=noticeList.querySelector("tbody");


    //data binding을 하기위한 함수 선언
    var bindData= function(){
        var template=section.querySelector("template");
        
        for(let i=0;i<notices.length;i++){
            var cloneNode=document.importNode(template.content,true);
            var tds=cloneNode.querySelectorAll("td");

           tds[0].textContent=notices[i].id;
          // tds[1].innerHTML='<a href="'+notices[0].id+'">'+notices[0].title+'</a>';
           var aNode=tds[1].children[0];
           aNode.href=notices[i].id;
           aNode.textContent=notices[i].title;
          
          
          tds[2].textContent=notices[i].regDate;
           tds[3].textContent=notices[i].writerId;
           tds[4].textContent=notices[i].hit;
   
           tbodyNode.append(cloneNode);
       }
    };
  
    bindData();

    //객체배열나열하기위한함수선언

    //sort정렬이 안되잇다면
    var titleSorted= false;

    titledTd.onclick=function(){
       tbodyNode.innerHTML="";
        //정렬하기 array.sort로
    if(!titleSorted)
        notices.sort(function(a,b){
            titleSorted= true;
            if(a.title <b.title)
                 return -1;
            else if(a.title > b.title)
                 return 1;
            else 
                return 0;

        });
        else
              notices.reverse();//역정렬함수

        bindData();


        

    };

});






//Ex9-다중 노드선택 방법과 일괄삭제, 노드의 자리바꾸기
window.addEventListener("load",function(){
    var section=document.querySelector("#section9");
    var noticeList=section.querySelector(".notice-list");
    var tbody=section.querySelector("tbody");
    var allCheckBox=section.querySelector(".overall-checkbox");
    var delButton=section.querySelector("#section9 .del-button");
    var swapButton=section.querySelector(".swap-button");

    allCheckBox.onclick=function(){
        var inputs=tbody.querySelectorAll("input[type='checkbox']");
        
        for(let i=0; i<inputs.length;i++)
        inputs[i].checked=allCheckBox.checked;//boolean값을 쓰기위해서 checked속성을이용\
        
        
        
    };
    
    delButton.onclick=function(){
        var inputs=tbody.querySelectorAll("input[type='checkbox']:checked");

      //  if(inputs[0].checked)
      for(var i=0;i<inputs.length;i++)
        inputs[i].parentElement.parentElement.remove();


    }
    swapButton.onclick=function(){
        var inputs=tbody.querySelectorAll("input[type='checkbox']:checked");

        if(inputs.length != 2){//2개이상선택하지않을시에 

            alert("엘리먼트는 2개를 선택해야만해요");
            return;
        }

        var trs = [];
        for(var i=0;i<inputs.length;i++)
            trs.push(inputs[i].parentElement.parentElement);
       
            var CloneNode=trs[0].cloneNode(true);
        trs[1].replaceWith(CloneNode);
        trs[0].replaceWith(trs[1]);
        

    };
});