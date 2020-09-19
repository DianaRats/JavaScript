function solve(array = []) {
    let areEqual = false;
    for( let i = 0; i < array.length; i++) {
        let rightSum = 0;
        let number = array[i];

        for (let j = array.length - 1; j > i; j --) {
        let current = array[j];
        rightSum += current;
        }
        let leftSum = 0;
        for (let b = 0; b < i; b++) {
            let current = array[b];
            leftSum += current;
        }
        if (leftSum === rightSum) {
            console.log(i);
            areEqual = true;
            break;
        }
    }
    if (areEqual === false) {
        console.log('no');
    }
}
solve([1, 2, 3, 3]);

