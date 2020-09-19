function wordOccurences(words) {
    let occurences = {};
    for (let word of words) {
        if (occurences.hasOwnProperty(word)) {  
           occurences[word] = 0;                
        }                                    
        occurences[word]++;                             
    }
    let sortedOccurences = Object.entries(occurences);
   console.log(sortedOccurences);                    
}
wordOccurences(["Here", "is", "the", "first",
                "sentence", "Here", "is", "another",
                "sentence", "And", "finally", "the",
                "third", "sentence"]);
