function solve(input) {
 
    let materials = {};
   
    for (let i = 0; i < input.length; i+= 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
 
        if (materials.hasOwnProperty(resource)) {
            let oldValue = materials[resource];
            materials[resource] = oldValue + quantity;
        } else {
            materials[resource] = quantity;
        }
    }
 
    let arr = Object.entries(materials);
   
    for (let line of arr) {
        let resource = line[0];
        let qnt = line[1];
 
        console.log(`${resource} -> ${qnt}`)
    }
 
}
solve();