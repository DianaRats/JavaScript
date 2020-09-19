function seizeTheFire(input) {
 
    let cells = input.shift().split('#');
    let water = Number(input.shift());
    let cellsToPrint = [];
    let totalEffort = 0;
    let totalFire = 0;
    for (let element of cells) {
        let command = element.split(' = ');
        let category = command[0];
        let rate = Number(command[1]);
        if (water < rate) {
            continue;
        }
        if (category === 'High' && 81 <= rate && rate <= 125) {
            cellsToPrint.push(' - ' + rate);
            water -= rate;
            totalFire += rate;
            totalEffort += 0.25 * rate;  
        } else if (category === 'Medium' && 51 <= rate && rate <= 80) {
            cellsToPrint.push(' - ' + rate);
            water -= rate;
            totalFire += rate;
            totalEffort += 0.25 * rate;
        } else if (category === 'Low' && 1 <= rate && rate <= 50) {
            cellsToPrint.push(' - ' + rate);
            water -= rate;
            totalFire += rate;
            totalEffort += 0.25 * rate;
        }
    }
    console.log('Cells:')
    console.log(cellsToPrint.join('\n'));
    console.log('Effort: ' + totalEffort.toFixed(2));
    console.log(`Total Fire: ${totalFire}`);
}
seizeTheFire(['High = 89#Low = 28#Medium = 77#Low = 23', '1250']);