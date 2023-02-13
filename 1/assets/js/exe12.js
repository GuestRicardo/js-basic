function criaHorasDosSegundos(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString('pt-BR',{
      hour12: false,
      timeZone: 'GMT', //para meia noite ser zero
   });
}

const relogio = document.querySelector('#timer');
/*                 *botões                      */
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');
let segundos = 0;//inicio da contagem

function iniciaRelogio(){
   const timer = setInterval(function(){
      segundos++;
      relogio.innerHTML = criaHorasDosSegundos(segundos);
   }, 1000);
}

iniciar.addEventListener('click', (event) => {
   iniciaRelogio();
});
pausar.addEventListener('click', (event) => {

});
zerar.addEventListener('click', (event) => {

});

