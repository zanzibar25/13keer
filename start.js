localStorage.clear();
let nummer = 0; // let op getal
let nummerB = 0;
let a = 0;
let indexNr = 0;
let allScoreTotaldbase = [0];
let allScoreTotaldbasenew = [0];  //
let inputArrayLS = [0];

localStorage.clear();
localStorage.setItem('eindTotaalSpeler1', JSON.stringify(0));
localStorage.setItem('eindTotaalSpeler2', JSON.stringify(0));
localStorage.setItem('eindTotaalSpeler3', JSON.stringify(0));
localStorage.setItem('eindTotaalSpeler4', JSON.stringify(0));

 
let nummerJSON = JSON.stringify(nummer);
let nummerBJSON = JSON.stringify(nummerB);
let allSTdbase = JSON.stringify(allScoreTotaldbase);
let allSTdbasenew = JSON.stringify(allScoreTotaldbasenew);
let inputArrayLStore = JSON.stringify(inputArrayLS);



localStorage.setItem('nummerValue',nummerJSON);
localStorage.setItem('nummerValueB',nummerBJSON);
localStorage.setItem('allScoreTotaldbase', allSTdbase);
localStorage.setItem('allScoredbasenew', allSTdbasenew);
localStorage.setItem('inputArrayLS', inputArrayLStore);
localStorage.setItem('numA', a);
localStorage.setItem('indexNummer', indexNr);
 

nummerWaarden = localStorage.getItem('nummerValue');
nummerWaardenB = localStorage.getItem('nummerValueB');
 
function startgame() {
   window.location = 'naam.html';
   alert('let op !! , na het verversen van de pagina gaan alle gegevens verloren , dus niet verversen aub !!');
}

function startgame2() {
    window.location = 'start.html';
    alert('sorry , not available yet');
}  