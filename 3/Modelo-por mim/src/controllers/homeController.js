const HomeModel = require('../models/homeModel');

//criando elemento q sera add no DB, ele retornará uma promise, e retornará com elemento completo, com ids e tudo
HomeModel.create({
        titulo: 'Titulo para o primeiro teste',
        descricao: 'Descrição para o primeiro teste'
    })
    //capturando elemento criado
    .then(dados => console.log(dados))
    .catch(erro => console.log(erro));

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
};