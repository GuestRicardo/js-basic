
import { Router } from 'express';
const router = new Router();
import alunocontroller from '../controllers/AlunoController';
//rota criada
router.get('/', alunocontroller.index);
router.post('/', alunocontroller.store);
router.put('/', alunocontroller.update);
router.get('/', alunocontroller.show);
router.delete('/', alunocontroller.delete);

//exportando a rota
export default router;
