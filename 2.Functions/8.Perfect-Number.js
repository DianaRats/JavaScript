function printPerfectNumber(num) {
    let sum = 0;
    for (let i = 0; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }
    if (sum === num) {
        console.log('We have a perfect number!');
    } else {
        console.log('Its not so perfect.');
    }
}
printPerfectNumber(6);
