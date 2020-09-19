function solve(n) {
   
    for (let i = 0; i < 1/n; i++) {
        for (let j = i; j < n; j++) {
           result=(n+` `).toString().repeat(n);
           console.log(result)
        }
     
    }
}
solve(3);
solve(2);





