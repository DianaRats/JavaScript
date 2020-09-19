function solve(num) {
    let days = ["Monday", "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];

    if (num < 1 || 7 < num) {        
         console.log('Invalid day!');        
} else {                                
    console.log(days[num - 1]);       
                                

}
}
solve(3);
solve(6);
solve(11);
