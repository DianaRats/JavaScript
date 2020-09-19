function solve(arrayOne = [], arrayTwo = []) {
    let resultArray = [];
    for (let i = 0; i < arrayOne.length; i ++ ) {
        let element = arrayOne[i];

        if (i % 2 === 0) {
            element = Number(element);
            resultArray.push(element + Number(arrayTwo[i]));
        } else {
            resultArray.push(element + arrayTwo[i]);
        }
    }
       console.log(resultArray.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11']);