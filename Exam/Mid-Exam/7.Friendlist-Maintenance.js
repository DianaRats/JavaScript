function friendList(input) {
    let listsOfFriends = input.shift().split(', ');
    let blackListCount = 0;
    let lostListCount = 0;
    for (let i = 0; i < input.length; i++) {
        let commands = input[i].split(' ');
        let command = commands[0];
        if (command === 'Report') {
            break;
        }
        if (command === 'Blacklist') {
            let names = commands[1];
            if (listsOfFriends.includes(names)) {
                let index = listsOfFriends.indexOf(names);
                listsOfFriends.splice(index, 1, 'Blacklisted');
                console.log(`${names} was blacklisted.`);
                blackListCount++;
            } else {
                console.log(`${names} was not found.`)
            }
        }
        if (command === 'Error') {
            let nameIndex = listsOfFriends[Number(commands[1])];
            if (nameIndex !== 'Blacklisted' && nameIndex !== 'Lost') {
                let index = listsOfFriends.indexOf(nameIndex);
                listsOfFriends.splice(index, 1, 'Lost');
                console.log(`${nameIndex} was lost due to an error.`);
                lostListCount++;
            }
        }
        if (command === 'Change') {
            let index = Number(commands[1]);
            let newName = commands[2];
            let currentName = listsOfFriends[index];

            if (listsOfFriends.length > index && index >= 0) {
                listsOfFriends.splice(index, 1, newName);
                console.log(`${currentName} changed his username to ${newName}.`)
            }
        }
    }
    console.log(`Blacklisted names: ${blackListCount}`);
    console.log(`Lost names: ${lostListCount}`);
    console.log(listsOfFriends.join(' '));
}
friendList([
    'Mike, John, Eddie',
    'Blacklist Mike',
    'Error 0',
    'Error 1',
    'Change 2 Mike123',
    'Report'])


