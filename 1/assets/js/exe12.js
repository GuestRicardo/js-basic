function timer() {
   function criaHorasDosSegundos(segundos) {
      const data = new Date(segundos * 1000);
      return data.toLocaleTimeString('pt-BR', {
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
   let timer;

   function iniciaRelogio() {
      timer = setInterval(function () {
         segundos++;
         relogio.innerHTML = criaHorasDosSegundos(segundos);
      }, 1000);
   }
   /**fatorando os clicks nos botoes */
   document.addEventListener('click', function (evento) {
      const elemento = evento.target;

      if (elemento.classList.contains('zerar')) {
         console.log('teste');
         clearInterval(timer);
         relogio.innerHTML = '00:00:00';
         relogio.classList.remove('pausado');
         segundos = 0;
      }

      if (elemento.classList.contains('iniciar')) {
         relogio.classList.remove('pausado');
         clearInterval(timer);
         iniciaRelogio();
      }

      if (elemento.classList.contains('pausar')) {
         relogio.classList.add('pausado');
         clearInterval(timer);
      }
   });
   //fim
   //** sem a fatoração
   // iniciar.addEventListener('click', (event) => {
   //    relogio.classList.remove('pausado');
   //    clearInterval(timer);
   //    iniciaRelogio();
   // });
   // pausar.addEventListener('click', (event) => {
   //    relogio.classList.add('pausado');
   //    clearInterval(timer);
   // });
   // zerar.addEventListener('click', (event) => {
   //    clearInterval(timer);
   //    relogio.innerHTML = '00:00:00';
   //    segundos = 0;
   // });
   // fim

};
timer();
