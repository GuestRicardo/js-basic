/** As três formas validas de importação */
import { Router } from 'express';
const router = new Router();

//import express from 'express';
//const router = new express.Router();
/**++++++++++++++++++++++++++++++++++ */
import usercontroller from '../controllers/UserControllerController';
import loginRequired from '../middleware/loginRequired';

//rota criada


//admin
router.get('/',loginRequired, usercontroller.index);//lista usuarios
router.get('/:id', usercontroller.show); //lista usuario

//usuario
router.post('/',loginRequired, usercontroller.store);//criar usuario
router.put('/:id',loginRequired, usercontroller.update);//editar
router.delete('/:id',loginRequired, usercontroller.delete);//deletar

//exportando a rota
export default router;
