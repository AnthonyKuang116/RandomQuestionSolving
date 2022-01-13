function cardPackets() {
    const cardTypes = [4,7,5,11,15];
    const n = 5;

    //returning 2 packets
    let count = 0;
    for (let i = 0; i < cardTypes.length; i++) {
        if(cardTypes[i] % 2 != 0) {
            cardTypes[i] = cardTypes[i] + 1;
            count += 1;
        }
    }
    console.log("Number of cards needed to divide into 2 packs: " + count)
    console.log(cardTypes)
}

cardPackets();