// -------------------------- Global Variables ----------------------------  //
const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];
const values = [2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King", "Ace"];
const balance = {wallet: 100, stake: 0,};


// -------------------------- HTML ID Variables ----------------------------  //
const standBtn = document.getElementById('stand');
const allBtns = document.getElementById('game_buttons');
const hitBtn = document.getElementById('hit');
const playBtn = document.getElementById('play');
const double = document.getElementById('double');
const dealer_score = document.getElementById('the_dealers_score');
const player_score = document.getElementById('the_players_score');
const five = document.getElementById('five');
const ten = document.getElementById('ten');
const twenty = document.getElementById('twenty');
const betBtn = document.getElementById('bet');
const walletText = document.getElementById('wallet');
const stakeText = document.getElementById('stake');
const gameText = document.getElementById('game_text');
const allBetBtns = document.getElementById('bet_buttons');
const resetFunds = document.getElementById('reset_funds');


// ------------------------------Event Listeners --------------------------- //
standBtn.addEventListener('click', () => {game.standing()});
hitBtn.addEventListener('click', () => {game.playerTurn()});
playBtn.addEventListener('click', function (){showPage(); gameText.innerHTML = `Welcome <br> Place Your bets!!`; allBtns.style.display ="none"});
double.addEventListener('click', () => {game.doubleDown()});
betBtn.addEventListener('click', function (){if(balance.stake > 0){game.newGame()}else {gameText.innerHTML = `You have no placed a stake`}});


five.addEventListener('click', function(){if(balance.wallet >= 5){balance.stake += 5; balance.wallet -= 5; walletText.innerHTML = `Balance: £${balance.wallet}`; stakeText.innerHTML = `Stake: £${balance.stake}`;return(balance.wallet, balance.stake)}else{gameText.innerHTML = `Not enough Funds`; noFunds()}});
ten.addEventListener('click', function(){if(balance.wallet >= 10){balance.stake += 10; balance.wallet -= 10; walletText.innerHTML = `Balance: £${balance.wallet}`; stakeText.innerHTML = `Stake: £${balance.stake}`; return(balance.wallet, balance.stake)}else{gameText.innerHTML = `Not enough Funds`; noFunds()}});
twenty.addEventListener('click', function(){if(balance.wallet >= 20){balance.stake += 20; balance.wallet -= 20; walletText.innerHTML = `Balance: £${balance.wallet}`; stakeText.innerHTML = `Stake: £${balance.stake}`; return(balance.wallet, balance.stake)}else{gameText.innerHTML = `Not enough Funds`; noFunds()}});


// ------------------------------ Initiliase A New Game --------------------------- //
let game = new Game(suits, values);


// ------------------------------ Button Functions  --------------------------- //
function showPage(){
  playBtn.style.display ="none";
  toggleDisplay();
}


function toggleDisplay(){
  let x = document.getElementById('all');
  if(x.style.display === "grid"){
    x.style.display = "none";
  }else {
    x.style.display = "grid";
  }
}

function toggleGameBtns(){
  let z = allBtns;
  if(z.style.display === "block"){
    z.style.display ="none"
  }else {
    z.style.display ="block";
  }
}

function noFunds(){
  if((balance.wallet < 5)&&(balance.stake === 0)){
    allBetBtns.style.display ="none";
    resetFunds.style.display ="flex";
    resetFunds.addEventListener('click', function(){balance.wallet = 100;  walletText.innerHTML = `Balance: £${balance.wallet}`; allBetBtns.style.display ="flex"; resetFunds.style.display ="none"; gameText.innerHTML = `Funds Added <br /> Place Your Bets!`})
  }
  
}
