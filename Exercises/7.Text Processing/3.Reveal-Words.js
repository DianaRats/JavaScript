function revealWord(words, text) { 
    words = words.split(', ')  
    for(let word of words) {      
      let hiddenWord = '*'.repeat(word.length);
      text = text.replace(hiddenWord, word)
    } 
    console.log(text);                  
}
revealWord('great','softuni is ***** place for learning new programming languages')
