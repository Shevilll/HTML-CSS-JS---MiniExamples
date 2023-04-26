const cells = document.querySelectorAll(".cell");
const turn = document.querySelector("#turn");
const restart = document.querySelector("#restart");
const win = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ["", "", "", "", "", "", "", "", ""];
let currplayer = "X";
let running = true;

start();

function start() {
  cells.forEach((cell) => cell.addEventListener("click", clicked));
  restart.addEventListener("click", restarting);
  turn.textContent = `${currplayer}'s Turn`;
}

function clicked() {
  const cellIndex = this.getAttribute("cellIndex");

  if (options[cellIndex] != "" || !running) {
    return;
  }
  update(this, cellIndex);
  checkwinner();
}

function update(cell, index) {
  options[index] = currplayer;
  cell.textContent = currplayer;
}

function changeplayer() {
  currplayer = currplayer == "X" ? "O" : "X";
  turn.textContent = `${currplayer}'s Turn`;
}

function checkwinner() {
  let roundwon = false;
  for (let i = 0; i < win.length; i++) {
    const condition = win[i];
    const cellA = options[condition[0]];
    const cellB = options[condition[1]];
    const cellC = options[condition[2]];

    if (cellA == "" || cellB == "" || cellC == "") {
      continue;
    }
    if (cellA == cellB && cellB == cellC) {
      roundwon = true;
      break;
    }
  }
  if (roundwon) {
    turn.textContent = `${currplayer} Won!!`;
    running = false;
  } else if (!options.includes("")) {
    turn.textContent = `Draw!!`;
    running = false;
  } else {
    changeplayer();
  }
}

function restarting() {
  currplayer = "X";
  options = ["", "", "", "", "", "", "", "", ""];
  turn.textContent = `${currplayer}'s Turn`;
  cells.forEach((cell) => (cell.textContent = ""));
  running = true;
}
