function tanksColector(input) {
    let list = input.shift().split(", ");
    let numOfCom = +input.shift();
   
    const add = (tankName) => {
        if (list.includes(tankName)) {
            console.log(`Tank is already bought`);
        } else {
            console.log(`Tank successfully bought`);
            list.push(tankName);
        }
    }
   
    const remove = (tankName) => {
        if (list.includes(tankName)) {
            console.log(`Tank successfully sold`);
            let index = list.indexOf(tankName);
            list.splice(index, 1);
        } else {
            console.log(`Tank not found`);
        }
    }
    const removeAt = (index) => {
        index = Number(index);
        if (index >= 0 && index < list.length) {
            console.log(`Tank successfully sold`);
            list.splice(index, 1);
        } else {
            console.log(`Index out of range`);
        }
    }
    const insert = (index, tankName) => {
        index = Number(index);
        if (index >= 0 && index < list.length && list.includes(tankName)) {
            console.log(`Tank is already bought`);
        } else if (index >= 0 && index < list.length && !list.includes(tankName)) {
            console.log(`Tank successfully bought`);
            list.splice(index, 0, tankName);
        } else {
            console.log(`Index out of range`);
        }
    }
    for (let i = 0; i < numOfCom; i++) {
        let instructions = input[i].split(", ");
        let command = instructions[0];
        let el1 = instructions[1];
        let el2 = instructions[2];
   
        if (command === "Add") {
            add(el1);
        } else if (command === "Insert") {
            insert(el1, el2);
        } else if (command === "Remove") {
            remove(el1);
        } else if (command === "Remove At") {
            removeAt(el1);
        }
    }
    console.log(list.join(", "));
  }
  tanksColector([
      'T-34-85 Rudy, SU-100Y, STG',
      '3',
      'Add, King Tiger(C)',
      'Insert, 2, IS-2M',
      'Remove, T-34-85 Rudy'
    ])