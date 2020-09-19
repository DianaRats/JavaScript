function party(guests) {
    let partyIndex = guests.indexOf('PARTY'); 
    let guestList = guests.slice(0, partyIndex);  

    for (let i = partyIndex + 1; i < guests.length; i++) {  
        let guest = guests[i]; 
        let guestIndex = guestList.indexOf(guest); 
        guestList.splice(guestIndex, 1); 
    }
    let result = guestList.filter(g => Number.isInteger(+g[0]))
        .concat(guestList.filter(g => !Number.isInteger(+g[0])));
    console.log(`${result.length}\n${result.join('\n')}`);
}

party(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc']);


