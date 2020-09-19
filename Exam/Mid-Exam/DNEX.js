function solve(arr){
    let [total,result] = [{},""];    
    let regex = /(^[a-z!?@?#?$?]+)=(\d+)--(\d+)<<([a-zA-z]+)/gm;
    let names = /([a-z]+)/igm;
    for(var i = 0; i < arr.length; i++){
        while ((match = regex.exec(arr[i])) !== null) {
            let [length,genome,organism] = [match[2], Number(match[3]), match[4]];
            let namesLength = match[1].match(names).join('').length;
            total = duplicateOrganism(length, namesLength, organism, genome, total)
        }
        if(arr[i] == 'Stop') break;
   }
   function duplicateOrganism(namesLength,length, organism, genome, total){
        if(namesLength == length){
            if(total.hasOwnProperty(organism)){
                total[organism] += genome;
            }else{
                total[organism] = genome;
            }
        }
        return total;
    }
    function sorting(total){
        let sorted = Object.entries(total).sort((a, b) => b[1] - a[1]);
        sorted.map(items => {
            result += items[0] + ' has genome size of ' + items[1] + '\n';
        })
        return result;
    }
   return sorting(total);
}
solve([
    '!@ab?si?di!a@=7--152<<human',
    'b!etu?la@=6--321<<dog',
    '!curtob@acter##ium$=14--230<<dog',
    '!some@thin@g##=9<<human',
    'Stop!'
  ]
  )