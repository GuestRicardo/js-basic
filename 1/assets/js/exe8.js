//selecionando o paragrafo
const paragrafos = document.querySelectorAll('.paragrafos');
//selecionando estilo
const estiloBody = getComputedStyle(document.body);//esta função nao é do node, é do proprio DOM(navegador)
const backgroundColorBody = estiloBody.backgroundColor;//pegando a cor de fundo do body
console.log(backgroundColorBody);
//aplicando cor do body nos paragrafos
for (let p of paragrafos){
   p.style.backgroundColor = backgroundColorBody;//aplcando a cor
   p.style.color= '#FFFFFF';
}


