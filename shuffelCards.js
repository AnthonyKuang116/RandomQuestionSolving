function shuffelCards() {
    deck = [];
    suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    cardValue = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];

    //creating cards
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cardValue.length; j++) {
            let card = {"Suit": suits[i], Value: cardValue[j]}
            deck.push(card)
        }
    }    
    
    //shuffeling cards
    for (let k = deck.length - 1; k > 0; k--) {
        let random  = Math.floor(Math.random() * k);
        let temp = deck[k];
        deck[k] = deck[random];
        deck[random] = temp;
    }

    for(let l = 0; l < deck.length; l++) {
        console.log(`${deck[l].Value} of ${deck[l].Suit}`)
    }
}

shuffelCards();