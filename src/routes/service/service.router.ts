// const router = require('express').Router();
import { Router } from 'express';

import { serviceController } from '../../controllers';
import { serviceMiddleware } from '../../middlewares';

const router = Router();

router.post('/', serviceMiddleware.checkDuplicateNames, serviceController.createService);

export const serviceRouter = router;
