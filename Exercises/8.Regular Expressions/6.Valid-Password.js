function solve(input = []) {
    let pattern = /(@|#)(?<partOne>[A-Za-z]{3,})\1\1(?<partTwo>[A-Za-z]{3,})\1/g;
    let text = input.shift();
    let valids = pattern.exec(text);
    let validsCounter = 0;
    let mirrorPairs = [];
    let hasValids = false;
   
    while (valids) {
      hasValids = true;
      let partOne = valids[2];
      let partTwo = valids[3];
      let partTwoReversed = valids[3].split("").reverse().join("");
      let currentMirrorPair = "";
   
      if (partOne === partTwoReversed) {
        currentMirrorPair = partOne + " <=> " + partTwo;
        mirrorPairs.push(currentMirrorPair);
      }
      validsCounter++;
      valids = pattern.exec(text);
    }
   
    if (!hasValids) {
      console.log("No word pairs found!");
    } else {
      console.log(`${validsCounter} word pairs found!`);
    }
    
    if (mirrorPairs.length === 0) {
      console.log("No mirror words!");
    } else {
      console.log("The mirror words are:");
      console.log(mirrorPairs.join(", "));
    }
  }
  solve(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@'])

