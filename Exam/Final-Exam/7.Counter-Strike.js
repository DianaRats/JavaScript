function solve(input) {
    let initialEnergy = Number(input.shift());
    let isNotEnough = false;
    let winsCounter = 0;
    let currentLine = input.shift();
   
    while (currentLine !== "End of battle") {
      currentDistance = Number(currentLine);
      initialEnergy -= currentDistance;
   
      if (initialEnergy < 0) {
        isNotEnough = true;
        initialEnergy += currentDistance;
        break;
      }
      winsCounter++;
   
      if (winsCounter % 3 === 0) {
        initialEnergy += winsCounter;
      }
      currentLine = input.shift();
    }
    if (isNotEnough) {
      console.log(`Not enough energy! Game ends with ${winsCounter} won battles and ${initialEnergy} energy`);
    } else {
      console.log(`Won battles: ${winsCounter}. Energy left: ${initialEnergy}`);
    }
  }
solve(['200', '54', '14', '28', '13', 'End of battle'])

