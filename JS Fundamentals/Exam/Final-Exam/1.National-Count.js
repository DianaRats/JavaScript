
function solve(input) {
    let firstAnswer = +input.shift();
    let seconAnswer = +input.shift();
    let thirdAnswer = +input.shift();
    let peopleCount = +input.shift();
    let totalAnswerTime = firstAnswer + seconAnswer + thirdAnswer;
    let counter = 0;

    while (peopleCount > 0) {

        counter++;
        if (counter % 4 != 0) {
            peopleCount = peopleCount - totalAnswerTime;
        }
    }
    console.log(`Time needed: ${counter}h.`);
}
solve(['5', '6', '4', '20']);
solve(['1', '2', '3', '45']);
solve(['3', '2', '5', '40']);

