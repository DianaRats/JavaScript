
function solve(a, b) {
    let arr = a;
    let comands = b;
    for (let i = 0; i < comands.length; i++) {
        let comand = comands[i].split(` `);
        let action = comand.shift();
        if (action === `add`) {
            let index = comand.shift()
            let element = Number(comand.shift())
            arr.splice(index, 0, element)
        } else if (action === `addMany`) {
            let index = comand.shift();
            let elements = comand.map(Number)
            arr.splice(index, 0, ...elements)
        } else if (action === `contains`) {
            let element = Number(comand.shift())
            let findIndex = arr.indexOf(element)
            console.log(findIndex)
        } else if (action === `remove`) {
            let index = Number(comand.shift())
            arr.splice(index, 1)
        } else if (action === `shift`) {
            let positionToShift = Number(comand.shift())
            let elements = arr.splice(0, positionToShift)
            arr.push(...elements)
        } else if (action === `sumPairs`) {
            let newArr = [];
            for (let i = 0; i < arr.length; i++) {
                if (i === arr.length - 1) {
                    newArr.push(arr[i])
                } else {
                    newArr.push(arr[i] + arr[i + 1])
                    i++
                }
            }
            arr = newArr;
        } else if (action === `print`) {
            console.log(`[ ${arr.join(`, `)} ]`)
        } else {
            console.log(`[ ${arr.join(`, `)} ]`)
        }
    }
}
solve([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print'])