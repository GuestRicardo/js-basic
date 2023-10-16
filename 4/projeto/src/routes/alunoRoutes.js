
import { Router } from 'express';
import alunocontroller from '../controllers/AlunoController';

import loginRequired  from '../middleware/loginRequired';

const router = new Router();


//rota criada
router.get('/', alunocontroller.index);
router.post('/',loginRequired, alunocontroller.store);
router.put('/:id', alunocontroller.update);
router.get('/:id', loginRequired, alunocontroller.show);
router.delete('/:id', loginRequired, alunocontroller.delete);

//exportando a rota
export default router;
