const HomeModel = require('../models/homeModel');

//criando elemento q sera add no DB
HomeModel.create();

exports.paginaInicial = (req, res) => {
    res.render('index');
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST');
};