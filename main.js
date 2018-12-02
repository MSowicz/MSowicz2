/* let $test= document.querySelector('[data-test-array]');
$test=$test.getAttribute('data-test-array');

$test= $test.split(' ');
const test = document.getElementById('test');
test.textContent = $test;
console.log(test); */

/*
const btn=document.getElementById('test');
btn.onclick= function(){
    const $test = document.querySelector('[data-id]');
    if (this.id === $test.getAttribute('data-id')){
        $test.classList.remove('hide');
    }
}
*/

const obj = {};
obj.test = 'tekst';
obj.drugie = 'cos';
console.log(obj);

function testFn(paramString){ // function testFn(paramString='default'){
    //sprawdza czy istnieje parametr, jezeli nie domyslna wartość
    paramString=paramString || 'default'; 
    
const obj2={
    start:123
};
 //ten if to samo co paramString=paramString || 'default';
//if (paramString) { 
   
    obj2.abc = paramString; 
//}
//console.log(obj2);
obj2.abc = paramString;
return obj2;
}

//testFn();
const $testFn= testFn();
console.log($testFn); // ($testFn.start)konkretny atrybut obiektu



document.forms.myform.onsubmit= function() {
    if (this.nazwa.value){
        {
        var li=document.createElement("LI");
       li.innerHTML=this.nazwa.value;
       document.getElementById("ToDo").appendChild(li);
       this.nazwa.value= "";
    this.nazwa.focus();
   //2
    let ar=document.getElementsByTagName("li");
   const newbtn=document.createElement('button');
    const newbtnText = document.createTextNode("usun element");
    li.appendChild(newbtn);
    newbtn.appendChild(newbtnText);
    for (i=0; i<ar.length; i++) {
    newbtn.setAttribute('id',`usun ${i+1}`);
    const $btn=document.getElementById(`usun ${i+1}`);
  $btn.onclick= usuwanie;
    }
  //3
  const newbtn2=document.createElement('button');
    const newbtn2Text2 = document.createTextNode("edycja elementu");
    li.appendChild(newbtn2);
    newbtn2.appendChild(newbtn2Text2);
    for (i=0; i<ar.length; i++) {
    newbtn2.setAttribute('id',`edycja ${i+1}`);
    const $btn2=document.getElementById(`edycja ${i+1}`);
    $btn2.onclick= edycja;
   }
    }
}

    
    return false;
}
// funkcja do drugiego
function usuwanie(){
 this.parentNode.remove(this);
}
// funkcja do trzeciego
function edycja(){
    let ed=document.getElementsByTagName("li").contentEditable="true";
//li.contentEditable=true;
}
