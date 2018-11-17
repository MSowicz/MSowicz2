const $field = document.getElementById('field');
const $btn = document.getElementById('btn');
const $btn2 = document.getElementById('btn2');
const $btn3 = document.getElementById('btn3');
const $btn4 = document.getElementById('btn4');
const $btn5 = document.getElementById('btn4');

const MyArray = [1, 3, 4, 2, 5,8,0];

$btn.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray(valueFromField);
    
})
$btn2.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray2(valueFromField);
   
})

$btn3.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray3(valueFromField);
   
})

$btn4.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray4(valueFromField);
   
})

$btn5.addEventListener('click', function () {
    const valueFromField = $field.value;
    updateMyArray5(valueFromField);
   
})

function updateMyArray(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    
    MyArray.push(value); 
    $result.textContent=MyArray;
    showMessage(value, MyArray.length);
    
}

function updateMyArray2(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    
    MyArray.unshift(value); 
    $result.textContent=MyArray;
    showMessage(value);
}

function updateMyArray3(value) {
    const $result = document.getElementById('result');
    val = MyArray.pop(); 
    $field.value=val;
    
    
    $result.textContent=MyArray;
    
}

function updateMyArray4(val) {
    const $result = document.getElementById('result');
    val = MyArray.shift(); 
    $field.value=val;
    
    
    $result.textContent=MyArray;
    
}

function updateMyArray5(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    let val=Math.floor(Math.random() * 5) + 1;
     MyArray[val]=value;
    $result.textContent=MyArray;
    //showMessage(value);
}

function updateMyArray6(value) {
    const $result = document.getElementById('result');
    value = parseFloat(value);
    if (isNaN(value)) {
        value = Math.floor(Math.random() * 20) + 1;
    }
    
    MyArray.splice()
   ; 
    $result.textContent=MyArray;
    
}

function showMessage(value, index) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartosc ${value} na pozycji ${index} `;
    $message.textContent = textMsg;
}

function showMessage2(value) {
    const $message = document.getElementById('message');
    const textMsg = `dodano wartosc ${value} na pozycji 1`;
    $message.textContent = textMsg;
}