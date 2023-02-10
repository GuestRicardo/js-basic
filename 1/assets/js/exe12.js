

const timer = document.querySelector('#timer');
/*                 *botões                      */
const iniciar = document.querySelector('#iniciar');
const pausar = document.querySelector('#pausar');
const zerar = document.querySelector('#zerar');

iniciar.addEventListener('click', (evento)=>{
   timer.innerHTML ='teste';
});
pausar.addEventListener('click', (evento)=>{
   
});
zerar.addEventListener('click', (evento)=>{
   
});

function mostrarHora (){
    let data = new Date();
    return data.toLocaleTimeString('pt-BR',{
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //para tirar o PM q aparece na frente da hora
    });
}