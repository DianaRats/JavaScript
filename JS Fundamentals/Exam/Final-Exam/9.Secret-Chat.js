function solve(input){
    let messagge = input.shift();
    let instructionStr = input.shift();       
    while(instructionStr != 'Reveal'){       
        let [instruction, param1, param2] = instructionStr.split(':|:');   
        switch(instruction){
            case 'InsertSpace':{    
                messagge = ([...messagge].filter((el, index, self) => index % 2 === 1)).join('');
                console.log(messagge);
                break;
            }
            case 'Reverse':{ 
                param2 = Number(param2);
                messagge = messagge.splice()        
                param1 = +param1;
                param2 = +param2;
                
                mess = ([...messagge].filter((el, index, self) => index < param1 || index >= param1 + param2)).join('');
                console.log(messagge);
                break;
            }
            case 'ChangeAll':{          
                let discovered = 0;      
                while(messagge.includes(param1)){  
                    messagge = messagge.replace(param1, param2);
                    discovered = 1;
                }
                if(discovered === 0)
                    console.log("Nothing to replace!");
             else console.log(messagge);
                break;
            }
        }
        instructionStr = input.shift();
    }
    console.log(`You have a new text message: ${messagge}`);
}
solve(['heVVodar!gniV',
       'ChangeAll:|:V:|:l',
       'Reverse:|:!gnil',
       'InsertSpace:|:5',
       'Reveal'])