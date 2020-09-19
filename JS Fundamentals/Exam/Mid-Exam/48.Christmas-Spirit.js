function solve(params) {
    let quantity = Number(params[0])
    let maxDay = Number(params[1]);
    let ornamenty = 2
    let treeSkirt = 5;
    let treeGralands = 3;
    let treeLights = 15;
    let budget = 0;
    let totalSpirit = 0;
    for (let day = 1; day <= maxDay; day++) {
        if (day % 10 === 0) {
            totalSpirit -= 20;
            budget += treeGralands + treeSkirt + treeLights;
            if (day === maxDay) {
                totalSpirit -= 30
            }
        }
        if (day % 11 === 0) {
            quantity += 2
        }
        if (day % 2 === 0) {
            budget += quantity * ornamenty;
            totalSpirit += 5;
        }
        if (day % 3 === 0) {
            budget += quantity * (treeSkirt + treeGralands);
            totalSpirit += 13;
        }
        if(day%5===0){
            budget+=quantity*treeLights;
            totalSpirit+=17;
            if(day%3===0){
                totalSpirit+=30
            }
        }
    }
    console.log(`Total cost: ${budget}\n Total spirit:${totalSpirit}`)
}
solve([`3`, `20`])