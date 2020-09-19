function solve (arr){
    newArr=[]
    for(element of arr) {
        if(!newArr.includes(element)){
            newArr.push(element)
        }
    }
    console.log(newArr.join(` `))
}
solve([1, 2, 3, 4])
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])
