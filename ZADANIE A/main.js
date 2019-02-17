
const listOfMovies = [
    'Władca much (1990)',
    'Władca Pierścieni (1978)',
    'Milczenie owiec (1991)',
    'Moja dziewczyna (1991)',
    'Dziewczyna z tatuażem (2011)',
    'Jestem Bogiem (2011)',
    'Jestem legendą (2007)',
    'Matrix (1999)',
    'Zielona mila (1999)',
    '8 Mila (2002)',
    'Uciekająca panna młoda (1999)',
    'Gnijąca panna młoda (2005)',
    'Dzień świra (2002)',
    'Dzień Niepodległości (1996)',
    'Dzień świstaka (1993)',
    'Lista Schindlera (1993)',
    'Czarna lista Hollywood (1991)',
    'Lista klientów (2012)',
    'Teraz albo nigdy (2018)',
    'Niech będzie teraz (2012)',
    'Zabójcze maszyny (2018)',
    'Zabójcza broń (1987)',
    'Znaki (2002)',
    'Znaki na drodze (1969)',
    'Wodne znaki (2013)',
    'Znaki dymne (1998)',
    'Jeden dzień (2011)',
    'Dzień próby (2001)',
    'Dzień z życia blondynki (2014)',
    'Panna Nikt (1996)',
    'Panna Meadows (2014)',
    'Panna Nikt (2010)',
    'Panna Julia (1951)'
  ];
//tak to nie powinno byc
  const listOfYears = [
    1990,
    1978,
    1991,
    1991,
    2011,
    2011,
    2007,
    1999,
    1999,
    2002,
    1999,
    2005,
    2002,
    1996,
    1993,
    1993,
    1991,
    2012,
    2018,
    2012,
    2018,
    1987,
    2002,
    1969,
    2013,
    1998,
    2011,
    2001,
    2014,
    1996,
    2014,
    2010,
    1951];
//tak to nie powinno byc
    const listOfTitle = [
        'Władca much ',
        'Władca Pierścieni ',
        'Milczenie owiec ',
        'Moja dziewczyna ',
        'Dziewczyna z tatuażem ',
        'Jestem Bogiem ',
        'Jestem legendą',
        'Matrix',
        'Zielona mila',
        '8 Mila',
        'Uciekająca panna młoda',
        'Gnijąca panna młoda',
        'Dzień świra ',
        'Dzień Niepodległości',
        'Dzień świstaka ',
        'Lista Schindlera ',
        'Czarna lista Hollywood',
        'Lista klientów',
        'Teraz albo nigdy',
        'Niech będzie teraz ',
        'Zabójcze maszyny ',
        'Zabójcza broń ',
        'Znaki ',
        'Znaki na drodze ',
        'Wodne znaki',
        'Znaki dymne',
        'Jeden dzień ',
        'Dzień próby ',
        'Dzień z życia blondynki ',
        'Panna Nikt ',
        'Panna Meadows ',
        'Panna Nikt ',
        'Panna Julia '];
//tak to nie powinno byc
const listOfWords = [
    'Władca','much',
    'Władca','Pierścieni',
    'Milczenie','owiec',
    'Moja','dziewczyna',
    'Dziewczyna','z','tatuażem',
    'Jestem','Bogiem',
    'Jestem','legendą',
    'Matrix',
    'Zielona','mila',
    '8','Mila',
    'Uciekająca','panna','młoda',
    'Gnijąca','panna','młoda',
    'Dzień','świra ',
    'Dzień','Niepodległości',
    'Dzień','świstaka ',
    'Lista','Schindlera ',
    'Czarna','lista','Hollywood',
    'Lista','klientów',
    'Teraz','albo','nigdy',
    'Niech','będzie','teraz ',
    'Zabójcze','maszyny',
    'Zabójcza','broń',
    'Znaki',
    'Znaki','na','drodze',
    'Wodne','znaki',
    'Znaki','dymne',
    'Jeden','dzień ',
    'Dzień','próby',
    'Dzień','z','życia','blondynki',
    'Panna','Nikt',
    'Panna','Meadows',
    'Panna','Nikt',
    'Panna','Julia'];
    

        
    
const $list = document.getElementById("myListUL");
let parzysty = false;
const $cloud = document.getElementById('cloud');

