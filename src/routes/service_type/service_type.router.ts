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

router.use('/:service_type_id', serviceTypeMiddleware.checkIsServiceTypePresent)

export const serviceTypeRouter = router;
