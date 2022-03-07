import { celebrate } from 'celebrate';
import { Router } from 'express';

import { serviceController } from '../../controllers';
import { serviceMiddleware } from '../../middlewares';
import { serviceValidators } from '../../validators';

const router = Router();

router.post('/', celebrate(serviceValidators.createServiceValidator), serviceMiddleware.checkServiceDuplicates, serviceController.createService);

router.use('/:service_id',serviceMiddleware.checkIsServicePresent);

export const serviceRouter = router;
