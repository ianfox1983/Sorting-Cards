/* eslint-disable */
import "bootstrap";
import "./style.css";
const NUMBERS = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "J",
  "Q",
  "K"
  /* "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 250px; height: 250px;'>"*/
];
const ICONS = ["♥", "♠", "♦", "♣"];
const COLORS = ["black", "red"];
const TOP_SYMBOL = document.querySelector("#topSymbol");
const NUMBER = document.querySelector("#number");
const BOTTOM_SYMBOL = document.querySelector("#bottomSymbol");
const INPUT = document.querySelector("#NumberOfCards");
const GENERATE_BUTTON = document.querySelector("#generatorButton");
const SORT_BUTTON = document.querySelector("#sortButton");

window.onload = function() {
  generateCards();

  /* generateValue();
  document.querySelector("#button").addEventListener("click", event => {
    // Al hacer click hace un a nueva llamada y genera un nuevo valor
    generateValue();
  });
*/
};

function randomElement(myArray) {
  return myArray[Math.floor(Math.random() * myArray.length)];
}
function generateValue() {
  let Symbol = randomElement(ICONS);
  let Color = randomElement(COLORS);
  let Number = randomElement(NUMBERS);
  topSymbol.innerHTML = Symbol;
  topSymbol.style.color = Color;
  bottomSymbol.innerHTML = Symbol;
  bottomSymbol.style.color = Color;
  number.innerHTML = Number;
  if (
    Number ==
    "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 250px; height: 250px;'>"
  ) {
    topSymbol.innerHTML = "";
    bottomSymbol.innerHTML = "";
  }
}

function generateValue1(myArray) {
  randomElement();
}

function generateCards() {
  let numberOfCards = "";
  GENERATE_BUTTON.addEventListener("click", event => {
    numberOfCards = INPUT.value;
    console.log(numberOfCards);
    document.querySelector("section").innerHTML = "";
    for (let index = 0; index < numberOfCards; index++) {
      drawCard();
    }
  });
}

function drawCard() {
  let topBox = document.createElement("div");
  let centerBox = document.createElement("div");
  let bottomBox = document.createElement("div");
  let card = document.createElement("div");
  topBox.id = "topBox";
  topBox.classList.add("topBox");
  topBox.innerHTML = randomElement(ICONS);
  centerBox.id = "centerBox";
  centerBox.classList.add("centerBox");
  centerBox.innerHTML = randomElement(NUMBERS);
  bottomBox.id = "bottomBox";
  bottomBox.classList.add("bottomBox");
  bottomBox.innerHTML = randomElement(ICONS);
  card.id = "card";
  card.appendChild(topBox);
  card.appendChild(centerBox);
  card.appendChild(bottomBox);
  document.querySelector("section").appendChild(card);
}
