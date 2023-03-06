// retorne a soma do dobro de todos os pares(map) 
// filtrar os pares (filter)
// dobrar os valores(map)
// somar todos (reduce) 
const numeros = [12, 3, 55, 384, 484, 5, 74];

// retorne os numeros pares(filter)
const numerosPares = numeros.filter((valor)=>{
    return valor % 2 === 0;
});
const dobro = numerosPares.map((valor)=>{ //dobrando os numeros pares
    return valor * 2;
});
const somaTotal = dobro.reduce((acumulador, valor)=>{//somando todos os resultados(reduce)
    return acumulador + valor;
}) 


console.log(`os numeros pares são ${numerosPares} e o dobro desses numeros é ${dobro}`);
console.log(`A soma de todos os valores pares em dobro ${somaTotal}`);