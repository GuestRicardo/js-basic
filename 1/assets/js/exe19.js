// retorne a soma do dobro de todos os pares(map) 
// filtrar os pares (filter)
// dobrar os valores
// reduzir(somar todos) 
const numeros = [12, 3, 55, 384, 484, 5, 74];

// retorne os numeros pares(filter)
const numerosPares = numeros.filter((valor)=>{
    return valor % 2 === 0;
});


console.log(`os numeros pares são ${numerosPares}`);