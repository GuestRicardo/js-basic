/** As três formas validas de importação */
import { Router } from 'express';
const router = new Router();

//import express from 'express';
//const router = new express.Router();
/**++++++++++++++++++++++++++++++++++ */

//rota criada
router.get('/',(req, res)=>{res.send('testando rota')});

//exportando a rota
export default router;
