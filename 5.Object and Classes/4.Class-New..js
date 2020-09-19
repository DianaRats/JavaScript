class Human {
    constructor(firstName, age) {
        this.name = firstName;
        this.age = age;
    }
}
let firstPerson = new Human('Pesho', 19);
let secondPerson = new Human('Gosho');
console.log(JSON.stringify(firstPerson));
console.log(JSON.stringify(secondPerson));
console.log(firstPerson.age);
console.log(secondPerson.name)

