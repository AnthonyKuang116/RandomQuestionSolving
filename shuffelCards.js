function shuffelCards() {
    let deck = [];
    const suits = ["Spades", "Hearts", "Clubs", "Diamonds"];
    const cardValue = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
    const specialCards = ["Joker", "Joker"];

    //creating cards
    for (let i = 0; i < suits.length; i++) {
        for (let j = 0; j < cardValue.length; j++) {
            let card = {"Suit": suits[i], Value: cardValue[j]}
            deck.push(card)
        }
    }

    for (let s = 0; s < specialCards.length; s++){
        let card = {"Suit": specialCards[s], Value: specialCards[s]}
        deck.push(card)
    }
    
    //shuffeling cards
    for (let k = deck.length - 1; k > 0; k--) {
        let random  = Math.floor(Math.random() * k);
        let temp = deck[k];
        deck[k] = deck[random];
        deck[random] = temp;
    }

    for(let l = 0; l < deck.length; l++) {
        if(deck[l].Value === "Joker") {
            console.log("Joker")
        }
        else {
            console.log(`${deck[l].Value} of ${deck[l].Suit}`)
        }
    }
}

shuffelCards();