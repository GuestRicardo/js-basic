
import { Router } from 'express';
import multer from 'multer';
import fotocontroller from '../controllers/FotoController';

const router = new Router();

router.post('/', fotocontroller.index);


export default router;
