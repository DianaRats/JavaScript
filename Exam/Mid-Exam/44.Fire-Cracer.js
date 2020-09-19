 
function fireCracker(arr) {
    let water = +arr.pop();
 
    let efort = 0;
    let totalExtinguished = 0;
    let extinguuishedCells = [];
   
    let splitedCells = arr.shift().split("#");
 
    for (let cell of splitedCells) {
        cell = cell.split(" = ");
        let cellSev = cell.shift();
        let cellValue = +cell.shift();
 
        if (!validCellCheck(cellSev, cellValue, water)) {
            continue;
        }
        if (cellSev === "High") {
            efort += +(cellValue * 0.25).toFixed(2)
            extinguuishedCells.push(cellValue);
            totalExtinguished += cellValue;
            water -= cellValue;
        } else if (cellSev === "Medium") {
            efort += +(cellValue * 0.25).toFixed(2)
            extinguuishedCells.push(cellValue);
            totalExtinguished += cellValue;
            water -= cellValue;
        } else if (cellSev === "Low") {
            efort += +(cellValue * 0.25).toFixed(2);
            extinguuishedCells.push(cellValue);
            totalExtinguished += cellValue;
            water -= cellValue;
        }
    }
    return `Cells:\n - ${extinguuishedCells.join(`\n - `)}\nEffort: ${efort}\nTotal Fire: ${totalExtinguished}`
 
    function validCellCheck(cellSev, cellValue, water) {
        if (cellSev === "High" && 80 < cellValue && cellValue < 126 && water >= cellValue) {
            return true;
        } else if (cellSev === "Medium" && 50 < cellValue && cellValue < 81 && water >= cellValue) {
            return true;
        } else if (cellSev === "Low" && 0 < cellValue && cellValue < 51 && water >= cellValue) {
            return true;
        } else {
            return false;
        }
    }
}
 
console.log(fireCracker([
  'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
  '220'
]));
fireCracker( ["Hig = 110#", "110"])
 
