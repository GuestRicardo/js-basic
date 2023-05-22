const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');

fs.writeFile(caminhoArquivo, 'Frase 1\n', {flag: 'a', encoding: 'utf8'});


