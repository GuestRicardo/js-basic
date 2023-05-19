const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'test.txt');

fs.writeFile(caminhoArquivo, 'Frase 1', {flag: 'w', encoding: 'utf8'});


