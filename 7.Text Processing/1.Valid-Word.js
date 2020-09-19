function solve(words) {
    let validWord = words.match(/#[A-Za-z]+/g); 
    for(let word of validWord) { 
        console.log(word);
    }
}
solve('Nowadays everyone uses # to tag a #special word in #socialMedia');


