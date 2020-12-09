//Ex4-서로 다른기능의 여러버튼을 가진화면에서 이벤트를 처리하는 방식
window.addEventListener("load",function(){
    var section=document.querySelector("#section4");
    var tbody=section.querySelector(".notice-list tbody");

    tbody.onclick=function(e){
       
        // 클릭 이벤트가 일어낫을때 버블링이생기는기본행위를 하지않게 하는변수
        //a태그나 새로 페이지전환이 일어날때 그런것을 이되지않게 기본값이 변하지않게하는것
       
        e.preventDefault();
        var tag=e.target;
    
    
     if(tag.nodeName !="INPUT")
        return;
    ///같은 이름의 클래스를 포함하고잇는지를 물어볼때 classList.contains="클래스이름"
    if(tag.classList.contains("sel-button")){
        var tr= tag.parentElement;
        for(;tr.nodeName != "TR"; tr=tr.parentElement);

            tr.style.background="yellow";
    }else if(tr.classList.contains("edit-button")){

    }else if(tr.classList.contains("del-button")){

    }}
});