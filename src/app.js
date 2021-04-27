/* eslint-disable */
import "bootstrap";
import "./style.css";
const JOKER =
  "<img src='https://media.istockphoto.com/vectors/dancing-joker-with-playing-cards-on-white-vector-id960303126' style='width: 1.4em; height: 1.4em;'>";
const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
const ICONS = ["♥", "♠", "♦", "♣"];
const COLORS = ["black", "red"];

const CARD_LIST = document.querySelector("#cardList");
const CARD_LIST_ORDERED = document.querySelector("#cardListOrdered");
const INPUT = document.querySelector("#NumberOfCards");
const GENERATE_BUTTON = document.querySelector("#generatorButton");
const SORT_BUTTON_BUBBLE = document.querySelector("#sortButtonBubble");
const SORT_BUTTON_SELECT = document.querySelector("#sortButtonSelect");

let cardList = [];
let cardListBubble = [];

window.onload = function() {
  generateNewCards();
  sortCardsBubble();
  sortCardsSelect();
};

function generateNewCards() {
  //función que genera nuevas cartas cuando se pulsa el botón de generar
  let numberOfCards = "";
  GENERATE_BUTTON.addEventListener("click", event => {
    numberOfCards = INPUT.value; //recoge dato del input
    CARD_LIST.innerHTML = ""; //vacía div y borra cartas anteriores
    CARD_LIST_ORDERED.innerHTML = "";
    cardList = []; //vacía array y borra cartas anteriores
    let row = document.createElement("div");
    for (let index = 0; index < numberOfCards; index++) {
      let cardTemp = getCard();
      cardList.push(cardTemp);
      drawCard(cardTemp, CARD_LIST, row);
    }
    console.log(cardList);
  });
}

function randomElement(myArray) {
  // función que devuelve un elemento aleatorio de un array dado
  return myArray[Math.floor(Math.random() * myArray.length)];
}

function getCard() {
  //función que genera el valor de una carta (simbolo, número y color)
  let cardAux = {
    symbol: "",
    number: "",
    color: ""
  };
  cardAux.symbol = randomElement(ICONS);
  cardAux.number = randomElement(NUMBERS);
  cardAux.color = randomElement(COLORS);
  return cardAux;
}

function drawCard(myObject, place, row) {
  //función que imprime la fila (array) de cartas en pantalla
  let topBox = document.createElement("div");
  let centerBox = document.createElement("div");
  let bottomBox = document.createElement("div");
  let card = document.createElement("div");

  topBox.id = "topBox";
  topBox.classList.add("topBox");
  topBox.innerHTML = myObject.symbol;
  topBox.style.color = myObject.color;
  centerBox.id = "centerBox";
  centerBox.classList.add("centerBox");
  if (
    myObject.number != 1 &&
    myObject.number != 11 &&
    myObject.number != 12 &&
    myObject.number != 13 &&
    myObject.number != 14
  ) {
    centerBox.innerHTML = myObject.number;
  }
  if (myObject.number == 1) {
    centerBox.innerHTML = "A";
  }
  if (myObject.number == 11) {
    centerBox.innerHTML = "J";
  }
  if (myObject.number == 12) {
    centerBox.innerHTML = "Q";
  }
  if (myObject.number == 13) {
    centerBox.innerHTML = "K";
  }
  if (myObject.number == 14) {
    centerBox.innerHTML = JOKER;
  }

  bottomBox.id = "bottomBox";
  bottomBox.classList.add("bottomBox");
  bottomBox.innerHTML = myObject.symbol;
  bottomBox.style.color = myObject.color;
  if (myObject.number == 14) {
    topBox.innerHTML = "";
    bottomBox.innerHTML = "";
  }
  card.id = "card";
  card.appendChild(topBox);
  card.appendChild(centerBox);
  card.appendChild(bottomBox);
  row.classList.add("row");
  row.appendChild(card);
  place.appendChild(row);
}

function drawRowOfCards(myArray, index) {
  let row = document.createElement("div");
  row.innerHTML = index;
  for (let index = 0; index < cardList.length; index++) {
    drawCard(myArray[index], CARD_LIST_ORDERED, row);
  }
}

function sortCardsBubble() {
  SORT_BUTTON_BUBBLE.addEventListener("click", event => {
    CARD_LIST_ORDERED.innerHTML = "";
    CARD_LIST_ORDERED.innerHTML = "<p>Cartas ordenadas:</p>";
    bubbleSort(cardList);
  });
}

function sortCardsSelect() {
  SORT_BUTTON_SELECT.addEventListener("click", event => {
    CARD_LIST_ORDERED.innerHTML = "";
    CARD_LIST_ORDERED.innerHTML = "<p>Cartas ordenadas:</p>";
    selectSort(cardList);
  });
}

function bubbleSort(arr) {
  console.log("hola");
  let wall = arr.length - 1; //we start the wall at the end of the array
  let contador = 0;
  while (wall > 0) {
    let index = 0;
    while (index < wall) {
      //compare the adjacent positions, if the right one is bigger, we have to swap
      if (arr[index].number > arr[index + 1].number) {
        let aux = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = aux;
        drawRowOfCards(cardList, contador);
        contador++;
      }

      index++;
    }
    wall--; //decrease the wall for optimization
  }
  console.log(arr);
  return arr;
}

function selectSort(arr) {
  let min = 0;
  let contador = 0;
  while (min < arr.length - 1) {
    for (let i = min + 1; i < arr.length - 1; i++) {
      if (arr[min].number > arr[i].number) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
        drawRowOfCards(cardList, contador);
        contador++;
      }
    }
    min++;
  }
  return arr;
}
