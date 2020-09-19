
function printList(params) {
    let list = [];
    
    for (param of params) {
        let elements = param.split(' ');  
        let name = elements[0];          
        let quantity = elements[1];     
        list[name] = quantity;        
        console.log(param)         
    }
    
    for (let products in list) {
        console.log(`${products}->${list[products]}`);
    }
}
printList(['tomatoes 10','coffee 5','olives 100','coffee 40']);
