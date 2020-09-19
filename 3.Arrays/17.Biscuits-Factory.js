function solve(arr) {
    let weaponNameParts = arr.shift().split('|');
    for (let element of arr) {
        if (element === 'Done') {
            break;
        }
        let [command, position, index] = element.split(' ');
        switch (command) {
            case 'Move':
                index = +index;
                switch (position) {
                    case 'Left':
                        if (index > 0 && index < weaponNameParts.length) {                            
                            [weaponNameParts[index - 1], weaponNameParts[index]] = [weaponNameParts[index], weaponNameParts[index - 1]];
                            break;
                        }
                        break;
                    case 'Right':
                        if (index >= 0 && index < weaponNameParts.length - 1) {                            
                            [weaponNameParts[index + 1], weaponNameParts[index]] = [weaponNameParts[index], weaponNameParts[index + 1]];
                            break;
                        }
                        break;
                }
                break;
            case 'Check':
                switch (position) {
                    case 'Even':
                        console.log(weaponNameParts.filter((el, index) => index % 2 === 0).join(' '));
                        break;
                    case 'Odd':
                            console.log(weaponNameParts.filter((el, index) => index % 2 !== 0).join(' '));
                        break;
                }
                break;
        }
    }
    console.log(`You crafted ${weaponNameParts.join('')}!`);
}
solve(['78','8','16000' ]);