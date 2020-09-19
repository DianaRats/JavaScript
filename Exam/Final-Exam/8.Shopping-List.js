
function solve(input = []) {
    input.pop()
 
    let list = [];
    list = input.shift().split('!');
        for (const line of input) {
            let array = line.split(' ');
            let command = array[0];
            let item = array[1];
            if (command === 'Urgent') {
                if (!list.includes(item)) {
                    list.unshift(item);
                }
            } else if (command === 'Unnecesary') {
                if (list.includes(item)) {
                    list.filter(!item);
                }
            } else if (command === 'Correct') {
                if (list.includes(item)) {
                    let index = list.find(item);
                    list[index] = array[2];
                }
            } else if (command === 'Rearrange') {
                if (list.includes(item)) {
                    let index = list.findIndex(item);
                    let curItem = list.splice(index);
                    list.push(curItem);
                }
            }
        }
    console.log(list.join(', '));
}
solve(['Tomatoes!Potatoes!Bread',
       'Unnecessary Milk',
       'Urgent Tomatoes',
       'Go Shopping!']);
  
