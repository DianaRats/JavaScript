function solve10 (input) {
    let field = input.shift();
    let startingLadybugsString = input.shift();
    let startingLadybugsArr = startingLadybugsString.split(' ');
    let arrOfCommands = input;
    let arrField = [];
 
    // building the whole field with 0 (zeros)
    for (let i = 0; i < field; i++) {
        arrField.push(0);
    }
 
    // starting Ladybugs positions
    for (let i = 0; i < startingLadybugsArr.length; i++) {
        if (startingLadybugsArr[i] >= 0 && startingLadybugsArr[i] < arrField.length) {
            let number = startingLadybugsArr[i];
            arrField[number] = 1;
        }
    }
    for (let i = 0; i < arrOfCommands.length; i++) {
        let singleCommand = arrOfCommands[i].split(' ');
        let indexStart = Number(singleCommand[0]);
        let direction = singleCommand[1];
        let movingDistance = Number(singleCommand[2]);
 
        if (arrField[indexStart] === 0 || movingDistance === 0) {
            continue;        
        } else if (indexStart >= 0 && indexStart < arrField.length) {
            if ((direction === 'right' && movingDistance > 0) || (direction === 'left' && movingDistance < 0)) {          
                arrField[indexStart] = 0;
                for (let iR = indexStart + Math.abs(movingDistance); iR < arrField.length && iR >= 0; iR += Math.abs(movingDistance)) {
                    if (arrField[iR] === 0) {
                        arrField[iR] = 1;
                        break;
                    }
                }
            } else if ((direction === 'left' && movingDistance > 0) || (direction === 'right' && movingDistance < 0)) {
                arrField[indexStart] = 0;
                for (let iL = indexStart - Math.abs(movingDistance); iL >= 0 && iL < arrField.length; iL -= Math.abs(movingDistance)) {
                    if (arrField[iL] === 0) {
                        arrField[iL] = 1;
                        break;
                    }
                }
            }
        }
    }
    console.log(arrField.join(' '));
}
solve10()