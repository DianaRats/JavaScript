function trackWords(params) {
    let list = {}; 
    let wordToTrack = params.shift().split(' ');   
    for (word of wordToTrack) {                    
        list[word] = 0;                          
      
    }
                                                  
    for(let word of params) {                                                                
        if (list.hasOwnProperty(word)) {       
            list[word]++;                      
        }
    }
    let sortedWords = Object.entries(list).sort((a,b)=>b[1]- a[1]);  
    for(let word of sortedWords) {  
        console.log(`${word[0]} - ${word[1]}`);
    }
} 
trackWords(['this sentence', 'In', 'this', 'sentence',
'you', 'have','to', 'count', 'the', 'occurances',
 'of', 'the', 'words', 'this', 'and', 'sentence', 
 'because', 'this', 'is', 'your', 'task']);

 
