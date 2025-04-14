let letterSearch = ["хлеб", "мед", "банан", "яблоко", "Азиза", "цветок", "машина"].

console.log(letterSearch);

let nBor = []
let nYoq = []

for (let element of etterSearch) {
    if (element.includes('H')){
        nBor.push(element)  
    }else{
        nYoq.push(element) 
    }
    
}
console.log(nBor);
console.log(nYoq);