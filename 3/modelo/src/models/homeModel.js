const mongoose = require('mongoose');
//aq esta sendo tratado os dados, pelo fato do mongoDb nao 
//se interessa o q será enviado sera vc q definira o q sera
// mandado,  
/*----------------------------------------------------------*/
//Este é o Esquema
const HomeSchema = new mongoose.Schema({
    titulo: {
        type: String,
        require: true
    },
    descricao: String
});

//model
const homer