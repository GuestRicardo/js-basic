import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senhaGerada');
const  qtdCaracteres = document.querySelector('.qtdCaracteres');
const  chkMaiusculas = document.querySelector('.chkMaiusculas');
const  chkMinusculas = document.querySelector('.chkMinusculas');
const  chkNumeros = document.querySelector('.chkMumeros');
const  chkSimbolos = document.querySelector('.chkSimbolos');
const  gerarSenha = document.querySelector('#gerarSenha');

export default () =>{
    gerarSenha.addEventListener('click', ()=>{
       senhaGerada.innerHTML = gera(); 
    })
};

function gera(){
    const senha = geraSenha(
        qtdCaracteres.value,
        chkMaiusculas.checked,
        chkMinusculas.checked,
        chkNumeros.checked,
        chkSimbolos.checked
    );

    return senha || 'Nada selecionado.';
}