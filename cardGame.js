let deckID = "";
let playerCard = "";
let computerCard = "";
let drawButton = document.getElementByID('draw-button');

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
.then(response => response.json())
.then(data => {
    deckId = data.deck_id;
});

drawButton.addEventListener('click', () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
  .then(response => response.json())
  .then(data => {
      playerCard = data.cards[0];
      computerCard = data.cards[1];
  document.getElementById('player-card').style.backgroundImage = `url(${playerCard.image})`;
  document.getElementById('computer-card').style.backgroundImage = `url(${computerCard.image})`;
})
})