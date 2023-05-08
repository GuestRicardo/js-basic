//gerando numeros aleatorios
const rand = (min, max) => Math.floor(Math.random() * (max - min) + min);
//gerando letras maiusculas
const geraMaiuscula = () => String.fromCharCode(rand(65, 91));
const geraMinuscula = () => String.fromCharCode(rand(97, 123));
const geraNumeros = () => String.fromCharCode(rand(48, 58));
const simbolos = ',.;~^[]{}!@#$%*()_+=-';
//pegando os simbolos de forma aleatorias
const geraSimbolos = () => simbolos[rand(0, simbolos.length)];


export default function geraSenha(qtd, maiuscula, minuscula, numeros, simbolos) {
    const senhaArray = [];
    //garantindo q seja valor numerico
    qtd = Number(qtd);

    //quantidade de vez, q a pessoa pedir
    for (let i = 0; i < qtd; i++) {
        maiuscula && senhaArray.push(geraMaiuscula());
        minuscula && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumeros());
        simbolos && senhaArray.push(geraSimbolos());
    }
    /*
    Neste for sera gerado 4 caractere com cada volta do array, 
    pois ele fara a verificação em cada sendo q a quantidade de 
    volta sera definida pelo for
    
    */
    return senhaArray.join('').slice(0, qtd);

}