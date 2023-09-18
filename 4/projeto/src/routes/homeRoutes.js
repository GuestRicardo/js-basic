/** As três formas validas de importação */
import { Router } from 'express';
const router = new Router();

//import express from 'express';
//const router = new express.Router();
/**++++++++++++++++++++++++++++++++++ */
import homecontroller from '../controllers/HomeController';

//rota criada
router.get('/', homecontroller.index);

//exportando a rota
export default router;
