import { Router } from 'express';

import { serviceTypeController } from '../../controllers';
import { serviceTypeMiddleware } from '../../middlewares';

const router = Router();

router.post('/:service_id', serviceTypeMiddleware.checkServiceTypeDuplicates, serviceTypeController.createServiceType);

export const serviceTypeRouter = router;
