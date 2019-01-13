const $box = document.getElementById('div1');
const $value = this['text'].value; 
const $button= document.getElementById('submit')
const $result = document.getElementById('result');
// 1

$box.onclick = function() {
if (this.style.backgroundColor === "red"){
    this.style.backgroundColor === "green";
}
else
this.style.backgroundColor === "red";
}

//2
$button.onclick = function($value) {
$value = parseInt($value)
tab=[];
tab.length = $value;
tab[0]=3;
for (i=1; tab.length<i; i++){
tab[i]= Math.floor(Math.random()*3);
}
$result.textContent = tab[i];
}





