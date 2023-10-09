
import { Router } from 'express';
const router = new Router();
import alunocontroller from '../controllers/AlunoController';
//rota criada
router.get('/', alunocontroller.index);
router.post('/', alunocontroller.store);
router.put('/:id', alunocontroller.update);
router.get('/:id', alunocontroller.show);
router.delete('/:id', alunocontroller.delete);

//exportando a rota
export default router;
