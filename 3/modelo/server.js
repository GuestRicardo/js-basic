const express = require('express');
const app = express();
const mongoose = require('mongoose');

//chave de conxao
const connectString = 'mongodb+srv://gestricardo:ricardo22@cluster0.dsh0hpx.mongodb.net/?retryWrites=true&w=majority'
//sinal emitido para poder escutar o db
//conectando o db
mongoose.connect(connectString/*,{ useNewUrlParse: true, useUnifiedTopology: true }*/ )
//para saber quando a conexao com o db vai ocorrer
.then(() => {
    console.log('Agora a conexão Ocorreu com SUCESSO!');
})

const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static(path.resolve(__dirname, 'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acesse o http://localhost:3000');
    console.log('Servidor executando com sucesso...');
});