/** 
 *             try{
 *                 //É executado quando nao há erros
 *             } catch(erro){
 *                 //È executado quando houver erro
 *             } finally {
 *                 //Sempre será executada, mesmo se executar o erro
 *             }   
*/
// função para retornar hora

function retornHora(data) {
    if (data && !(data instanceof Date)) { //a variavel data é uma instancia da função construtora Date, e para execulta-la é preciso usar o (new) exemplo new Date()
        throw new TypeError('Esperando instancia de Date');// se a data nao for a instancia da Date, ai aq esta sendo lançado o erro
    }
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false //para tirar o PM q aparece na frente da hora
    });
}
try{
    const hora = retornaHora();
    console.log(hora);
} catch(erro){
    //tratar erro
    console.log(erro);
} finally{
    console.log('tenha um bom dia');
}

