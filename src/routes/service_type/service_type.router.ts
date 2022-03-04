import { Router } from 'express';

import { serviceTypeController } from '../../controllers';

const router = Router();

router.post('/:service_id', serviceTypeController.createServiceType);

export const serviceTypeRouter = router;
