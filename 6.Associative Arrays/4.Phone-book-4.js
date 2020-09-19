function printPhonebook(params) {
    let phonebook = new Map();

    for (let param of params) {
        let tokens = param.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        phonebook.set(name, phone);   
    }
    for (let person of phonebook) {
        console.log(`${person[0]} -> ${person[1]}`); 

    }
}
printPhonebook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);


