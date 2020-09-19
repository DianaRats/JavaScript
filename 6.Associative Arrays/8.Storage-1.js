 function printList(params) {
    let list = new Map();
    
    for (param of params) {
        let elements = param.split(' ');  
        let name = elements[0];         
        let quantity = Number(elements[1]);  

        if (list.has(name)){      
            quantity += list.get(name);   
        }
        list.set(name, quantity);      
    }
    for (let [name, quantity] of list) {
        console.log(`${name} -> ${quantity}`);
    }
}
printList(['tomatoes 10','coffee 5','olives 100','coffee 40']);

