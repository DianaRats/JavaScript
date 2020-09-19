function solve(arr,sortString){
    let matrix=arr;
    const sortingArr=sortString.split(' ');
     
    let command=sortingArr[0];
     
    switch(command){
     
        case "hide":
        hide(matrix);
        break;
     
        case "sort":
         matrix= Sort(matrix);
        break;
     
        case "filter":
        filter(matrix);
        break;
    }
    for (const row of matrix) {
        console.log(row.join(' | '));
    }
    function hide(arr){
        let headerToHide=sortingArr[1];
        let index=arr[0].indexOf(headerToHide);
        for (let line of matrix) {
            line.splice(index,1);
        }
    }
     
    function sort(arr){
        let headerTofilterOn=sortingArr[1];
        let index=arr[0].indexOf(headerTofilterOn);
        let ordered=arr.sort((a,b) => a[index]=== headerTofilterOn ? -1 : b[index] === headerTofilterOn ? 1 : a[index].localeCompare(b[index]));
       
        return ordered;
    }
     
    function filter(arr){
        let headerTofilterOn=sortingArr[1];
        let index=arr[0].indexOf(headerTofilterOn);
        let valueToFilterOn=sortingArr[2];
        for(let i = 1; i < arr.length; i++) {
            let contains=arr[i][index]===valueToFilterOn;
            if(contains===false){
                arr.splice(i,1);
                i--;
            }
        }
    }
    }
    solve([
        [ 'name', 'age', 'grade' ],
        [ 'Peter', '25', '5.00' ],
        [ 'George', '34', '6.00' ],
        [ 'Marry', '28', '5.49' ]
      ], 'sort name')
