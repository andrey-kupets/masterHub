import { celebrate } from 'celebrate';
import { Router } from 'express';

import { serviceTypeController } from '../../controllers';
import { serviceTypeMiddleware } from '../../middlewares';
import { serviceTypeValidators } from '../../validators';

const router = Router();

router.post('/:service_id',
  celebrate(serviceTypeValidators.createServiceType),
  serviceTypeMiddleware.checkServiceTypeDuplicates,
  serviceTypeController.createServiceType
);

export const serviceTypeRouter = router;
