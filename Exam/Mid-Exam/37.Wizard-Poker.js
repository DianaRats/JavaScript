function solve(input=[]){
    let existingCards = input.shift();
    let deck = []
     
    for (let iterator of input) {
        if (iterator === "Ready") {
            console.log(deck.join(" "));
     
            break;
        } else {
            if (iterator.includes("Add")) {
                let [add, addCardName] = iterator.split(" ")
                if (existingCards.includes(addCardName)) {
                    deck.push(addCardName)
                } else {
                    console.log("Card not found.");
                }
            } else if (iterator.includes("Insert")) {
                let [insert, insertCardName, index] = iterator.split(" ")
                if (existingCards.includes(insertCardName) && index >=0 && index < existingCards.length) {
                    deck.splice(index, 0, insertCardName)
                } else {
                    console.log("Error!");
     
                }
            } else if (iterator.includes("Remove")) {
                let [remove, removeCardName] = iterator.split(" ")
                if (deck.includes(removeCardName)) {
                    let removeIndex = deck.indexOf(removeCardName)
                    deck.splice(removeIndex, 1)
                } else {
                    console.log("Card not found.");
                }
            } else if (iterator.includes("Swap")) {
                let [swap, cardName1, cardName2] = iterator.split(" ")
                if (deck.includes(cardName1) && deck.includes(cardName2)) {
                    let card1Index = deck.indexOf(cardName1);
                    let card2Index = deck.indexOf(cardName2);
                    deck.splice(card1Index, 1, cardName2)
                    deck.splice(card2Index, 1, cardName1)
                }
            } else if (iterator.includes("Shuffle")) {
                deck.reverse();
            }
        }
    }
    }
    solve([
        'Innervate:Moonfire:Pounce:Claw:Wrath:Bite',
        'Add Moonfire',
        'Add Pounce',
        'Add Bite',
        'Add Wrath',
        'Insert Claw 0',
        'Swap Claw Moonfire',
        'Remove Bite',
        'Shuffle deck',
        'Ready'
      ]
      )