function solve(input) {
 
    let allPaintingNumbers = input.shift()
        .split(' ')
    let instruction = '';
    while (true) {
        instruction = input.shift();
        if (instruction === 'END') {
            break;
        }
        instruction = instruction.split(' '); // an array
        let command = instruction[0];
 
        if (command === 'Change') {
        } else if (command === 'Hide') {
            allPaintingNumbers = hide(instruction[1]);
        } else if (command === 'Switch') {
           allPaintingNumbers = swap(instruction[1], instruction[2]);
        } else if (command === 'Insert') {
            let place = Number(instruction[1]);
            let newPainting = instruction[2];
            place++;
            if (place < allPaintingNumbers.length && place > -1) {
                allPaintingNumbers.splice(place, 0, newPainting);
            }
        } else if (command === 'Reverse') { //reverse
            allPaintingNumbers = allPaintingNumbers.reverse();
        }
    }
    function change(oldNumber, newNumber) {
        for (let i = 0; i < allPaintingNumbers.length; i++) {
            if (allPaintingNumbers[i] === oldNumber) {
                allPaintingNumbers[i] = newNumber;
                break;
            }
        }
        return allPaintingNumbers;
    }
 
    function hide(paintingNumber) {
        for (let i = 0; i < allPaintingNumbers.length; i++) {
            if (allPaintingNumbers[i] === paintingNumber) {
                allPaintingNumbers.splice(i, 1);
                break;
            }
        }
        return allPaintingNumbers;
    }
    function swap(paintingNumberFirst, paintingNumberSecond) {
        let temp;
        let isFirstExist = false;
        let isSecondExist = false;
        let indexFirst;
        let indexSecond;
 
        for (let i = 0; i < allPaintingNumbers.length; i++) {
            if (allPaintingNumbers[i] === paintingNumberFirst) {
                isFirstExist = true;
                indexFirst = i;
            }
            if (allPaintingNumbers[i] === paintingNumberSecond) {
                isSecondExist = true;
                indexSecond = i;
            }
        }
        if (isFirstExist && isSecondExist) {
            temp = allPaintingNumbers[indexFirst];
            allPaintingNumbers[indexFirst] = allPaintingNumbers[indexSecond];
            allPaintingNumbers[indexSecond] = temp;
        }
        return allPaintingNumbers;
    }
 
    let result = '';
    for (let item of allPaintingNumbers) {
        result += item + ' ';
    }
    console.log(result);
}
solve([
    '115 115 101 114 73 111 116 75',
    'Insert 5 114',
    'Switch 116 73',
    'Hide 75',
    'Reverse ',
    'Change 73 70',
    'Insert 10 85',
    'END'])