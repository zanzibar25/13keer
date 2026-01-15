const form = document.querySelector("form");

 


form.addEventListener('submit', (e) => {
    e.preventDefault();
      const naamSpeler1 = document.getElementById('fname1').value
      const naamSpeler2 = document.getElementById('fname2').value
      const naamSpeler3 = document.getElementById('fname3').value
      const naamSpeler4 = document.getElementById('fname4').value

                             
        voorNaam1.innerText = naamSpeler1;                             
        voorNaam2.innerText = naamSpeler2;                            
        voorNaam3.innerText = naamSpeler3;                                                                         
        voorNaam4.innerText = naamSpeler4;

       localStorage.setItem('NaamSpeler1localStorage', naamSpeler1);
       localStorage.setItem('NaamSpeler2localStorage', naamSpeler2);
       localStorage.setItem('NaamSpeler3localStorage', naamSpeler3);
       localStorage.setItem('NaamSpeler4localStorage', naamSpeler4);

       console.log('NaamSpeler1LocalStorage');

      window.location = 'bieding.html';
});
 

/*
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const formData  = new FormData(form);
    const data = Object.fromEntries(formData);

    fetch('https://reqres.in/api/users', {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'

        },
        body : JSON.stringify(data)
    }).then( res => res.json())
      .then( data => console.log(data))
      .catch(error => console.log(error));

});



*/