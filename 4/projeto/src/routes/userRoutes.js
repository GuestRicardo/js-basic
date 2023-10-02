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
router.get('/:id', usercontroller.show);
router.put('/:id', usercontroller.update);
router.delete('/:id', usercontroller.delete);

//exportando a rota
export default router;
