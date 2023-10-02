/** As três formas validas de importação */
import { Router } from 'express';
const router = new Router();

//import express from 'express';
//const router = new express.Router();
/**++++++++++++++++++++++++++++++++++ */
import usercontroller from '../controllers/UserControllerController';

//rota criada
router.post('/', usercontroller.store);
router.get('/', usercontroller.index);
router.get('/', usercontroller.show);

//exportando a rota
export default router;
