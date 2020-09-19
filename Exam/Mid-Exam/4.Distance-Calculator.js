function solve(input) {
    let arr = input.map(Number);
    let steps = input[0];
    let length = input[1];
    let distance = input[2];
    let fifth = Math.trunc(steps / 5)
    steps = steps - fifth
    console.log(steps)
    let shorterLength = length * 0.7
    let cm = steps * length + fifth * shorterLength
    distance *= 100
    let sum = cm / distance * 100

    console.log(`You travelled ${sum.toFixed(2)} % of the distance!`)
}
solve(['100', '2', '1']);
solve(['200', '54', '14', '28', '13', 'End of battle'])