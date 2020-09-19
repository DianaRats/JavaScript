function solve(arrStr) {
    const homesToVisit = Number(arrStr[0]);
    const initialNumbersPresents = Number(arrStr[1]);
    let presentsNumber = initialNumbersPresents;
    let visitedHomes = 0;
    let timesBack = 0;
    let additionalPresentsTaken = 0;
 
    for (let i = 2; i < arrStr.length; i++) {
        let numberChildren = Number(arrStr[i]);
        visitedHomes++;
 
        if (presentsNumber >= numberChildren) {
            presentsNumber -= numberChildren;
        } else {
            timesBack++;
            let presentsTaken = Math.floor(initialNumbersPresents / visitedHomes) * (homesToVisit - visitedHomes) + (numberChildren - presentsNumber);
            presentsNumber += presentsTaken;
            additionalPresentsTaken += presentsTaken;
            presentsNumber -= numberChildren;
        }
    }
 
    if (timesBack > 0) {
        console.log(timesBack);
        console.log(additionalPresentsTaken)
    } else {
        console.log(presentsNumber);
    }
}
solve([
    '5', '20', '2',
    '1', '3',  '9',
    '5'])