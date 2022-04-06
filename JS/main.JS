const chronometre = {
  hour: 0,
  min: 0,
  sec: 0,
  hund: 0,
};
let p;

const actualisation = () => {
  let hours = chronometre.hour.toString();
  let minutes = chronometre.min.toString();
  let seconds = chronometre.sec.toString();
  let hundredth = chronometre.hund.toString();
  p.innerText = `${hours} heures ${minutes} minutes ${seconds} secondes ${hundredth} centièmes`;
};

const hundtime = (value) => {
  if (value >= 99) {
    chronometre.hund = 0;
    chronometre.sec++;
  }
  if (value >= 0 && value < 9) {
    chronometre.hund++;
    chronometre.hund = `0${chronometre.hund}`;
  }
  if (value > 8 && value < 99) {
    chronometre.hund++;
  }
};
const secondtime = (value) => {
  if (value >= 59) {
    chronometre.sec = 0;
    chronometre.min++;
  }
};
const mintime = (value) => {
  if (value === 60) {
    chronometre.min = 0;
    chronometre.hour++;
  }
};
const hourtime = (value) => {
  if (value === 24) {
    chronometre.hour = 0;
  }
};

const timer = () => {
  actualisation();
  hundtime(chronometre.hund);
  secondtime(chronometre.sec);
  mintime(chronometre.min);
  hourtime(chronometre.hour);

  window.setTimeout(timer, 1);
};

const main = () => {
  p = document.getElementById("chrono");
  p.style.fontSize = "2rem";
  timer();
};
addEventListener("load", main);
