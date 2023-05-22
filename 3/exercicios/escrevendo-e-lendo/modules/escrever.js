const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname, '..', 'test.json');



fs.writeFile(caminhoArquivo, json, {flag: 'w', encoding: 'utf8'});


