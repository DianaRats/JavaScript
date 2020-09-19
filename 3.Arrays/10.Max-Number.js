function solve(array = []) {
    let resultArray = [];
   
    for(let i = 0; i < array.length; i++) {
        let isTopInt = true;
        let currentElement = array[i];
        let rightElementArray = array.slice(i + 1);

        for (let j = 0; j < rightElementArray.length; j++) {
            if(currentElement <= rightElementArray[j]) {
                isTopInt = false;
                break;
            }
        }
        if(isTopInt === true) {
            resultArray.push(currentElement);
        }    
    }
    console.log(resultArray.join(' '))
}
solve([1, 4, 3, 2]);