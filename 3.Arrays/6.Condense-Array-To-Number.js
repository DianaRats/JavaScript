function solve(numbersInput) {
    let numbers = numbersInput;
    
    while (numbers.length > 1) {
    let condensed = [];  
    for (i = 0; i < numbers.length - 1; i++) {
    condensed.push(numbers[i] + numbers[i + 1]);
    }                    
      numbers = condensed;   
      condensed = [];        
}                            
console.log(numbers[0]);
}                        
solve([2,10,3]);
solve([5,0,4,1,2]);
solve([1]);