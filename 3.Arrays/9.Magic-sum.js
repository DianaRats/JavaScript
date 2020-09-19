function magicSum(param=[],num){
    let arr = param.splice(` `).map(Number);
     num = Number(num);
     let result=[]
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
        if((arr[i] + arr[j]) === num){
            result.push(arr[i]+` `+arr[j]);
           }
        }
    }
    console.log(result.join(' '));
    
}
magicSum([1, 7, 6, 2, 19, 23],8)