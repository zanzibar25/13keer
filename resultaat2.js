const voorNaamEersteSpeler = localStorage.getItem('NaamSpeler1localStorage');
const voorNaamTweedeSpeler = localStorage.getItem('NaamSpeler2localStorage');
const voorNaamDerdeSpeler = localStorage.getItem('NaamSpeler3localStorage');
const voorNaamVierdeSpeler = localStorage.getItem('NaamSpeler4localStorage');

document.getElementById('voorNaamLocalStorage1').textContent = voorNaamEersteSpeler;
document.getElementById('voorNaamLocalStorage2').textContent = voorNaamTweedeSpeler;
document.getElementById('voorNaamLocalStorage3').textContent = voorNaamDerdeSpeler;
document.getElementById('voorNaamLocalStorage4').textContent = voorNaamVierdeSpeler;

const formul = document.querySelector("form");


function berekenScore(hoeveel, geboden) {
    hoeveel = Number(hoeveel);
    geboden = Number(geboden);

    if (hoeveel === geboden) return geboden + 10;
    if (hoeveel > geboden) return hoeveel * -1;
    return geboden * -1;
}

formul.addEventListener('submit', (event) => {
    event.preventDefault();

    
    const aantalSlagenResultaat1 = Number(document.getElementById('aantalSlagenResultaat1').value);
    const aantalSlagenResultaat2 = Number(document.getElementById('aantalSlagenResultaat2').value);
    const aantalSlagenResultaat3 = Number(document.getElementById('aantalSlagenResultaat3').value);
    const aantalSlagenResultaat4 = Number(document.getElementById('aantalSlagenResultaat4').value);

    
    const aantalSlagenGeboden1 = Number(localStorage.getItem('hoeveelslagen1') || 0);
    const aantalSlagenGeboden2 = Number(localStorage.getItem('hoeveelslagen2') || 0);
    const aantalSlagenGeboden3 = Number(localStorage.getItem('hoeveelslagen3') || 0);
    const aantalSlagenGeboden4 = Number(localStorage.getItem('hoeveelslagen4') || 0);

    
    const ultiemResultaat1 = berekenScore(aantalSlagenResultaat1, aantalSlagenGeboden1);
    const ultiemResultaat2 = berekenScore(aantalSlagenResultaat2, aantalSlagenGeboden2);
    const ultiemResultaat3 = berekenScore(aantalSlagenResultaat3, aantalSlagenGeboden3);
    const ultiemResultaat4 = berekenScore(aantalSlagenResultaat4, aantalSlagenGeboden4);

    
    localStorage.setItem('ultiemResultaat1', ultiemResultaat1);
    localStorage.setItem('ultiemResultaat2', ultiemResultaat2);
    localStorage.setItem('ultiemResultaat3', ultiemResultaat3);
    localStorage.setItem('ultiemResultaat4', ultiemResultaat4);
 
    window.location.href = 'origineeluitslag.html';
});
