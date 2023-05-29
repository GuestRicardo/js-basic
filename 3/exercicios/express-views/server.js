const express = require('express');
const app = express();
const routes = require('./routes');
const path = require('path');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resouve(__dirname,'public')));
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(3000, () => {
    console.log('Acesse o http://localhost:3000');
    console.log('Servidor executando com sucesso...');
});