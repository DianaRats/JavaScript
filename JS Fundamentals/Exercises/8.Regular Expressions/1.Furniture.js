function furniture(input) {
    let pattern = />>(?<article>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<quantity>\d+)/;
    let furnitureNames = [];
    let spendMoney = 0;
    let currentLine = input.shift();
    while (currentLine !== "Purchase") {
      let matches = currentLine.match(pattern);
      if (matches !== null) {
        let furnitureName = matches[1];
        let furniturePrace = Number(matches[2]) * Number(matches[3]);
        furnitureNames.push(furnitureName);
        spendMoney += furniturePrace;
      }
      currentLine = input.shift();
    }
    console.log(
      `Bought furniture:\n${furnitureNames.join(
        "\n"
      )}\nTotal money spend: ${spendMoney.toFixed(2)}`
    );
   
  }
   
  furniture([">>Sofa<<312.23!3", ">>TV<<300!5", ">Invalid<<!5", "Purchase"]);