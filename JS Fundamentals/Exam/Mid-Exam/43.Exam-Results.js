function solve(input) {
    let output = '';
    input = input.filter(function(e){return e });
    let examString = input[input.length - 1].trim();
    let examAvg = [];
    for (let i = 0; i < input.length - 1; i++) {
        let data = input[i].split(' ');
        data = data.filter(function (e) { return e });
        let name = data[0];
        let exam = data[1];
        let points = Number(data[2]);
        let bonuses = Number(data[3]);
        let examPoints = (points / 5) + bonuses;
        let grade = (((examPoints / 80) * 4) + 2).toFixed(2);
        let finalGrade = 0;
        if (grade > 6.00) {
            finalGrade = (6.00).toFixed(2);
        } else {
            finalGrade = (Math.round(grade * 100) / 100).toFixed(2);
        }
        if (points < 100) {
            output += name + ' failed at "' + exam + '"\n';
            
        } else {
            output += name + ': Exam - "' + exam + '"; Points - ' + examPoints + '; Grade - ' + finalGrade + '\n';
            
        }
        if (examString === exam) {
            examAvg.push(points);
        }
    }
    let sum = 0;
    for (let grade of examAvg) {
        sum += grade;
    }
    let average = (sum / examAvg.length);
   
    output += '"' + examString + '" average points -> ' + parseFloat(average.toFixed(2)) + '\n';
    
    console.log(output);
}