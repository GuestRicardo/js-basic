require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
//conectando o db
mongoose.connect(process.env.CONNECTIONSTRING /*,{ useNewUrlParse: true, useUnifiedTopology: true }*/ )
    //para saber q o sinal seja emitido apos a conexao do db
    .then(() => {
        app.emit('pronto');
    }).catch(erro => console.log(erro));
const session= require('express-session');
//------------------Session-----------------------------------
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');
//---------------------------------------------------------
const path = require('path');
const routes = require('./routes');
const helmet = require('helmet');
const csrf = require('csurf');
const { middlewareGlobal, checkCSRFerror } = require('./src/middlewares/middlewares');
app.use(helmet());
app.use(express.urlencoded({ extended: true }));
//------------------------Views--------------------------------
app.use(express.static(path.resolve(__dirname, 'public')));

//-------------------------------------------------------------

//-----------------------configurando session----------------------------------
const sessionOptions = session({
    secret: 'qualquer coisa q vc quiser', //a mensagem ou conteudo q deseje q sehja salvo
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),//aq é onde sera salvo(e o q esta noobjeto é o cliente q fará o serviço de salvar )
    //recomendações
    resave: false,
    saveUninitialized: false,
    //fim das recomendações
    //tempo q a session vai durar(cõokie)
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
//agora é preciso q o app use a session
app.use(sessionOptions);
app.use(flash);

//---views--------------------------
app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');
//---------------------------------------------------------------------------------
app.use(csrf());

//nossos middlewares
app.use(middlewareGlobal);
app.use(checkCSRFerror);
app.use(routes);


//Quando a conexao estiver pronta será conectado(esta escutando)
app.on('pronto', () => {
    app.listen(3000, () => {
        console.log('Acesse o http://localhost:3000');
        console.log('Servidor executando com sucesso...');
    });
});