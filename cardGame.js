let deckID = "";
let playerCard = "";
let computerCard = "";

const playerCardImg = document.getElementById('player-card');
const computerCardImg = document.getElementById('computer-card');
const drawButton = document.getElementById('draw-button');

fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
  .then(response => response.json())
  .then(data => {
    deckID = data.deck_id;
  });

drawButton.addEventListener('click', () => {
  fetch(`https://deckofcardsapi.com/api/deck/${deckID}/draw/?count=2`)
    .then(response => response.json())
    .then(data => {
      playerCard = data.cards[0];
      computerCard = data.cards[1];
      playerCardImg.src = playerCard.image;
      computerCardImg.src = computerCard.image;
      determineWinner();
    })
});

function delayedAlert(msg, delay) {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          alert(msg);
          resolve();
      }, delay);
  });
}

function determineWinner() {
  const playerValue = getValue(playerCard.value);
  const computerValue = getValue(computerCard.value);
  let message;

  if (playerValue > computerValue) {
      message = 'Player wins!';
  } else if (computerValue > playerValue) {
      message = 'Computer wins!';
  } else {
      message = 'Tie!';
  }

  delayedAlert(message, 500).then(() => {
      playerCardImg.src = 'https://img.myloview.com/stickers/dark-space-background-for-astrology-witchcraft-fortune-telling-heavenly-abstract-tarot-card-banner-with-the-moon-and-copy-space-vintage-vector-template-700-255889580.jpg';
      computerCardImg.src = 'https://img.myloview.com/stickers/dark-space-background-for-astrology-witchcraft-fortune-telling-heavenly-abstract-tarot-card-banner-with-the-moon-and-copy-space-vintage-vector-template-700-255889580.jpg';
  });
}


function getValue(cardValue) {
  switch (cardValue) {
    case 'ACE':
      return 14;
    case 'KING':
      return 13;
    case 'QUEEN':
      return 12;
    case 'JACK':
      return 11;
    default:
      return parseInt(cardValue);
  }
}
