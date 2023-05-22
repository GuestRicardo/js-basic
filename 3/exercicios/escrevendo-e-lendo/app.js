const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'test.json');
const escrever = require('./modules/escrever')

const pessoas =[
    {nome: 'joao'},
    {nome: 'maria'},
    {nome: 'jose'},
    {nome: 'eduardo'},
    {nome: 'joaquim'},
];
const json = JSON.stringify(pessoas, '', 2);