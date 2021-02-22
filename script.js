const body = document.body;
const getById = id => document.getElementById(id);
const startButton = document.getElementById('startButton');
const menu = document.getElementById('menu');
const easy = document.getElementById('easy');
const middle = document.getElementById('middle');
const hard = document.getElementById('hard');

const easyGameField = document.getElementById('easyGame');
const middleGameField = document.getElementById('middleGame');
const hardGameField = document.getElementById('hardGame');

let flips = false;


function selectedLevel() {
  if (easy.checked) easyGame();  
  if (middle.checked) middleGame();
  if (hard.checked) hardGame();
};

startButton.addEventListener('click', selectedLevel);

document.querySelectorAll(".card").forEach(card => { 
	card.addEventListener('click', () => {
  if (flips == true) {
    window.location.reload();
    flips = false;
  } else {
    card.classList.toggle("flip");
    flips = true;
	}
 });
});

function easyGame() {
  menu.style.display = 'none';
  easyGameField.style.display = 'grid';
}

function middleGame() {
  menu.style.display = 'none';
  middleGameField.style.display = 'grid';
}

function hardGame() {
  menu.style.display = 'none';
  hardGameField.style.display = 'grid';
}
