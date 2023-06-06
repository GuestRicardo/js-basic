require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

//
//conectando o db
mongoose.connect(process.env.CONNECTIONSTRING /*,{ useNewUrlParse: true, useUnifiedTopology: true }*/ )
    //para saber q o sinal seja emitido apos a conexao do db
    .then(() => {
        app.emit('pronto');
    }).catch(erro=> console.log('ERRO na conexao', erro));

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);


//Quando a conexao estiver pronta será conectado(esta escutando)
app.on('pronto',() => {
    app.listen(3000, () => {
        console.log('Acesse o http://localhost:3000');
        console.log('Servidor executando com sucesso...');
    });
});