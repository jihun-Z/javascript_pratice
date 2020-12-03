

var numbs=new Array();
var numbs= new Array(5);//하나만 있으면 배열의 길이를 의미
var numbs= new Array(5,10,15);//여러개가 있으면 배열의 값으로 인식한다.
var numbs= new Array(5,1,3,"hello");//여러type의 인자가 들어갈수있다.
alert(typeof numbs[3]);
var nums= new Array(5,10,21,"hello",new Array(1,2,3));
alert(nums[4][1]);
//splice()메소드를 이용한 데이터 관리 삭제 추가 
nums.splice(1);//인덱스 1번째이후데이터를 다지워짐
nums.splice(1,1);//인덱스 1에서 1개의인자만 지워짐
nums.splice(1,2);//인덱스 1에서부터 2개의인자만 지워짐
nums.splice(2,1,"hoho");//인덱스3번째 부터 1개의 인자를 지우고 데이터'hoho'를 추가해라.

//Object객체 --
//javascript는 만들고나서 정의를 한다.
//java는 객체를 정의하고 만들지만

//json javaScript Object Notation(JSON) 표현법

var n = true;//var n=new Boolean(true);
var n= 3;//var n=new Number();
var s='hello';//var s=new String("hello");
var ar=[];//var ar=new Array();
var ob={};//var ob= new Object();
var exam={"kor":30,"eng":70,"math": 80};//객체선언
var ar=[3,4,5,6,exam,[7,8]];
console.log(ar[5][1]);
console.log(ar[4].math);
var notice='{"id":1,"title":"hello"}';//객체가 아니라 문자열이다.
console.log(notice.title);
eval('var x= 30;');

//eval은 문자열을 바꿔줘야하는데 그때쓰는 함수가 eval.
//이며 javascript를 실행해주는함수다 (parser를 해주는함수가 아님)

var data='["co":06,"so2": 0.7]';
eval('var x= 30;');
console.log(x);//30이 출력됨 parsing을 해줌
//  eval("var r= "+data+" %;");//eval로 문자열이된 data를 파싱해줌 그러면 객체로 인식
console.log(ar[0].co);//06이 출력됨

//JSon parser
//json parse를 쓰게되면 key값을 ""로 감싸야한다.그래야 인식하는 규칙이있음
var date= JSON.parse('{"key":2,"title":"키"}');
console.log(date.title);

//json형식으로 바꾸기
var date1={id:2, title:"bbb"};//자바스크립트 객체

//변환하기 JSON.stringify
    var json = JSON.stringify(date1);
    alert(date1);

    var x = 3;
    var y  = 3;
  //  var y = new number(3);

document.write( x==y);//값을 비교
document.write( x === y);//주소 비교

console.log(32> "4");


//반복문 
//for in 은 key값을 순회하는것이며 map,배열에 유용함.
var ar = ["hello","hi","greeting"];//배열
var ob = {id:"1", title:"hello",writeId:"이지훈"};
for(var i in ar)//i는 인덱스를 가르키는 키값
//for(let i = 0; i<3;i++)
    document.write(i+"<br>");
    console.log(ar[i]+"");
for(var i in ob)
    document.write(ob[i]+"<br>");

    //함수객체와 표현식
    //javascript는 함수는만들지만 정의하지않는다.
    
    var add=("x,y","return x+y");//첫번째는 인자, 두번째는 구현한 몸통
    
   // var add= new Function("x,y", "return x+y;");
//     document.write(add(3,4));
   // var add= new Function("x,d","return x*d;");
//     document.write("<br>"+add(3,7));

    var add= function(x,y){
        return x+y;
    }
    function add(x, y){
        return x+y;
    }
    //가변인자 


    //함수는 인자에대한 개수가 정확하지않다.그러므로
    //매개변수선언은 2개일지라도 인자값은 여러개일수잇다. 그러므로
    //arguments 콜렉션을 사용하여 확인해봐야한다.
    function dd(x,y){
        alert(arguments.length);//arguments 함수안에 있는 콜렉션
       alert(arguments[5]);//인덱스번호를 이용해서 원하는것을 출력할수도잇다.
       document.write(typeof arguments[5]);//typeof 타입을 반환해줌 
       return x+y;
    }
    document.write(dd(16,2,3,4,5,"hello"));

    //전역변수
    //선언하지않으면 전역변수로 되고
    //var a= 1; var a= 2;같은 이름의 상수중복선언이 된다.
    //함수안에서 선언된 변수는 함수안에서만 실행된다.
    //스크립트에서는 함수영역만 변수영역을 나눔
 
 
    var f1= function (){
     a= 1;// -> window.a =1;

     var a= 2;//지역변수가 선언되면 우선순위로 지역변수를 인식한다.

     a++;//전역변수이지만


     //클로저

     //함수안에 함수가 참조하는값이 부모의 상수라면 부모는 
     //자식의함수가 자신의상수를 호출할지몰라서 열어두게되고 
     //그밑에 자식함수를 클로저라고한다.
     //클로저는 내가 남의클로저할수잇는 키를 가지고잇다라고생각하자.
     function d1(){
         var a=1;
         return function d2(){
             return a;
         }
     }
     var f= f1();
     var a=f();
     alert(a);
 }

 //브라우저 플랫폼
 //alert.prompt.confirm

 var e,d;
 x=prompt("x값을 입력하세요",0);
 y=prompt("y값을 입력하세요",0);
 
 x=parseInt(x);
 y=parseInt(y);
 alert(x+y);//string값으로 반환됨.
alert(typeof x+y);
var text=confirm("삭제하시겠습니까?");
if(text)
    alert ("삭제되었습니다.");

    //이벤트 기반의 프로그래밍
    //페이지가 읽혀질때 사용하는건 <script>
        //이벤트가 발생할때 실행은 
        //태그안에 onclick() onmouseover()같은 이벤트함수

        function printPP(){

            var x=prompt("x값을 입력하세요",0);
            var y=prompt("y값을 입력하세요",0);

            x=parseInt(x);
            y=parseInt(y);

            //alert(x+y);
          //  printDD.value=x+y;//input은 value속성을 가지지만
          // span1.innerText= x+y;// span은 없다 그래서 innertext로 
            btnPrint.value= x+y;
        }
        //window.onload=function(){
            //이벤트 누적함수를 이용해서 사용해야하며,onload함수는 실행js문서에서 실행되면 누적되므로 주의해야한다.
        window.addEventListener("load",function(){

            var btnPrint=document.getElementById("btnPrint");
            
            var add1=function(x,y){
                return x+y;
            }
            btnPrint.onclick=function (){//function만 잇으면
                //   var btnPrint= document.getElementById("btnPrint");
                var x= prompt("x값을 입력하세요",0);
                var y= prompt("y값을 입력하세요 ",0);
                
                x= parseInt(x);
                y= parseInt(y);
                btnPrint.value= x+y;
            };
            
            // btnPrint.onclick= printPP;
            //함수를 호출한다. printPP()처럼 괄호를 넣게되면 함수의 객체를 호출하는것이므로 상황에맞게쓰자
        
    });
        
//계산기 프로그램 만들기 








