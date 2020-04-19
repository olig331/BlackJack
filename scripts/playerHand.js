   class Hand{
    constructor(cards=[]){
      this.cards = [...cards]; 
    } 

    hit(deck){
        let dealtCards = deck.deal(1);
        this.cards = this.cards.concat(dealtCards);
    }

    score(){
      const numVal = {"Ace": 11, "King": 10, "Queen": 10, "Jack": 10};
      let aces = 0;
      let score = 0;
      
      for (let card of this.cards){
        if(card.value === "Ace"){
          aces++;
        }
        score += typeof(card.value) === "string" ? numVal[card.value]: card.value;
      }
      

      
      if ((score > 21) && (aces >= 1)){
        score -= 10;
      }
      return score;
    }
}







