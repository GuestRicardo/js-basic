//para add o cpf
function ValidaCpf(cpfEnviado){
Object.defineProperty(this, 'cpfLimpo',{
    get: function (){
        return cpfEnviado.replace(/\D+/, ''); //para tirar os pontos e sinais do cpf
    }
})
}
