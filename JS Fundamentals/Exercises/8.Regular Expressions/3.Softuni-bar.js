function barIncome(input) {
    let line = input.shift();
    let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<product>\w+)>[^\|\$\%\.]*\|(?<quantity>\d+)\|[^\|\$\%\.\d]*(?<price>\d+\.*\d*)\$/;
    let totalPrice = 0;
    while (line !== 'end of shift') {
        if (pattern.test(line)) {
            let matches = pattern.exec(line);
            let { name, product, quantity, price } = matches.groups;
            console.log(`${name}: ${product} - ${(price * quantity).toFixed(2)}`);
            totalPrice += price * quantity;
        }
        line = input.shift();
    }
    console.log(`Total income: ${totalPrice.toFixed(2)}`);
}
barIncome();