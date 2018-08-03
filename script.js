	
let btn0=document.querySelector("#cero");
let btn1=document.querySelector("#one");
let btn2=document.querySelector("#two");
let btn3=document.querySelector("#three");
let btn4=document.querySelector("#four");
let btn5=document.querySelector("#five");
let btn6=document.querySelector("#six");
let btn7=document.querySelector("#seven");
let btn8=document.querySelector("#eight");
let btn9=document.querySelector("#nine");	
let btndot=document.querySelector("#dot");
let btn10=document.querySelector("#add");
let btn11=document.querySelector("#minus");
let btn12=document.querySelector("#multiply");
let btn13=document.querySelector("#divide");
let btn14=document.querySelector("#clear");
let btn15=document.querySelector("#delete");
let btn16=document.querySelector("#equal");
let btn17=document.querySelector("#pot");
let bar=document.querySelector(".bar");
let dot= false;
let newn=true;
let real=false;
let arraybar=[];
let stringbar="";

function keypress(e){

    const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (e.keyCode==48) {writebar(0); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==49) {writebar(1); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==50) {writebar(2); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==51) {writebar(3); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==52) {writebar(4); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==53) {writebar(5); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==54) {writebar(6); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==55) {writebar(7); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==56) {writebar(8); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==57) {writebar(9); if (newn) {dot=true;newn=false}}
    else if (e.keyCode==190) {if (dot) {writebar("."); dot=false; real=true;}}
    else if (e.keyCode==13) {domath()}
    else if (e.keyCode==32) {errabar()}
    else if (e.keyCode==8) { arraybar.pop(); bar.textContent=`${arraybar.join("")}`}
    else if (e.keyCode==107) {writebar(" + ");newn=true }
    else if (e.keyCode==109) {writebar(" - ");newn=true }
    else if (e.keyCode==106) {writebar(" * ");newn=true }
    else if (e.keyCode==111) {writebar(" / ");newn=true }
    else if (e.keyCode==16) {writebar(" ^ ");newn=true }
    key.classList.add("press");
    //console.log(key);
     }



function writebar(n){
	if (arraybar[0]=="E"){arraybar=[]}
	arraybar.push(n);
	bar.textContent=`${arraybar.join("")}`; 

}

function errabar(){ 
//for(i=0;i<=arraybar.length;i++)arraybar.shift(); 
newn=true;
arraybar=[];
bar.textContent=`${arraybar.join("")}`; 
}

function domath(){
arraybar=arraybar.join("");
	
do{
   	res =  arraybar.split(" ");
    ind= res.findIndex(res => res === "+"|| res=== "-"|| res=== "*"|| res=== "/"|| res=== "^");
    n1=Number(res[ind-1]);
   	if (res[ind+1]==""){arraybar="ERROR";break;}
   	   else{
    	n2=Number(res[ind+1]);
   		if(ind==-1){sol=res[0];}
   		else if (res[ind]==="+"){sol=n1+n2;}
    	else if (res[ind]==="-"){sol=n1-n2;}
    	else if (res[ind]==="*"){sol=n1*n2;}
    	else if (res[ind]==="/"){if(n2==0){arraybar=[];sol="ERROR";} else {sol=n1/n2;}}
    	else if (res[ind]==="^"){sol=1;for (i=1;i<=n2;i++){sol*=n1}}
    	if (real) {sol=Number(sol); sol=sol.toFixed(2);real=false;} 
    	}
 		res.splice(0,3); 
    	res.unshift(sol);
    	arraybar=res.join(" ");
    } while(ind>=0);
arraybar=arraybar.split("");
bar.textContent=`${arraybar.join("")}`; 
}


btn0.addEventListener("click",function () {writebar(0); if (newn) {dot=true;newn=false} })
btn1.addEventListener("click",function () {writebar(1); if (newn) {dot=true;newn=false} })
btn2.addEventListener("click",function () {writebar(2); if (newn) {dot=true;newn=false} })
btn3.addEventListener("click",function () {writebar(3); if (newn) {dot=true;newn=false} })
btn4.addEventListener("click",function () {writebar(4); if (newn) {dot=true;newn=false} })
btn5.addEventListener("click",function () {writebar(5); if (newn) {dot=true;newn=false} })
btn6.addEventListener("click",function () {writebar(6); if (newn) {dot=true;newn=false} })
btn7.addEventListener("click",function () {writebar(7); if (newn) {dot=true;newn=false} })
btn8.addEventListener("click",function () {writebar(8); if (newn) {dot=true;newn=false} })
btn9.addEventListener("click",function () {writebar(9); if (newn) {dot=true;newn=false} })
btndot.addEventListener("click",function () {if (dot) {writebar("."); dot=false; real=true;}})
btn10.addEventListener("click",function () {writebar(" + ");newn=true })
btn11.addEventListener("click",function () {writebar(" - ");newn=true })
btn12.addEventListener("click",function () {writebar(" * ");newn=true })
btn13.addEventListener("click",function () {writebar(" / ");newn=true })
btn17.addEventListener("click",function () {writebar(" ^ ");newn=true })
btn14.addEventListener("click",function () {errabar()})
btn15.addEventListener("click",function () { arraybar.pop(); bar.textContent=`${arraybar.join("")}`})
btn16.addEventListener("click",function () {domath()})

window.addEventListener("keydown",keypress);
const numbers=document.querySelectorAll(".key");
numbers.forEach(key => key.addEventListener("transitionend",removeTransition));


function removeTransition(e){ 
 // if (e.propertyName != "transform"){ return;}
  this.classList.remove("press");
    }

//concept
 //var arraybar = "1.2 + 4 - 2 * 2 / 4";
 