function solve (param) {
    let train=param[0].split(` `).filter(x=>x!==` `).map(Number);
    let wagonCapacity=Number(param[1]);
    for (let i = 2; i < param.length; i++) {
        let arr=param[i].split(` `);
        if (arr[0]===`Add`){
            let wagon=Number(arr[1])
            train.push(wagon)
        }else{
            let passenger=Number(arr[0]);
            for (let j = 0; j< train.length; j++) {
                if(train[j]+passenger<=wagonCapacity){
                    train[j]+=passenger
                    break;
                }   
            }
        }   
    }  
    console.log(train.join(` `) )
    }
solve(['32 54 21 12 4 0 23','75','Add 10','Add 0','30','10','75'])
