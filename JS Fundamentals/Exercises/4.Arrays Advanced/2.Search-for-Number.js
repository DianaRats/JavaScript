function solve(arr,numbers){
    numberToTake=numbers[0];
    index=numbers[1]
    numberToSearch=numbers[2];
     let count=arr
     .slice(0,numberToTake)
     .slice(index)
     .filter(num=>num===numberToSearch)
     .length;
 console.log(`Number ${numberToSearch} occurs ${count} times.`);
 }
 solve([5, 2, 3, 4, 1, 6], [5, 2, 3]);
 
