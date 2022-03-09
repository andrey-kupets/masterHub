import { celebrate } from 'celebrate';
import { Router } from 'express';

import { serviceTypeController } from '../../controllers';
import { serviceMiddleware, serviceTypeMiddleware } from '../../middlewares';
import { serviceTypeValidators } from '../../validators';

const router = Router();

router.post('/:service_id',
  celebrate(serviceTypeValidators.createServiceType),
  serviceTypeMiddleware.checkServiceTypeDuplicates,
  serviceTypeController.createServiceType
);

router.use('/:service_type_id', serviceTypeMiddleware.checkIsServiceTypePresent);

router.patch('/:service_type_id/service/:service_id',
  serviceMiddleware.checkIsServicePresent,
  serviceTypeController.changeParentService)

export const serviceTypeRouter = router;
