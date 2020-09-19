function solve(numbers) {
    let condensed = [];

    for (i = 0; i < numbers.length - 1; i++) {
        condensed.push(numbers[i] + numbers[i +1]); 
                      
    }
      console.log(condensed);
}
solve([5,0,4,1,2]);