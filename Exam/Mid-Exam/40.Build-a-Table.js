function solve(input) {
    var start = parseInt(input[0]);
    var end = parseInt(input[1]);
 
    console.log("<table>");
    console.log("<tr><th>Num</th><th>Square</th><th>Fib</th></tr>")
    for (var i = start; i <= end; i++) {
        var result = [];
        var currentResult = 'no';
       switch(i) {
           case 0:
           case 1:
           case 2:
           case 3:
           case 5:
           case 8:
           case 13:
           case 21:
           case 34:
           case 55:
           case 89:
           case 144:
           case 233:
           case 377:
           case 610:
           case 987:
           case 1597:
           case 2584:
           case 4181:
           case 6765:
           case 10946:
           case 17711:
           case 28657:
           case 46368:
           case 750258:
           case 121393:
           case 196418:
           case 317811:
           case 514229:
           case 832040:
           case 1346269:
           case 2178309:
           case 3524578:
           case 5702887:
               currentResult = "yes";
break;
       }
        console.log("<tr><td>" + i + "</td>" + "<td>" + (i * i) + "</td>" + "<td>" + currentResult + "</td></tr>");
    }
    console.log("</table>");
}
solve([ '2', '6', '' ])