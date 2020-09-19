function solveMOBAChallenger(input) {
    let index = 0
    let command = input[index++]
    let playersMap = new Map()
 
    while (command !== 'Season end') {
 
        if (!command.includes('vs')) {
            command = command.split(' -> ')
            let player = command[0]
            let position = command[1]
            let skill = Number(command[2])
 
            if (playersMap.has(player)) {
                let positionsAndSkills = playersMap.get(player)
                let currtotalSkill = positionsAndSkills.totalSkill
 
                if (positionsAndSkills.hasOwnProperty(position)) {
                    let currPosSkills = positionsAndSkills[position]
 
                    // update his skill, only if the current position skill is lower than the new value
                    if (currPosSkills < skill) {
                        positionsAndSkills[position] = skill
                        currtotalSkill += (skill - currPosSkills)  // every time increase the totalSkill
                    }
 
                } else {
                    positionsAndSkills[position] = skill
                    currtotalSkill += skill  // every time increase the totalSkill
                }
 
                positionsAndSkills.totalSkill = currtotalSkill
                playersMap.set(player, positionsAndSkills)
 
            } else {
                let positionAndSkill = { [position]: skill, totalSkill: skill }
                playersMap.set(player, positionAndSkill)
            }
 
        } else {
            command = command.split(' vs ')
            let firstPlayer = command[0]
            let secondPlayer = command[1]
 
            if (playersMap.has(firstPlayer) && playersMap.has(secondPlayer)) {
                let firstPlayerPos = playersMap.get(firstPlayer)
                let firstPlayerPosArr = Object.entries(firstPlayerPos)
                let secondPlayerPos = playersMap.get(secondPlayer)
                let secondPlayerPosArr = Object.entries(secondPlayerPos)
                let removedPlayer = ''
 
                for (let firstEl of firstPlayerPosArr) {
                    for (let secondEl of secondPlayerPosArr) {
 
                        if (firstEl[0] !== 'totalSkill' && secondEl[0] !== 'totalSkill' && firstEl[0] === secondEl[0]) {
                            let firstPlTotal = playersMap.get(firstPlayer).totalSkill
                            let secondPlTotal = playersMap.get(secondPlayer).totalSkill
 
                            if (firstPlTotal > secondPlTotal) {
                                removedPlayer = secondPlayer
 
                            } else if (secondPlTotal > firstPlTotal) {
                                removedPlayer = firstPlayer
                            }
                        }
                    }
                }
                playersMap.delete(removedPlayer)
            }
        }
 
        command = input[index++]
    }
 
    // Order the players by total skill in desecending order, then ordered by player name in ascending order
    let sortedPlayers = [...playersMap.entries()]
        .sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0]))
 
    let output = ''
    // For each player print their position and skill, ordered desecending by skill, then ordered by position name in ascending order.
    for (let player of sortedPlayers) {
        let playerInfo = Object.entries(player[1])
        output += `${player[0]}: ${player[1].totalSkill} skill\n`
 
        playerInfo = playerInfo.filter(posSkill => posSkill[0] !== 'totalSkill')
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .forEach(posSkill => output += `- ${posSkill[0]} <::> ${posSkill[1]}\n`)
    }
 
    console.log(output);
}
solveMOBAChallenger([
    'Pesho -> Adc -> 400',
    'Gosho -> Jungle -> 300',
    'Stamat -> Mid -> 200',
    'Stamat -> Support -> 250',
    'Season end'
  ]
  )