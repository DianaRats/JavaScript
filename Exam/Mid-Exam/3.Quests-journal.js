function solve(params) {
    params.pop();
    let questList = params.shift().split(`, `);
 
    for (let param of params) {
        let paramToken = param.split(` - `);
        let command = paramToken[0];
        let quest = paramToken[1];
        let index = questList.indexOf(quest);
 
        if (command === `Start` && index === -1) {
            questList.push(quest);
        } else if (command === `Complete` && index !== -1) {
            questList.splice(index, 1)
        } else if (command === `Side Quest` && index !== -1 && questList.includes(sideQuest)) {
            questList.splice(index + 1, 0, sideQuest)
        } else if (command === `Renew` && index !== -1) {
            let renewQuest = questList.splice(index, 1)
            questList.push(renewQuest)
        }
 
    }
console.log(questList.join(`, `))
}
solve([`Hello World, For loop, If else`,
    `Start - While loop`,
        `Complete - For loop`,
        ` Retire!`])