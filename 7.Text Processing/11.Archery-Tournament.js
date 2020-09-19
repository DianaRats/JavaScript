solve = (inp) => {
    let field = inp.shift().split('|').map(x => Number(x));
    let points = 0
    for (let i = 0; i < inp.length; i++) {
        let command = inp[i].split('@')
        let action = command[0];
        let position = command[1];
        let movement = command[2];
        if (position >= 0 && position < field.length || !position) {
            if (action == 'Shoot Left') {
                for (let i = 0; i < movement; i++) {
                    field.unshift(field.pop());                
                };
                if (field[position] >= 5) {
                    field[position] -= 5;
                    points += 5
                } else {
                    let num = -1 * ( 0 - field[position] );
                    points += num;
                    field[position] = 0
                }
                for (let i = 0; i < movement; i++) {
                    field.push(field.shift());          
                }
            } else if (action == 'Shoot Right') {
                for (let i = 0; i < movement; i++) {                  
                    field.push(field.shift());                
                };
                if (field[position] >= 5) {
                    field[position] -= 5;
                    points += 5
                } else {
                    let num = -1 * ( 0 - field[position] );
                    points += num;
                    field[position] = 0
                }
                for (let i = 0; i < movement; i++) {
                    field.unshift(field.pop());        
                }
            } else if (action == 'Reverse') {
                field.reverse();                            
            } else if (action == 'Game over') {
                console.log(field.join(' - '));
                console.log(`Iskren finished the archery tournament with ${points} points!`);            
            }
        }    
    }    
};
solve(['10|10|10|10|10',   
    'Shoot Left@0@2',      
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over'])
    

