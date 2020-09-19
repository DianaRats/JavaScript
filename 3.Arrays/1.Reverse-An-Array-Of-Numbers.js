function solve(num, elements) { 
    let newArray = [];          
    for(let i = 0; i < num; i++) {
        newArray.push(elements[i]);   
    }
     let result = '';  

     for (let i = newArray.length - 1; i >= 0; i --) { 
        result += newArray[i] + ' ';  
     }
     console.log(result);
}
solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5] );
solve(2, [66, 43, 75, 89, 47] );