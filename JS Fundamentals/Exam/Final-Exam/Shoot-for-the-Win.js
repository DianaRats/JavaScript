function solve(input = []) {
  let targets = input.shift().split(" ").map(Number);
  input.pop();
 
  for (let i = 0; i < input.length; i++) {
    let currentTargetIndex = Number(input[i]);
    if (0 <= currentTargetIndex && currentTargetIndex <= targets.length - 1) {
      if (targets[currentTargetIndex] !== -1) {
        for (let j = 0; j < targets.length; j++) {
          if (targets[currentTargetIndex] < targets[j] && targets[j] !== -1) {
            targets[j] -= targets[currentTargetIndex];
          } else if (targets[currentTargetIndex] >= targets[j] && j !== currentTargetIndex && targets[j] !== -1) {
            targets[j] += targets[currentTargetIndex];
          }
        }
        targets.splice(currentTargetIndex, 1, -1);
      }
    }
  }
  let shotTargetsCounter = 0;
 
  for (const currentTarget of targets) {
    if (currentTarget === -1) {
      shotTargetsCounter++;
    }
  }
  console.log(`Shot targets: ${shotTargetsCounter} -> ${targets.join(" ")}`);
}

