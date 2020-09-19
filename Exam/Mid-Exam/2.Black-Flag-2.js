function solve(input) {
    [days, plunderForDay, expected] = input.map(Number);
    
    let total = 0;

    for (let day = 1;day <= days; day++) {
        total += plunderForDay;
        if (day % 3 === 0) {
            total += plunderForDay * 0.5;
        }
        if (day % 5 === 0) {
            total -= total * 0.3;
        }
    }   
    if (total >= expected) {
        return `Ahoy! ${total.toFixed(2)} plunder gained.`
    } else {
        let percentage = total / expected * 100;
        return `Collected only ${percentage.toFixed(2)}% of the plunder.`
    }
}
console.log(solve(["5", "40", "100"]))

