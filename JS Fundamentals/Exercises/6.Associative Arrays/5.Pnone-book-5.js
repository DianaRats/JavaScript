function printPhonebook(params) {
    let phonebook = [];

    for (let param of params) {
        let tokens = param.split(' ');
        let name = tokens[0];
        let phone = tokens[1];
        phonebook[name] = phone;   
    }
    
    for (let person in phonebook) {
        console.log(person);                      
        console.log(phonebook[person]);            
        console.log(`${person} -> ${phonebook[person]}`); 

    }
}
printPhonebook(['Tim 0834212554','Peter 0877547887','Bill 0896543112','Tim 0876566344']);