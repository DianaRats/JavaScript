function solve(input = []) {
    let carsQuantity = Number(input.shift());
    let carsInfoArr = input.slice(0, carsQuantity);
    let commandsInfo = input.slice(carsQuantity, input.length - 1);
    let carsInfoObj = {};
   
    for (const currentCarInfo of carsInfoArr) {
      let [car, currentMileage, currentFuel] = currentCarInfo.split("|");
      currentMileage = Number(currentMileage);
      currentFuel = Number(currentFuel);
   
      carsInfoObj[car] = {
        mileage: currentMileage,
        fuel: currentFuel,
      };
     
      if (carsInfoObj[car]["mileage"] >= 100000) {
        console.log(`Time to sell the ${car}!`);
        delete carsInfoObj[car];
      }
    }
    for (const currentLine of commandsInfo) {
      let [command, car, tokenOne, tokenTwo] = currentLine.split(" : ");
      tokenOne = Number(tokenOne);
      tokenTwo = Number(tokenTwo);
   
      switch (command) {
        case "Drive":
          if (carsInfoObj[car]["fuel"] < tokenTwo) {
            console.log("Not enough fuel to make that ride");
          } else {
            carsInfoObj[car]["fuel"] -= tokenTwo;
            carsInfoObj[car]["mileage"] += tokenOne;
            console.log(`${car} driven for ${tokenOne} kilometers. ${tokenTwo} liters of fuel consumed.`);
   
            if (carsInfoObj[car]["mileage"] >= 100000) {
              console.log(`Time to sell the ${car}!`);
              delete carsInfoObj[car];
            }
          }
          break;
   
        case "Refuel":
          if (carsInfoObj[car]["fuel"] + tokenOne > 75) {
            console.log(`${car} refueled with ${75 - carsInfoObj[car]["fuel"]} liters`);
            carsInfoObj[car]["fuel"] = 75;
          } else {
            console.log(`${car} refueled with ${tokenOne} liters`);
            carsInfoObj[car]["fuel"] += tokenOne;
          }
          break;
   
        case "Revert":
          if (carsInfoObj[car]["mileage"] - tokenOne < 10000) {
            carsInfoObj[car]["mileage"] = 10000;
          } else {
            console.log(`${car} mileage decreased by ${tokenOne} kilometers`);
            carsInfoObj[car]["mileage"] -= tokenOne;
          }
          break;
      }
    }
    let entries = Object.entries(carsInfoObj)
      .sort((a, b) => b[1]["mileage"] - a[1]["mileage"])
      .sort((a, b) => {
        if (a[1]["mileage"] === b[1]["mileage"]) {
          return a[0].localeCompare(b[0]);
        }
      });
    for (const currentEntry of entries) {
      console.log(`${currentEntry[0]} -> Mileage: ${currentEntry[1]["mileage"]} kms, Fuel in the tank: ${currentEntry[1]["fuel"]} lt.`);
    }
  }
  solve(['3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'])
    