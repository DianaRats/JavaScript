function solve(arr){
    let final = [];
    for (let string of arr) {
        if (string.match(/^([<])([\w]+[>])+(.+)(\1[/]\2)$/g)){
            final.push(string.replace(/(<([^>]+)>)/ig, ""))
        }
    }
    console.log(final.join(' '));
 
}
solve([ '<h1><span>Hello World!</span></h1>', '<p>I am Peter.' ])