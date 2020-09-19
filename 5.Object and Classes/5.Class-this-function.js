class Human {
    weight = 3;               

    constructor(firstName, age) {
        this.name = firstName;
        this.age = age;

        this.sing = function() {
            console.log('lqlqlq')
        }
    }
}
let firstPerson = new Human('Pesho', 19);
let secondPerson = new Human('Gosho', 20);

firstPerson.sing();
console.log(firstPerson.weight)

