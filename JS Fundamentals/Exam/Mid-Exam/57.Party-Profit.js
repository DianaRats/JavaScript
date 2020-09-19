function partiProfit(params) {    
      let groupCount = params[0];    
      let maxDays = params[1];       
      let totalCoins = 0;
      
      for (let day = 1;day <= maxDays; day++) {
        if(day % 10 === 0) { 
            groupCount -= 2;                          
        }
        if(day % 15 === 0) {   
            groupCount += 5;   
        }      
        
        totalCoins += 50;  
        totalCoins -= groupCount * 2;
        if(day % 3 === 0) {  
            totalCoins -= groupCount * 3; 
        }
        if (day % 5 === 0) { 
            totalCoins += 20 * groupCount;
                if(day % 3 === 0){
                totalCoins += 2 * groupCount;
                } 
        }
    }
    let coinsPerPerson = Math.floor(totalCoins / groupCount);
       
        console.log(`${groupCount} companions received ${coinsPerPerson}coins each `);   
}
partiProfit([3, 5]); 