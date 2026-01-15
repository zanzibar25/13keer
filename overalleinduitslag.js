
let eindTotaalSpeler10 = Number(localStorage.getItem('eindTotaalSpeler1')) || 0;
let eindTotaalSpeler20 = Number(localStorage.getItem('eindTotaalSpeler2')) || 0;
let eindTotaalSpeler30 = Number(localStorage.getItem('eindTotaalSpeler3')) || 0;
let eindTotaalSpeler40 = Number(localStorage.getItem('eindTotaalSpeler4')) || 0;
const voorNaamEersteSpeler = localStorage.getItem('NaamSpeler1localStorage');
const voorNaamTweedeSpeler = localStorage.getItem('NaamSpeler2localStorage');
const voorNaamDerdeSpeler = localStorage.getItem('NaamSpeler3localStorage');
const voorNaamVierdeSpeler = localStorage.getItem('NaamSpeler4localStorage');
let speleruitslag1 = document.getElementById('speler1Uitslag100');
let speleruitslag2 = document.getElementById('speler2Uitslag200');
let speleruitslag3 = document.getElementById('speler3Uitslag300');
let speleruitslag4 = document.getElementById('speler4Uitslag400');
let speleruitslagTotaal1 = document.getElementById('speler1UitslagTotaal');
let speleruitslagTotaal2 = document.getElementById('speler2UitslagTotaal');
let speleruitslagTotaal3 = document.getElementById('speler3UitslagTotaal');
let speleruitslagTotaal4 = document.getElementById('speler4UitslagTotaal');
let uitslTotSpel1 = document.getElementById('score1');
let uitslTotSpel2 = document.getElementById('score2');
let uitslTotSpel3 = document.getElementById('score3');
let uitslTotSpel4 = document.getElementById('score4');
let spelerUitslagHoogst = document.getElementById('speleruitslag');


speleruitslag1.innerHTML = voorNaamEersteSpeler + ': ' + eindTotaalSpeler10;
speleruitslag2.innerHTML = voorNaamTweedeSpeler + ': ' + eindTotaalSpeler20;
speleruitslag3.innerHTML = voorNaamDerdeSpeler + ': ' + eindTotaalSpeler30;
speleruitslag4.innerHTML = voorNaamVierdeSpeler + ': ' + eindTotaalSpeler40;

const spelers = [
  { totaal: eindTotaalSpeler10, naam: voorNaamEersteSpeler, element: document.getElementById("speler1Uitslag100") },
  { totaal: eindTotaalSpeler20, naam: voorNaamTweedeSpeler, element: document.getElementById("speler2Uitslag200") },
  { totaal: eindTotaalSpeler30, naam: voorNaamDerdeSpeler, element: document.getElementById("speler3Uitslag300") },
  { totaal: eindTotaalSpeler40, naam: voorNaamVierdeSpeler, element: document.getElementById("speler4Uitslag400") }
];

const hoogsteScore = Math.max(
  eindTotaalSpeler10,
  eindTotaalSpeler20,
  eindTotaalSpeler30,
  eindTotaalSpeler40
);
  
spelers.forEach(speler => {
  if (speler.totaal === hoogsteScore) {
    speler.element.style.fontsize = "35px";
    speler.element.style.backgroundColor = "#ee594f";
    speler.element.style.color = "white";
    spelerUitslagHoogst.innerHTML = speler.naam + ' :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; ' + speler.totaal;
    startVuurwerk();
  } else {
    speler.element.style.backgroundColor = "#ee594f";
    speler.element.style.color = "black";
  }
});


function startVuurwerk() {
  const canvas = document.getElementById("vuurwerkCanvas");
  const ctx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const particles = [];

  function Particle(x, y, color) {
    this.x = x;
    this.y = y;
    this.velX = (Math.random() - 0.5) * 5;
    this.velY = (Math.random() - 0.5) * 5 - 2;
    this.alpha = 1;
    this.color = color;
    this.size = Math.random() * 3 + 2;
  }

  Particle.prototype.update = function() {
    this.x += this.velX;
    this.y += this.velY;
    this.alpha -= 0.01;
  };

  Particle.prototype.draw = function() {
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  };

  function createFirework() {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    const colors = ["#ff0000","#ffff00","#00ff00","#00ffff","#ff00ff","#ffffff","#0000ff"];
    for (let i = 0; i < 50; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      particles.push(new Particle(x, y, color));
    }
  }

  function animate() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      p.update();
      p.draw();
      if (p.alpha <= 0) particles.splice(i, 1);
    }
    requestAnimationFrame(animate);
  }

  // Maak meerdere vuurwerkexplosies
  let count = 0;
  const interval = setInterval(() => {
    createFirework();
    count++;
    if (count > 300) clearInterval(interval); // 10 explosies
  }, 300);

  animate();

  // Speel geluid
  const geluid = document.getElementById("vuurwerkGeluid");
  geluid.play();
}

