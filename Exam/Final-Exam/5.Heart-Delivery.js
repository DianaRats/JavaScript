
function solve(input){
    let houseArr = Array.from(input.shift().split('@'), Number);
    let initPos = 0;
    let index = 0;
 
    while(input.length > 0){
        let [command, pos] = input.shift().split(' ');
        pos = +pos;
        if(command == 'Love!'){
            break;
        }
        else{ 
            if(pos != 0){
                if(pos > 0){ // 
                    index = initPos + pos;
                    if(index >= houseArr.length)
                        index = 0;
                }
                initPos = index;
                if (houseArr[index] == 0)
                    console.log(`Place ${index} already had Valentine's day.`);
                else if(houseArr[index] - 2 == 0){
                    console.log(`Place ${index} has Valentine's day.`);
                    houseArr[index] -= 2;
                }
                else
                    houseArr[index] -= 2;
            }
        }
    }
    console.log(`Cupid's last position was ${index}.`);
 
    const isAllZero = houseArr.every(item => item === 0);
    if(isAllZero == true)
        console.log(`Mission was successful.`)
    else{
        let withoutLove = houseArr.filter(x => x!=0).length;
        console.log(`Cupid has failed ${withoutLove} places.`);
    }
} 
solve(['2@4@2',  'Jump 0','Jump 2','Love!']);

