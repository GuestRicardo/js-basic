const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`
        <form action='/' method='nome'>
         Nome: <input type='text' name='nome'></input>
         <button>Enviar</button>
        </form>
        `);
});
app.post('/', (req, res) => {
    res.send('Recebi o formulario');
});


app.listen(3000, () => {
    console.log('Acesse o http://localhost:3000');
    console.log('Servidor executando com sucesso...');
});