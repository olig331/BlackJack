class Card {
    constructor(suit, value) {
        this.suit = suit;
        this.value = value;
        this.img = Card.imgs[suit][value.toString()];
    }

    static imgs = {

        backOfCard: "./img/backOfCard.png",

        Clubs: {
            "Ace": "./img/c01.png",
            "2": "./img/c02.png",
            "3": "./img/c03.png",
            "4": "./img/c04.png",
            "5": "./img/c05.png",
            "6": "./img/c06.png",
            "7": "./img/c07.png",
            "8": "./img/c08.png",
            "9": "./img/c09.png",
            "10": "./img/c10.png",
            "Jack": "./img/c11.png",
            "Queen": "./img/c12.png",
            "King": "./img/c13.png",
        },

        Diamonds: {
            "Ace": "./img/d01.png",
            "2": "./img/d02.png",
            "3": "./img/d03.png",
            "4": "./img/d04.png",
            "5": "./img/d05.png",
            "6": "./img/d06.png",
            "7": "./img/d07.png",
            "8": "./img/d08.png",
            "9": "./img/d09.png",
            "10": "./img/d10.png",
            "Jack": "./img/d11.png",
            "Queen": "./img/d12.png",
            "King": "./img/d13.png",
        },

        Hearts: {
            "Ace": "./img/h01.png",
            "2": "./img/h02.png",
            "3": "./img/h03.png",
            "4": "./img/h04.png",
            "5": "./img/h05.png",
            "6": "./img/h06.png",
            "7": "./img/h07.png",
            "8": "./img/h08.png",
            "9": "./img/h09.png",
            "10": "./img/h10.png",
            "Jack": "./img/h11.png",
            "Queen": "./img/h12.png",
            "King": "./img/h13.png",
        },

        Spades: {
            "Ace": "./img/s01.png",
            "2": "./img/s02.png",
            "3": "./img/s03.png",
            "4": "./img/s04.png",
            "5": "./img/s05.png",
            "6": "./img/s06.png",
            "7": "./img/s07.png",
            "8": "./img/s08.png",
            "9": "./img/s09.png",
            "10": "./img/s10.png",
            "Jack": "./img/s11.png",
            "Queen": "./img/s12.png",
            "King": "./img/s13.png",
        }

    };
}


class Deck {
    constructor(suits, values) {
        this.remainingCards = [];
        for (let suit of suits) {
            for (let value of values) {
                this.remainingCards.push(new Card(suit, value));
            }
        }
    }


    shuffle() {
        let counter = this.remainingCards.length, temp, i;

        while (counter) {
            i = Math.floor(Math.random() * counter--);
            temp = this.remainingCards[counter];
            this.remainingCards[counter] = this.remainingCards[i];
            this.remainingCards[i] = temp;
        }
        return this.remainingCards;
    }


    deal(num) {
        return this.remainingCards.splice(-num);
    }


}
