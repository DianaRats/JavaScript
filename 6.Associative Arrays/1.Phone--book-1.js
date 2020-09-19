function solve(input) {
    let phonebook = {};                       

    for (let i = 0; i < input.length; i++) {
        let [name, number] = input[i].split(' ');  
        phonebook[name] = number;            
    }
    Object.keys(phonebook).forEach(n => console.log(`${n} -> ${phonebook[n]}`)) 
}

solve(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);


