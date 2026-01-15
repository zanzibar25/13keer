 
let uitslTotSpel1 = document.getElementById('uitslagtotaal1');
let uitslTotSpel2 = document.getElementById('uitslagtotaal2');
let uitslTotSpel3 = document.getElementById('uitslagtotaal3');
let uitslTotSpel4 = document.getElementById('uitslagtotaal4');

const speler1 = localStorage.getItem('NaamSpeler1localStorage') || '';
const speler2 = localStorage.getItem('NaamSpeler2localStorage') || '';
const speler3 = localStorage.getItem('NaamSpeler3localStorage') || '';
const speler4 = localStorage.getItem('NaamSpeler4localStorage') || '';

document.getElementById('speler1Uitslag100').textContent = speler1;
document.getElementById('speler2Uitslag200').textContent = speler2;
document.getElementById('speler3Uitslag300').textContent = speler3;
document.getElementById('speler4Uitslag400').textContent = speler4;

const ultiemResultaat1 = Number(localStorage.getItem('ultiemResultaat1')) || 0;
const ultiemResultaat2 = Number(localStorage.getItem('ultiemResultaat2')) || 0;
const ultiemResultaat3 = Number(localStorage.getItem('ultiemResultaat3')) || 0;
const ultiemResultaat4 = Number(localStorage.getItem('ultiemResultaat4')) || 0;

let beurtNummer = Number(localStorage.getItem('nummerValue')) || 1;
let beurtNummerB = Number(localStorage.getItem('nummerValueB')) || 1;

console.log ('beurtnummer : ' +beurtNummer);
console.log ('beurtnummerB : ' +beurtNummerB);

function resetbutton(){
  window.location = start.html;
}

 
let totalInputResult =
  JSON.parse(localStorage.getItem('totalInputResult')) || [];

// nieuwe ronde toevoegen
totalInputResult.push([
  ultiemResultaat1,
  ultiemResultaat2,
  ultiemResultaat3,
  ultiemResultaat4
]);


localStorage.setItem(
  'totalInputResult',
  JSON.stringify(totalInputResult)
);

const maxRonde = 13;
const tableBody = document.getElementById('tableRow');

tableBody.innerHTML = ""; // tabel leegmaken

totalInputResult.forEach((ronde, index) => {
  let rondeNummer;

  // Bereken "positie in de ping-pong" inclusief dubbele 13
  if (index < maxRonde) {
    // 1 t/m 13
    rondeNummer = index + 1;
  } else if (index === maxRonde) {
    // tweede keer 13
    rondeNummer = maxRonde;
  } else {
    // terugtellen: 12 → 1
    rondeNummer = maxRonde - (index - maxRonde);
  }

  tableBody.innerHTML += `
    <tr>
      <td>${rondeNummer}</td>
      <td>${ronde[0]}</td>
      <td>${ronde[1]}</td>
      <td>${ronde[2]}</td>
      <td>${ronde[3]}</td>
    </tr>
  `;
});

//
let eindTotaalSpeler10 = Number(localStorage.getItem('eindTotaalSpeler1')) || 0;
let eindTotaalSpeler20 = Number(localStorage.getItem('eindTotaalSpeler2')) || 0;
let eindTotaalSpeler30 = Number(localStorage.getItem('eindTotaalSpeler3')) || 0;
let eindTotaalSpeler40 = Number(localStorage.getItem('eindTotaalSpeler4')) || 0;
 
eindTotaalSpeler10 += ultiemResultaat1;
eindTotaalSpeler20 += ultiemResultaat2;
eindTotaalSpeler30 += ultiemResultaat3;
eindTotaalSpeler40 += ultiemResultaat4;

localStorage.setItem('eindTotaalSpeler1', eindTotaalSpeler10);
localStorage.setItem('eindTotaalSpeler2', eindTotaalSpeler20);
localStorage.setItem('eindTotaalSpeler3', eindTotaalSpeler30);
localStorage.setItem('eindTotaalSpeler4', eindTotaalSpeler40);


 uitslTotSpel1.innerHTML = eindTotaalSpeler10;
 uitslTotSpel2.innerHTML = eindTotaalSpeler20;
 uitslTotSpel3.innerHTML = eindTotaalSpeler30;
 uitslTotSpel4.innerHTML = eindTotaalSpeler40;
  
 const spelers = [
  { totaal: eindTotaalSpeler10, element: uitslTotSpel1 },
  { totaal: eindTotaalSpeler20, element: uitslTotSpel2 },
  { totaal: eindTotaalSpeler30, element: uitslTotSpel3 },
  { totaal: eindTotaalSpeler40, element: uitslTotSpel4 }
];

const hoogsteScore = Math.max(
  eindTotaalSpeler10,
  eindTotaalSpeler20,
  eindTotaalSpeler30,
  eindTotaalSpeler40
);
 

spelers.forEach(speler => {
  if (speler.totaal === hoogsteScore) {
    speler.element.style.backgroundColor = " #ee594f";
    speler.element.style.color = "darkgrey";
  } else {
    speler.element.style.backgroundColor = "";
    speler.element.style.color = "";
  }
});
 