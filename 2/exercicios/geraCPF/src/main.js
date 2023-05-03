import GeraCPF from './modules/geraCPF';
import './assets/css/style.css';

//função auto inicia
(function(){
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();

})();
