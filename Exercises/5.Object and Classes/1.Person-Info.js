
function printPersonInfo(firstName, secondName, age) {
    let personInfo = {
        firstName: firstName,   
        secondName: secondName, 
        age: age,               
    };
    for (const key in personInfo) {
        console.log(`${key}: ${personInfo[key]}`);
    }
}
printPersonInfo(["Peter", "Pan", "20"]);
