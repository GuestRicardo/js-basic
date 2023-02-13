function criaHorasDosSegundos(segundos) {
   const data = new Date(segundos * 1000);
   return data.toLocaleTimeString('pt-BR',{
      hour12: false,
      timeZone: 'GMT', //para meia noite ser zero
   });
};

const timer = document.querySelector('#timer');
/*                 *botões                      */
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

iniciar.addEventListener('click', (event) => {
   timer.innerHTML = 'teste';
});
pausar.addEventListener('click', (event) => {

});
zerar.addEventListener('click', (event) => {

});

