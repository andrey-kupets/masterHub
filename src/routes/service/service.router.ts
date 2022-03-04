// const router = require('express').Router();
import { Router } from 'express';

import { serviceController } from '../../controllers';

const router = Router();

router.post('/', serviceController.createService);

export const serviceRouter = router;
