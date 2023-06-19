const express = require('express');
const route = express.Router();
const homeController = require('./src/controllers/homeController');
const loginController = require('./src/controllers/loginController');
//lembrando q todas as rotas passara pelo index

// Rotas da home
route.get('/index', homeController.index);
//rotas de login
route.get('/login/index', loginController.index);

module.exports = route;
