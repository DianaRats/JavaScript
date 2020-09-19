function solve(input){
    let password = input.shift();
    let commandStr = input.shift();
    while(commandStr != 'Done'){
        let [command, param1, param2] = commandStr.split(' ');
        switch(command){
            case 'TakeOdd':{
                password = ([...password].filter((el, index, self) => index % 2 === 1)).join('');
                console.log(password);
                break;
            }
            case 'Cut':{
                param1 = +param1;
                param2 = +param2;
                password = ([...password].filter((el, index, self) => index < param1 || index >= param1 + param2)).join('');
                console.log(password);
                break;
            }
            case 'Substitute':{
                let discovered = 0;
                while(password.includes(param1)){
                    password = password.replace(param1, param2);
                    discovered = 1;
                }
                if(discovered === 0)
                    console.log("Nothing to replace!");
                else console.log(password);
                break;
            }
        }
        commandStr = input.shift();
    }
    console.log(`Your password is: ${password}`);
}
solve(['Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr ',
       'TakeOdd',                       
       'Cut 15 3',                      
       'Substitute :: -',               
       'Substitute | ^',                
       'Done'])                        





     
