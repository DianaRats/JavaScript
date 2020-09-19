function solve(input) {
    let decryptedMessage = '';
 
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let line of input.slice(1)) {
        let keyRegex = /[star]/gi;
        let found = line.match(keyRegex);
        if (found !== null) {
            let key = found.length;
            for (let i = 0; i < line.length; i++) {
                let decryptedChar = String.fromCharCode(line.charCodeAt(i) - key);
                decryptedMessage += decryptedChar;
            }
            const pattern = /@(?<planet>[A-Z][a-z]+)(?:[^@\-!\:>]+)?\:(?<population>[\d]+)(?:[^@\-!\:>]+)?!(?<attack>[A|D])!(?:[^@\-!\:>]+)?\->(?<soldiers>[\d]+)/;
            let validPlanets = decryptedMessage.match(pattern);
            decryptedMessage = '';
            if (validPlanets !== null) {
                const {
                    planet,
                    attack,
                } = validPlanets.groups;
                if (attack === 'A') {
                    attackedPlanets.push(planet);
                } else if (attack === 'D') {
                    destroyedPlanets.push(planet);
                }
            }
        }
    }
    console.log(`Product group: ${attackedPlanets.length}`);
    if (attackedPlanets.length > 0) {
        attackedPlanets
            .sort((a, b) => a.localeCompare(b))
            .forEach(p => console.log(`-> ${p}`));
    }
    console.log(`Product group: ${destroyedPlanets.length}`);
    if (destroyedPlanets.length > 0) {
        destroyedPlanets
            .sort((a, b) => a.localeCompare(b))
            .forEach(p => console.log(`-> ${p}`));
    }
}


solve(['3','@#FreshFisH@#',
'@###Brea0D@###',
'@##Che4s6E@##'
 ])


