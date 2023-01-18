//let numero = prompt('Digite um número: ');
//numero = Number(numero);//convertendo para number
//ou
const numero = Number (prompt('Dgite um numero'));
const numerotitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numerotitulo.innerHTML = numero;
texto.innerHTML += " "; //zerando o placeloader
texto.innerHTML +=`<p><span style="margin:25px">A raiz quadrada é: <strong> ${Math.sqrt(numero)} </span></p>`;
texto.innerHTML +=`<p><span style="margin:25px"><strong>${numero} é inteiro: ${Number.isInteger(numero)}</span></p>`;
texto.innerHTML +=`<p><span style="margin:25px">E NaN ? <strong>${Number.isNaN(numero)}</strong></span> </p>`;
texto.innerHTML +=`<p><span style="margin:25px">Arredondando para baixo: <strong>${Math.floor(numero)}</strong></span></p>`;
texto.innerHTML += `<p><span style="margin:25px">Arredondando para cima: <strong>${Math.ceil(numero)}</strong></span></p>`;
texto.innerHTML += `<p><span style="margin:25px">Com 2 casas decimais: <strong>${numero.toFixed(2)}</strong></span></p>`;