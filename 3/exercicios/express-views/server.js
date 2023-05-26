const express = require('express');
const app = express();
const routes = require('./routes')
const path = require('path')

app.use(routes);
app.use(express.urlencoded({extended: true}));
app.set('views', path(__dirname, 'src', 'views'));
app.set('view engine', '',)

app.listen(3000, () => {
    console.log('Acesse o http://localhost:3000');
    console.log('Servidor executando com sucesso...');
});





// /**Parametros de URL */
// //**As informações sera enviada pelo corpo da requisição**/
// app.get('/', (req, res) => {
//     res.send(`
//         <form action='/' method='nome'>
//          Nome: <input type='text' name='nome'></input>
//          <button>Enviar</button>
//         </form>
//         `);
// });
/**Parametros de URL */

/**Recebendo aos parametros enviados */
// app.get('/testes/:idUsuarios',(req, res)=>{
//     console.log(req.params);
//     res.send('teste');
// })

// app.post('/', (req, res) => {
//     res.send('Recebi o formulario');
// });