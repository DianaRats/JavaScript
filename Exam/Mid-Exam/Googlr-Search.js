 
function solve(input) {
    let days = +input[0]
    let usersPerDay = +input[1];
    let profitFromASearch = +input[2];
    let words = input[3];
    for (let index = 1; index <= usersPerDay; index++) {
        words = input[usersPerDay];
        profit=+input[usersPerDay]
        if (words > 5) {
            continue;
        }
        else if (words == 1) {
            if (index % 3 != 0) {
                profit += 2.0 * profitFromASearch * days;
            }
            else if (index % 3 == 0) {
                profit += 6.0 * profitFromASearch * days;
            }
        }
        else {
            if (index % 3 != 0) {
                profit += profitFromASearch * days;
            }
            else if (index % 3 == 0) {
                profit += 3.0 * profitFromASearch * days;
            }
        }
    }
    console.log(`Total money earned for ${days} days: ${(profitFromASearch*days*usersPerDay).toFixed(2)}`);
}
solve(['10', '3'])