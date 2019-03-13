let point = 0;
let waktu = 5;
let gameIsOver;
let currentWord;
let mulai = false;

const kata = [
  "mungkin",
  "ini",
  "memang",
  "jalan",
  "takdirku",
  "mengagumi",
  "tanpa",
  "dicintai",
  "tak",
  "mengapa",
  "bagiku",
  "asal",
  "kau",
  "pun",
  "bahagia",
  "dalam",
  "hidupmu",
  "dalam",
  "hidupmu",
  "telah",
  "lama",
  "ku",
  "pendam",
  "perasaan",
  "itu",
  "menunggu",
  "hatimu",
  "menyambut",
  "diriku",
  "tak",
  "mengapa",
  "bagiku",
  "mencintaimu",
  "pun",
  "adalah",
  "bahagia",
  "untukku",
  "bahagia",
  "untukku",
  "ku",
  "ingin",
  "kau",
  "tahu"
];

const sePoint = document.querySelector("#point");
const seWaktu = document.querySelector("#waktu");
const seCurrentKata = document.querySelector("#currentkata");
const seInputKata = document.querySelector("#inputKata");
const seGameOver = document.querySelector("#game-over");
const seRestart = document.querySelector("#restart");

document.addEventListener("DOMContentLoaded", init);
seRestart.addEventListener("click", e => {
  e.preventDefault();
  gameIsOver = false;
  waktu = 5;
  seInputKata.disabled = false;
  seInputKata.focus();
  seRestart.style.display = "none";
  seGameOver.style.display = "none";

  init;
});

function init() {
  setInterval(handleChangeWaktu, 1000);

  handlePilihKata();
}
function handlePilihKata() {
  currentWord = kata[Math.floor(Math.random() * (kata.length - 1 - 0 + 1))];
  console.log(currentWord);
  seCurrentKata.innerHTML = currentWord;
}
function handleInputkata() {
  console.log(seInputKata.value);

  if (seInputKata.value === currentWord) {
    console.log("sama");

    handlePilihKata();
    seInputKata.value = "";
    waktu = 6;
    point = point + 10;

    sePoint.innerHTML = point;
    console.log(point);
  }
}

function handleChangeWaktu() {
  console.log(waktu);
  if (seInputKata === document.activeElement) {
    if (waktu === 0) {
      gameIsOver = true;
      seGameOver.style.display = "block";
      seRestart.style.display = "inline";
      seInputKata.disabled = true;
    } else {
      waktu--;
      seWaktu.innerHTML = waktu;
      handleInputkata();
    }
  }
}
