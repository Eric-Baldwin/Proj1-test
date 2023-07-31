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

function shipPlayer() {
  const explosionGif = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c26b88f6-edf7-4b66-b09e-ebc0c71ac6f1/dbn7a6-dcc9a7df-63d4-49d5-940a-b58097a42c21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyNmI4OGY2LWVkZjctNGI2Ni1iMDllLWViYzBjNzFhYzZmMVwvZGJuN2E2LWRjYzlhN2RmLTYzZDQtNDlkNS05NDBhLWI1ODA5N2E0MmMyMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nLIBXViC-TmdFUHCnHD7M_fWI9Ijrd6I0BPf37lqaow';
  const kaboom = document.createElement('img');
  kaboom.src = explosionGif;
  kaboom.style.position = 'absolute';
  kaboom.style.width = '274px';
  kaboom.style.height = '400px';
  kaboom.style.top = '18%';
  kaboom.style.left = '60%';
  kaboom.style.transform = 'translate(-50%, -50%)';
  kaboom.style.transform = 'rotate(90deg)';
  kaboom.style.zIndex = '9999';
  document.body.appendChild(kaboom);
  setTimeout(() => {
    document.body.removeChild(kaboom);
  }, 3000);
}

function showExplosionPlayer() {
  const explosionGif = 'https://media.tenor.com/ptNG8DQFPD4AAAAj/explotion-explode.gif';
  const kaboom = document.createElement('img');
  kaboom.src = explosionGif;
  kaboom.style.position = 'absolute';
  kaboom.style.width = '274px';
  kaboom.style.height = '400px';
  kaboom.style.top = '350px';
  kaboom.style.left = '300px';
  kaboom.style.transform = 'translate(-50%, -50%)';
  kaboom.style.zIndex = '8999';
  document.body.appendChild(kaboom);
  setTimeout(() => {
    document.body.removeChild(kaboom);
  }, 3000);
}

function shipComputer() {
  const explosionGif = 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/c26b88f6-edf7-4b66-b09e-ebc0c71ac6f1/dbn7a6-dcc9a7df-63d4-49d5-940a-b58097a42c21.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2MyNmI4OGY2LWVkZjctNGI2Ni1iMDllLWViYzBjNzFhYzZmMVwvZGJuN2E2LWRjYzlhN2RmLTYzZDQtNDlkNS05NDBhLWI1ODA5N2E0MmMyMS5naWYifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.nLIBXViC-TmdFUHCnHD7M_fWI9Ijrd6I0BPf37lqaow';
  const kaboom = document.createElement('img');
  kaboom.src = explosionGif;
  kaboom.style.position = 'absolute';
  kaboom.style.width = '274px';
  kaboom.style.height = '400px';
  kaboom.style.top = '18%';
  kaboom.style.left = '22%';
  kaboom.style.transform = 'translate(-50%, -50%)';
  kaboom.style.transform = 'rotate(270deg)';
  kaboom.style.zIndex = '9999';
  document.body.appendChild(kaboom);
  setTimeout(() => {
    document.body.removeChild(kaboom);
  }, 3000);
}

function showExplosionComputer() {
  const explosionGif = 'https://media.tenor.com/ptNG8DQFPD4AAAAj/explotion-explode.gif';
  const kaboom = document.createElement('img');
  kaboom.src = explosionGif;
  kaboom.style.position = 'absolute';
  kaboom.style.width = '274px';
  kaboom.style.height = '400px';
  kaboom.style.top = '350px';
  kaboom.style.right = '0px';
  kaboom.style.transform = 'translate(-50%, -50%)';
  kaboom.style.zIndex = '8999';
  document.body.appendChild(kaboom);
  setTimeout(() => {
    document.body.removeChild(kaboom);
  }, 3000);
}

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
      message = 'You Won!';
      showExplosionComputer()
      shipPlayer()
  } else if (computerValue > playerValue) {
      message = 'You Lost!';
      showExplosionPlayer()
      shipComputer ()
  } else {
      message = 'It\'s a Tie!';
      showExplosionPlayer()
      showExplosionComputer()
      shipPlayer()
      shipComputer ()
  }

  delayedAlert(message, 1000).then(() => {
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
