const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');

const pessoas =[
    {nome: 'joao'},
    {nome: 'maria'},
    {nome: 'jose'},
    {nome: 'eduardo'},
    {nome: 'joaquim'},
];
const json = JSON.stringify(pessoas);

fs.writeFile(caminhoArquivo, json, {flag: 'a', encoding: 'utf8'});


