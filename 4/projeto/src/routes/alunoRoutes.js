
import { Router } from 'express';
const router = new Router();
import alunocontroller from '../controllers/AlunoController';
//rota criada
router.get('/', alunocontroller.index);

//exportando a rota
export default router;
