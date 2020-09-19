function dictionary(input) {
    let objList = [];
    while (input.length > 0) {
        let obj = JSON.parse(input.shift())
        objList.push(obj);
    }
    objList.sort((a, b) => {
        let keyA = Object.keys(a)[0];
        let keyB = Object.keys(b)[0];
        return keyA.localeCompare(keyB);
    });
    for (const index in objList) {
        for (const key in objList[index]) {
            if (objList[index].hasOwnProperty(key)) {
                console.log(`Term: ${key} => Definition: ${objList[index][key]}`);
            }
        }
    }
}
dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
])