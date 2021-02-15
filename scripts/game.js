class Game {
    constructor(suits, values, wallet) {
        this.suits = suits;
        this.values = values;
        this.wallet = wallet;
    }

    newGame() {
        this.deck = new Deck(this.suits, this.values);
        this.deck.shuffle();
        this.player = new Hand();
        this.dealer = new Hand();
        this.deal();
        toggleGameBtns();
        allBetBtns.style.display = "none";
    }

    deal() {
        setTimeout(() => {
            this.player.hit(this.deck);
            this.showPlayerCard();
            this.showScore();
        }, 0)
        setTimeout(() => {
            this.dealer.hit(this.deck)
            this.showDealerCard();
            this.showScore();
        }, 300)
        setTimeout(() => {
            this.player.hit(this.deck)
            this.showPlayerCard();
            this.showScore();
            if (this.player.score() === 21) {
                gameText.innerHTML = "BLACKJACK!!!!!";
            } else {
                gameText.innerHTML = " ";
            }
        }, 600)
    }


    playerTurn() {
        setTimeout(() => {
            this.player.hit(this.deck);
            this.showPlayerCard();
            this.showScore();


            if (this.player.score() > 21) {
                gameText.innerHTML = `Dealer wins! <br /> Place Your Bets!`;
                balance.stake = 0;
                walletText.innerHTML = `Balance: £${balance.wallet}`; stakeText.innerHTML = `Stake: £${balance.stake}`;
                this.clear();
                allBtns.style.display = "none";
                allBetBtns.style.display = "flex";
            }
        }, 350);
    }


    standing() {
        toggleGameBtns();
        this.dealerTurn();
    }


    doubleDown() {
        if (balance.wallet >= balance.stake) {
            walletText.innerHTML = `Balance: £${balance.wallet - balance.stake}`;
            stakeText.innerHTML = `Stake: £${balance.stake * 2}`;
            balance.wallet -= balance.stake;
            balance.stake *= 2;

            setTimeout(() => {
                this.player.hit(this.deck)
                this.showPlayerCard();
                this.showScore();


                if (this.player.score() > 21) {
                    gameText.innerHTML = `Dealer wins! <br /> Place Your Bets!`;
                    balance.stake = 0;
                    walletText.innerHTML = `Balance: £${balance.wallet}`; stakeText.innerHTML = `Stake: £${balance.stake}`;
                    this.clear();
                    allBtns.style.display = "none";
                    allBetBtns.style.display = "flex";

                } else {
                    setTimeout(() => {
                        this.standing();
                    }, 500);
                }
            }, 350);
        } else {
            gameText.innerHTML = `Insufficient funds! Stand or Hit to continue!`
        }
    }

    dealerTurn() {
        setTimeout(() => {
            this.dealer.hit(this.deck);
            this.dealer.score();
            this.showDealerCard();
            this.showScore();
        }, 350);

        setTimeout(() => {
            while ((this.dealer.score() < 17) && (this.dealer.score() < 21)) {

                this.dealer.hit(this.deck);
                this.dealer.score();
                this.showDealerCard();
                this.showScore();

            }

            if (this.dealer.score() > 21) {
                gameText.innerHTML = `You Win £${balance.stake} <br /> Place your Bets!`;
                balance.wallet += balance.stake * 2;
                balance.stake = 0;
                walletText.innerHTML = `Balance: £${balance.wallet}`;
                stakeText.innerHTML = `Stake: £${balance.stake}`;
                this.clear();

            } else if (this.player.score() <= this.dealer.score()) {
                gameText.innerHTML = `Dealer wins! <br /> Place Your Bets!`;
                balance.stake = 0;
                walletText.innerHTML = `Balance: £${balance.wallet}`;
                stakeText.innerHTML = `Stake: £${balance.stake}`;
                this.clear();

            } else {
                gameText.innerHTML = `You Win £${balance.stake} <br /> Place your Bets!`;
                balance.wallet += balance.stake * 2;
                balance.stake = 0;
                walletText.innerHTML = `Balance: £${balance.wallet}`;
                stakeText.innerHTML = `Stake: £${balance.stake}`;
                this.clear();
            }
            allBetBtns.style.display = "flex";
        }, 1500)

    }


    showPlayerCard() {
        const playerArea = document.getElementById('player_container');
        const img = document.createElement('img');

        for (let i = 0; i < this.player.cards.length; i++) {
            img.className = 'card_img';
            img.src = `${this.player.cards[i].img}`;
            playerArea.appendChild(img);

        }
    }


    showDealerCard() {
        const playerArea = document.getElementById('dealer_container');
        const img = document.createElement('img');

        for (let i = 0; i < this.dealer.cards.length; i++) {
            img.className = 'card_img';
            img.src = `${this.dealer.cards[i].img}`;
            playerArea.appendChild(img);
        }
    }

    showScore() {
        dealer_score.innerHTML = `Dealer Total is: ${this.dealer.score()}`;
        player_score.innerHTML = `Your Total is: ${this.player.score()}`;
    }


    clear() {
        setTimeout(() => {
            const clearPlayerArea = document.getElementById('player_container');
            clearPlayerArea.innerHTML = "";

            const clearDealerArea = document.getElementById('dealer_container');
            clearDealerArea.innerHTML = "";

            dealer_score.innerHTML = "";
            player_score.innerHTML = "";
        }, 2000);
    }
}








