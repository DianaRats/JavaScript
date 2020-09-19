function easterGiftss(input) {
    let plannedGifts = input.shift().split(" ");

    for (let i = 0; i < input.length; i++) {
        let currentNote = input[i].split(' ');
        let command = currentNote[0];

        switch (command) {
            case 'OutOfStock':
                let selectedGift = currentNote[1];
                if (plannedGifts.includes(selectedGift)) {
                    for (let j = 0; j < plannedGifts.length; j++) {
                        plannedGifts[plannedGifts.indexOf(selectedGift)] = "None";
                    }
                }
                break;
            case 'Required':
                let requiredGift = currentNote[1];
                let requiredIndex = +currentNote[2];
                if (requiredIndex >= 0 && requiredIndex <= plannedGifts.length) {
                    plannedGifts[requiredIndex] = requiredGift;
                }
                break;
            case 'JustInCase':
                let inCaseGift = currentNote[1];
                plannedGifts.pop();
                plannedGifts.push(inCaseGift);
                break;
            case 'No money':
                break;
        }
    }
    plannedGifts = plannedGifts.filter((val) => val !== 'None');
    console.log(plannedGifts.join(' '));
}
easterGiftss([
    'Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]
)