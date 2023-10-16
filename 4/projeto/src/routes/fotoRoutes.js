
import { Router } from 'express';
import multer from 'multer';

import fotocontroller from '../controllers/FotoController';
import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig);

const router = new Router();

router.post('/',upload.single(''), fotocontroller.store);


export default router;
