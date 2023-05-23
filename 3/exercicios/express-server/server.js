const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send('testando o server');
});
app.get('/contato',(req, res)=>{
    res.send('Obrigado por entrar em contato com agente');
});

app.listen(3000, ()=>{
    console.log('Acesse o http://localhost:3000');
    console.log('Servidor executando com sucesso...');
});