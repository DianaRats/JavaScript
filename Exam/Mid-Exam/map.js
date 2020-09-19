let arr = ['1', 2, 3];
let b = arr.map((e) => Number(e));
console.log(b, arr)    //vzimame elementa ot masiva i kazvame kak go promenqme
//ili => e*2 + a
//map e cikal,vzima el i obikalq celiq cikal i map vra6ta
//drug masiv
//print: [1,2,3] ['1',2,3]
//parviq masiv si e sashtiq, i ve4e promeneniq s map izliza
//preobarnali sme go da bade 4islo
//printira nov masiv b i stariq arr
let c = arr.filter((e) => e === 2);
//print:vinagi iska funckiq
//printira masiv vinagi, i ako iskam da sabiram el ot masiva tr da mu vzema 0viq eleement