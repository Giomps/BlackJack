let play = {
    name: "Giovanni",
    chips: 120
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""
let button = document.querySelector('#button')
let messageEl = document.querySelector('#message')
let result = document.querySelector('#sumEl')
let card = document.querySelector('#cards')
let newCard = document.querySelector('#card-button')
let player = document.querySelector('#player')

player.textContent = play.name + ': $' + play.chips

button.addEventListener('click', startGame)

newCard.addEventListener('click', newCards)

function getRandomCard() {
    let random = Math.floor(Math.random() * 12) + 1
    console.log(random)
    if(random === 1) {
        return 11
    } else if(random > 10) {
        return 10
    } else {
        return random 
    }
}

function startGame() {
    let random1 = getRandomCard()
    let random2 = getRandomCard()
    cards.push(random1, random2)
    sum = random1 + random2
    isAlive = true
    renderGame()
}

function newCards() {
    if(isAlive && hasBlackJack === false) {
        let card_play = getRandomCard()
        sum += card_play
        cards.push(card_play) 
        renderGame()
    }
}

function renderGame() {
    if(sum <= 20) {
        message = "Do you want to draw a new card ?"
    } else if(sum === 21) {
        message = "Wohoo ! You've got Blackjack !"
        hasBlackJack = true
    } else {
        message = "You're out of the game !"
        isAlive = false
    }
    messageEl.textContent = message
    result.textContent = 'Sum : ' + sum
    card.textContent = 'Cards: '
    for(let i = 0 ; i < cards.length ; i++) {
        card.textContent = 'Cards: ' + cards.join(' ')
    }
}
