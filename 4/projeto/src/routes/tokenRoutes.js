
import { Router } from 'express';
const router = new Router();


import tokenController from '../controllers/TokenController';

//rota criada
router.post('/', tokenController.store);

//exportando a rota
export default router;
