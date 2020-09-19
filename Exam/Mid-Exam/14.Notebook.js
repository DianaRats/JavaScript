function solve(input) {
    let result = new Map()
    for (let line of input) {
        let details = line.split('|')
        let color = details[0]
        if (!result.has(color)) {
            result.set(color, new Map())
            result.set('age', '')
            result.set('name', '')
            result.set('wins', 1)
            result.set('losses', 1)
            result.set('opponents', [])
        }
        switch (details[1]) {
            case 'age':
                result.get(color).set('age', details[2])
                break;
            case 'name':
                result.get(color).set('name', details[2])
                break;
            case 'win':
                result.get(color).set('wins', result.get(color).get('wins') + 1)
                result.get(color).get('opponents').push(details[2])//result.get(color).set('opponents',[]);
                break;
            case 'loss':
                result.get(color).set('losses', result.get(color).get('losses') + 1)
                result.get(color).get('opponents').push(details[2])
                break;
 
 
        }
    }
    console.log(result)
}
solve(['purple|age|99',
'red|age|44',
'blue|win|pesho',
'blue|win|mariya',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Kiko',
'purple|loss|Yana',
'purple|loss|Yana',
'purple|loss|Manov',
'purple|loss|Manov',
'red|name|gosho',
'blue|win|Vladko',
'purple|loss|Yana',
'purple|name|VladoKaramfilov',
'blue|age|21',
'blue|loss|Pesho'
])