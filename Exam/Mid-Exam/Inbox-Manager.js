function solve(input) {
    let data = {};
    for (let el of input) {
        let cmd = el.split('->');
        switch(cmd[0]){
            case 'Add':
                if (!data.hasOwnProperty(cmd[1])) {
                    data[cmd[1]] = {
                        sent: 0,
                        msgs: []
                    };
                } else {
                    console.log(`${cmd[1]} is already registered`);
                }
                break;
            case 'Send':
                if (data[cmd[1]]){
                    data[cmd[1]].sent++;
                    data[cmd[1]].msgs.push(cmd[2]);
                }
                break;
            case 'Delete':
                if (data[cmd[1]]) {
                    delete data[cmd[1]];
                } else {
                    console.log(`${cmd[1]} not found!`);
                }
                break;
            case 'Statistics':
                let arr = Object.entries(data);
                console.log(`Users count: ${arr.length}`);
                let cmp = (a, b) => b[1].sent - a[1].sent || a[0].localeCompare(b[0]);
                arr = arr.sort(cmp);
                arr.forEach(i => {
                    console.log(`${i[0]}`);
                    i[1].msgs.forEach(i => console.log(`- ${i}`));
                });
                break;
        }
    }
}
                break;
            case 'Send':
                if (data[cmd[1]]){
                    data[cmd[1]].sent++;
                    data[cmd[1]].msgs.push(cmd[2]);
                }
                break;
            case 'Delete':
                if (data[cmd[1]]) {
                    delete data[cmd[1]];
                } else {
                    console.log(`${cmd[1]} not found!`);
                }
                break;
            case 'Statistics':
                let arr = Object.entries(data);
                console.log(`Users count: ${arr.length}`);
                let cmp = (a, b) => b[1].sent - a[1].sent || a[0].localeCompare(b[0]);
                arr = arr.sort(cmp);
                arr.forEach(i => {
                    console.log(`${i[0]}`);
                    i[1].msgs.forEach(i => console.log(`- ${i}`));
                });
                break;
        }
    }
}
solve( [
  'Add->Mike',
  'Add->George',
  'Send->George->Hello World',
  'Send->George->Some random test mail',
  'Send->Mike->Hello, do you want to meet up tomorrow?',
  'Send->George->It would be a pleasure',
  'Send->Mike->Another random test mail',
  'Statistics'
]
   )