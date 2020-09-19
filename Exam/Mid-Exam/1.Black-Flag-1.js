function blackFlag(input) {
 
    const days = Number(input.shift());
    const dailyPlunder = Number(input.shift());
    const expectedPlunder = Number(input.shift());
 
    let collectedPlunder = 0;
    for (let day = 1; day <= days; day++) {
        collectedPlunder += dailyPlunder;
        if (day % 3 === 0) {
 
            collectedPlunder += 0.5 * dailyPlunder;
 
        }if (day % 5 === 0) {
 
            collectedPlunder -= 0.3 * collectedPlunder;
 
        }
    }
    if (collectedPlunder >= expectedPlunder) {
        console.log(`Ahoy! ${collectedPlunder.toFixed(2)} plunder gained. `);
    } else {
        let needed = ((collectedPlunder) / expectedPlunder * 100);
 
        console.log(`Collected only ${needed.toFixed(2)}% of the plunder.`);
    }
 
}
blackFlag([ '5', '40', '100' ])