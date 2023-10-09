
import { Router } from 'express';
const router = new Router();
import homecontroller from '../controllers/HomeController';
//rota criada
router.get('/', homecontroller.index);

//exportando a rota
export default router;
