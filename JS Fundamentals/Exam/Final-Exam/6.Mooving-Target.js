function solve(input) {
  let targets = input.shift().split(" ").map(Number);
  input.pop();
 
  for (const currentLine of input) {
    let [command, index, token] = currentLine.split(" ");
    index = Number(index);
    token = Number(token);
    switch (command) {
      case "Shoot":
        if (0 <= index && index <= targets.length - 1) {
          targets[index] -= token;
 
          if (targets[index] <= 0) {
            targets.splice(index, 1);
          }
        }
        break;
 
      case "Add":
        if (0 <= index && index <= targets.length - 1) {
          targets.splice(index, 0, token);
        } else {
          console.log("Invalid placement!");
        }
        break;
 
      case "Strike":
        if (0 <= index - token && index + token <= targets.length - 1) {
          targets.splice(index - token, token + 1 + token);
        } else {
          console.log("Strike missed!");
        }
        break;
    }
  }
  console.log(targets.join("|"));
}
solve(['52 74 23 44 96 110',    
        'Shoot 5 10',            
        'Shoot 1 80',
        'Strike 2 1',
        'Add 22 3',
        'End'])
