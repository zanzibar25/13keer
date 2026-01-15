const voorNaamEersteSpeler = localStorage.getItem('NaamSpeler1localStorage');
 const voorNaamTweedeSpeler = localStorage.getItem('NaamSpeler2localStorage');
 const voorNaamDerdeSpeler = localStorage.getItem('NaamSpeler3localStorage');
 const voorNaamVierdeSpeler = localStorage.getItem('NaamSpeler4localStorage');
 const form = document.querySelector("form");
  


document.getElementById('voorNaamLocalStorage1').textContent = voorNaamEersteSpeler;
document.getElementById('voorNaamLocalStorage2').textContent = voorNaamTweedeSpeler;
document.getElementById('voorNaamLocalStorage3').textContent = voorNaamDerdeSpeler;
document.getElementById('voorNaamLocalStorage4').textContent = voorNaamVierdeSpeler; 



let numberAantalspelen = localStorage.getItem('nummerValue'.value);
let convertNumber = Number(numberAantalspelen);
console.log(convertNumber);

//--> deze moet nog !!
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const aantalSlagenResultaat1LocalStorage = document.getElementById('aantalSlagenResultaat1').value
    const aantalSlagenResultaat2LocalStorage = document.getElementById('aantalSlagenResultaat2').value
    const aantalSlagenResultaat3LocalStorage = document.getElementById('aantalSlagenResultaat3').value
    const aantalSlagenResultaat4LocalStorage = document.getElementById('aantalSlagenResultaat4').value
    
    localStorage.setItem('hoeveelSlagenResultaat1', aantalSlagenResultaat1LocalStorage);
    localStorage.setItem('hoeveelSlagenResultaat2', aantalSlagenResultaat2LocalStorage);
    localStorage.setItem('hoeveelSlagenResultaat3', aantalSlagenResultaat3LocalStorage);
    localStorage.setItem('hoeveelSlagenResultaat4', aantalSlagenResultaat4LocalStorage);

    let hoeveelSlagenResultaat1Ls = localStorage.getItem('hoeveelSlagenResultaat1');
    let hoeveelSlagenResultaat2Ls = localStorage.getItem('hoeveelSlagenResultaat2');
    let hoeveelSlagenResultaat3Ls = localStorage.getItem('hoeveelSlagenResultaat3');
    let hoeveelSlagenResultaat4Ls = localStorage.getItem('hoeveelSlagenResultaat4');

    let aantalSlagengeboden1 = localStorage.getItem('hoeveelslagen1');
    let aantalSlagengeboden2 = localStorage.getItem('hoeveelslagen2');
    let aantalSlagengeboden3 = localStorage.getItem('hoeveelslagen3');
    let aantalSlagengeboden4 = localStorage.getItem('hoeveelslagen4');



    let aantalSlagenGeboden1 = Number(aantalSlagengeboden1);
    let aantalSlagenGeboden2 = Number(aantalSlagengeboden2);
    let aantalSlagenGeboden3 = Number(aantalSlagengeboden3);
    let aantalSlagenGeboden4 = Number(aantalSlagengeboden4);

    let ultiemResultaat1 = '';
    let ultiemResultaat2 = '';
    let ultiemResultaat3 = '';
    let ultiemResultaat4 = '';

     
 
        
   
   function eersteSpeler(){
            //dit is de eerste speler
   if(hoeveelSlagenResultaat1Ls === aantalSlagengeboden1){
          ultiemResultaat1 = aantalSlagenGeboden1 + 10;
    }else{
             ultiemResultaat1 = ultiemResultaat1 - hoeveelSlagenResultaat1Ls;                
    }
        let ultiemResultaat101 = JSON.stringify(ultiemResultaat1);
        localStorage.setItem('ultiemResultaat1', ultiemResultaat101);
        localStorage.getItem(ultiemResultaat1);
        return(ultiemResultaat1);
    
         
    }  
    
    
    function tweedeSpeler(){
            //dit is de tweede speler
   if(hoeveelSlagenResultaat2Ls === aantalSlagengeboden2){
    ultiemResultaat2 = aantalSlagenGeboden2 + 10;
        }else{
        ultiemResultaat2 = ultiemResultaat2 - hoeveelSlagenResultaat2Ls;
    }

        let ultiemResultaat201 = JSON.stringify(ultiemResultaat2);
        localStorage.setItem('ultiemResultaat2', ultiemResultaat201);
        localStorage.getItem(ultiemResultaat2);
    }
     
    function derdeSpeler(){
             //dit is de derde speler
   if(hoeveelSlagenResultaat3Ls === aantalSlagengeboden3){
    ultiemResultaat3 = aantalSlagenGeboden3 + 10;
        }else{
        ultiemResultaat3 = ultiemResultaat3 - hoeveelSlagenResultaat3Ls;
}
        let ultiemResultaat301 = JSON.stringify(ultiemResultaat3);
        localStorage.setItem('ultiemResultaat3', ultiemResultaat301);
        localStorage.getItem(ultiemResultaat3);
}

   function vierdeSpeler(){     
             //dit is de vierde speler
   if(hoeveelSlagenResultaat4Ls === aantalSlagengeboden4){
    ultiemResultaat4 = aantalSlagenGeboden4 + 10;
        }else{
        ultiemResultaat4 = ultiemResultaat4 - hoeveelSlagenResultaat4Ls;
}

    let ultiemResultaat401 = JSON.stringify(ultiemResultaat4);
        localStorage.setItem('ultiemResultaat4', ultiemResultaat401);
        localStorage.getItem(ultiemResultaat4);
         
}   
    eersteSpeler();
    tweedeSpeler();
    derdeSpeler();
    vierdeSpeler();
      
   window.location = 'origineeluitslag.html';
    
});
