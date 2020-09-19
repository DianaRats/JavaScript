
function solve(guestes) {
    let guestList = [];
    for (guest of guestes) {
        let tocken = guest.split(` is `).filter(x => x !== ``);
        let name = tocken[0];
        let index = guestList.indexOf(name);
        if (tocken[1] === `going!`) {
            if (index === -1) {
                guestList.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else if (tocken[1] !== `not going`) {
            if (index !== -1) {
                guestList.splice(index,1)
            } else {
                console.log(`${name} is not in the list!`)
            }
        }
    }
    console.log(guestList.join(`\n`));
}
solve(['Allie is going!','George is going!','John is not going!','George is not going!'])
