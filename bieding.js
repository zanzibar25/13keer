 const voorNaamEersteSpeler = localStorage.getItem('NaamSpeler1localStorage');
 const voorNaamTweedeSpeler = localStorage.getItem('NaamSpeler2localStorage');
 const voorNaamDerdeSpeler = localStorage.getItem('NaamSpeler3localStorage');
 const voorNaamVierdeSpeler = localStorage.getItem('NaamSpeler4localStorage');
 const form = document.querySelector("form");
let rondenummers = document.getElementById('ronde');

let rondeNummer = Number(localStorage.getItem('rondeNummerLS')) || 0;

rondeNummer = rondeNummer + 1;
let tekst = 'het is ronde nummer : ' + rondeNummer + ' , anita ! &#128540;';
 
localStorage.setItem('rondeNummerLS', rondeNummer);

console.log('rondeNummer is : ' + rondeNummer);

rondenummers.innerHTML = tekst;
 


document.getElementById('voorNaamLocalStorage1').textContent = voorNaamEersteSpeler;
document.getElementById('voorNaamLocalStorage2').textContent = voorNaamTweedeSpeler;
document.getElementById('voorNaamLocalStorage3').textContent = voorNaamDerdeSpeler;
document.getElementById('voorNaamLocalStorage4').textContent = voorNaamVierdeSpeler;


let numberAantalspelen = localStorage.getItem('nummerValue');
let convertNumber = parseInt(numberAantalspelen);
convertNumber = convertNumber +1;
nummerValue = convertNumber;
let uiteindelijkNummer = nummerValue;
if (nummerValue < 27){
if (convertNumber > 13){
        uiteindelijkNummer = uiteindelijkNummer - 1;
        console.log ('het uiteindelijk nummer is : ' + uiteindelijkNummer);
}
localStorage.setItem('nummerValue', convertNumber);  // dit geeft problemen
console.log('nummerValue is :' + ' ' + typeof nummerValue + ': ' + nummerValue);
console.log('convertNumber is :' + ' ' + typeof convertNumber + ': ' + convertNumber);
console.log('numbeerAantalspelen is : ' +  '' + typeof numberAantalspelen + ': ' + numberAantalspelen);
console.log(localStorage);
}else{
    window.location = "overalleinduitslag.html"
};


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const aantalSlagen1LocalStorage = document.getElementById('aantalSlagen1').value
    const aantalSlagen2LocalStorage = document.getElementById('aantalSlagen2').value
    const aantalSlagen3LocalStorage = document.getElementById('aantalSlagen3').value
    const aantalSlagen4LocalStorage = document.getElementById('aantalSlagen4').value

    localStorage.setItem('hoeveelslagen1', aantalSlagen1LocalStorage);
    localStorage.setItem('hoeveelslagen2', aantalSlagen2LocalStorage);
    localStorage.setItem('hoeveelslagen3', aantalSlagen3LocalStorage);
    localStorage.setItem('hoeveelslagen4', aantalSlagen4LocalStorage);

    window.location = "resultaat.html";
     
});
 