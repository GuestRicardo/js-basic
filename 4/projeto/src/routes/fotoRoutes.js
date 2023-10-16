
import { Router } from 'express';
const router = new Router();

import homecontroller from '../controllers/HomeController';
router.get('/', homecontroller.index);


export default router;
