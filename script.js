const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el");
const cardEl = document.querySelector("#cards-el");

let cards = [];
let hasBlackJack = false;
let isAlive = false;
let message = "";
let sum = 0;

function randomRange () {
    let randomNumber = Math.floor(Math.random()*13) + 1;
    if(randomNumber > 10) {
        return 10;
    } else if (randomNumber === 1) {
        return 11;
    } else {
        return randomNumber;
    }
}

function startGame() {
    isAlive = true;
    const firstCard = randomRange();
    const secondCard = randomRange();
    cards = [firstCard,secondCard];
    sum = firstCard + secondCard;
    renderGame();
}

function renderGame() {
    cardEl.textContent = "Cards: ";
    for(let i=0;i<cards.length;i++) {
        cardEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " + sum;
    if(sum < 21) {
        message = "Do you want to Draw a new card ? ";
    } else if(sum === 21) {
        message = "Woohh!..You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "Sorry!..You are out of the game..";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    if(isAlive === true && hasBlackJack === false) {
        const thirdCard = randomRange();
        cards.push(thirdCard);
        sum += thirdCard;
        renderGame();
    }
}

