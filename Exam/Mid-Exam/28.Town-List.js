function solve(arr){
 
    let townList=[];
   
    for(let current of arr){
        let listOfnames=townList.map(x=>x.name);
        let exist=listOfnames.includes(current.town);
       if(exist){
        let townNeeded=townList.find(x=>x.name===current.town);
           let newObjForTown={
               "model":current.model,
               "regNumber":current.regNumber,
               "price":Number(current.price)
           };
          townNeeded.car.push(newObjForTown);
          townNeeded.totalPrice+=Number(current.price);
          townNeeded.totalCar+=1;
       }
       else{
           let newTown={
               'car':[],
               'totalPrice':0,
               'totalCar':0,
               'name':current.town
           };
               let newCar={
                   'model':current.model,
                   'regNumber':current.regNumber,
                   'price':Number(current.price)
               }
   
              newTown.car.push(newCar);
              newTown.totalPrice+=Number(current.price);
              newTown.totalCar+=1;  
              townList.push(newTown);
       }
    }
   
    let sortedTowns =townList.sort((a,b)=>b.totalPrice - a.totalPrice || b.car.length - a.car.length || a.name.localeCompare(b.name));
    let mostUsedCar=GetMostUsedCar(sortedTowns[0]);
 
    function GetMostUsedCar(town){
        let array=town.car;
        let counted=[]
        for(var i = 0, len = array.length; i < len; i++){
           const currentCar=array[i];
            let exist=counted.find(x=>x.model===currentCar.model);
            if(exist){
                    exist.count+=1;
            }else{
                let countedCar={
                    'model':currentCar.model,
                    'regNum':currentCar.regNumber,                  
                    'price':currentCar.price,
                    'count':1
                }
                counted.push(countedCar);
            }
         }
         let prices=counted.map(x=>x.price);
         let counts=counted.map(x=>x.count)
         let maxPrice=Math.max(...prices);
         let maxCount=Math.max(...counts);
 
         let carModel=counted
         .filter((a)=>a.count==maxCount)
         .filter((x)=>x.price==maxPrice)
         .sort((a,b)=>a.count-b.count || a.price-b.price ||
         a.model.localeCompare(b.model))[0];                
 
       return carModel.model;
    }
    let firstTown=sortedTowns[0];
    console.log(`${firstTown.name} is most profitable - ${firstTown.totalPrice} BGN`);
    console.log(`Most driven model: ${mostUsedCar}`);
    let printTowns=sortedTowns
    .sort((a,b)=>a.name.localeCompare(b.name))
    .filter(x=>x.car.some(c=>c.model===mostUsedCar))
    .filter(x=>x)
    .map(x=>{
        return {
            "townName":x.name,
            "plates":x.car.filter(x=>x.model===mostUsedCar)
            .map(x=>x.regNumber)
            .sort((a,b)=>a.localeCompare(b))
            .join(', ')
        }
    });
    printTowns.forEach(x=>console.log(`${x.townName}: ${x.plates}`));
}
   solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
   { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
   { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
   { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
   { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
   );