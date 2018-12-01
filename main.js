const newP = document.createElement('p');
const newPText = document.createTextNode('Przykładowy tekst');
newP.appendChild(newPText);
newP.setAttribute('id','test');

const parentListP = document.getElementById('parent-element');
parentListP.appendChild(newP);

let tab=['a','b', 'c'];
for (let i=0; i<tab.length; i++){
    const newP= document.createElement('P');
    const newPText = document.createTextNode(`Przykładowy ${1+tab[i]}`);
    newP.appendChild(newPText);
    newP.setAttribute('id',`test- ${i+1}`);
    parentListP.appendChild(newP);
}
/*
for (let i=0; i<3; i++){
    
const newPText = document.createTextNode(`Przykładowy ${1+i}`);
const newTexth2 = document.createTextNode(`${1+i}`); 
//tworzenie nowego h2
const newh2=document.createElement("h2");
//wrzucanie tekstu do h2
newh2=appendChild(newTexth2);
parentListP.appendChild('newh2');
}
//tworzenie nowego p
const newh2=document.createElement("p");
//wrzucanie tekstu do p
newP=appendChild(newTextP);
parentListP.appendChild('newP');

/*
newh2.onclick=function(){
    if (newP.classList.contains('hide'){
        newP.classList.add('newTextP');
    }       
           
    else 
    newP.classList.remove('newTextP');
} */
// biblioteka do obługi DOM umrellajs
document.forms.myform.onsubmit= function() {
    if (this.nazwa.value){
        newP=appendChild(this.nazwa.value);
       parentListP.appendChild('newP');
      //  var li=document.createElement("LI");
      //  li.innerHTML=this.nazwa.value;
       // document.getElementById("lista").appendChild(li);
        this.nazwa.value= "";
    this.nazwa.focus();
      //  li.onclick=usuń;
    }
    return false;
}

//const newa=document.createElement("a");
//const newTexta = document.createTextNode("usun"); 
//newa=appendChild(newTexta);
//parentListP.appendChild(newa);
//newa.onclick= function(){
  //  newa.parentNode.removeChild(this);



newP=onmouseout = function()
{this.styleMedia.bacgraund = 'red';}

  



