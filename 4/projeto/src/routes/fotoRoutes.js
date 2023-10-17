
import { Router } from 'express';

import fotocontroller from '../controllers/FotoController';

const router = new Router();

router.post('/', fotocontroller.store);


export default router;