// Wygenerowanie z tablicy elementow LI
function createList(array){
for (i=0; i<array.length; i++){
    CreateElementLI(array[i]);   
    const numberOfMovies = document.getElementById("movieNumber");
    numberOfMovies.textContent = `Liczba elementow na liscie: ${i+1} `;
}
}
createList(listOfMovies);


// Tworzenie nowych elementow LI
function CreateElementLI(value){
    let $liElem = document.createElement("LI");
    let $spanElem = document.createElement("span");
    $list.appendChild($liElem);
    $liElem.appendChild($spanElem);
    $spanElem.textContent = value;
}
// Kolorystyka elementow LI
const movieListUL = document.getElementsByTagName("span");
for (const element of movieListUL){
    element.className = parzysty ? "parzysty" : "nieparzysty";
   parzysty = !parzysty;
    if (element.className === "parzysty"){
        element.style.backgroundColor = "lightblue" ;
    }
    else {
        element.style.backgroundColor = "ivory";
    }
}

// Dodanie elementow LI z formularza
// nie działa
document.forms['my-form'].onsubmit = function() {
    const $getYear = this['text1'].value;
    const $getName = this['text2'].value;
    const addMovie = $getYear + $getName;
    const $errors= document.getElementById("errors");

    if ($getName === 0 || $getYear===0){
        $errors.textContent="Puste pole";
    }
    else if (!isNaN($getName)){
        $errors.textContent="Pole rok musi być liczbą";
    }
    else{
        listOfMovies.push(addMovie);
        createList(listOfMovies);
    }


}

//przycisk do zmiany stylu
const $btnColor = document.getElementById("changeStyle");
$btnColor.onclick= function() {
   for (const element of movieListUL){
       if ((element.className === "parzysty")&& (element.style.backgroundColor === "lightblue") ){
            element.style.backgroundColor = "red";
      }
       else if ((element.className === "parzysty")&& (element.style.backgroundColor === "red")) {
           element.style.backgroundColor = "lightblue" 
      }
      else if ((element.className === "nieparzysty")&& (element.style.backgroundColor === "ivory") ){
        element.style.backgroundColor = "gray";

      }
      else if((element.className === "nieparzysty")&& (element.style.backgroundColor === "gray") ){
        element.style.backgroundColor = "ivory";

      }
    }
 
}

// chmura tagow
// nadawanie id cos nie pyklo
listOfWords.sort();
let curr = null;
let cnt = 0;
for (i=0; i<listOfWords.length; i++){
    if (listOfWords[i] !=curr){
        if (cnt>0) {
            let $aElem2  = document.createElement("a");
        $cloud.appendChild($aElem2 );
        $aElem2.textContent = curr;
        $aElem2.id= cnt;
        $aElem2.className = 'cl';
        $aElem2.href = "";
        }
        curr= listOfWords[i];
        cnt = 1;

        } else {
            cnt++;
        }
        
    }
    if (cnt>0){
        let $aElem2 = document.createElement("a");
        $cloud.appendChild($aElem2 );
        $aElem2.textContent = curr;
        $aElem2.id= cnt;
        $aElem2.className = 'cl';
        $aElem2.href = "";

    }

 
//zmiana wielkosci tagow
// cos nie tak
let  $aElem3 = document.getElementsByClassName('cl');
for (const el of $aElem3){
    if (el.id === 1 ){
        el.style.fontSize = '8px |';
         
     } else if (el.id >= 2 && el.id < 5){
        el.style.fontSize = '12px';
     } else {
        el.style.fontSize = '20px';
      }
}

//filtrowanie

// Tworzenie nowych elementow select option

for (i=0; i<listOfYears.length; i++){
    CreateElementOpt(listOfYears[i]);   
   
}


function CreateElementOpt(valuee){
   const $sortByYear = document.getElementById("sortbyYear");
    let $OptElem = document.createElement("OPTION");
    $sortByYear.appendChild($OptElem);
    $OptElem.textContent = valuee;
    $OptElem.value = valuee;
    $OptElem.id = "year";
}

//wybieranie roku
// tez cos nie tak
const $sortByYear = document.getElementById("sortbyYear");
$sortByYear.onchange = function(){
let year = this.value;
createList(listOfMovies.includes(year));
}









