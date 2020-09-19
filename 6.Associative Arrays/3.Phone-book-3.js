function solve(input) {
    let phonebook = {};                       

    for (let i = 0; i < input.length; i++) {
        let entrie = input[i].split(' ');    
                                             
        let name = entrie[0];
        let number = entrie[1];
        phonebook[name] = number;
        console.log(entrie)                
    }
    for (const name in phonebook) {        
        console.log(`${name} -> ${phonebook[name]}`);
    }
}
solve(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);


