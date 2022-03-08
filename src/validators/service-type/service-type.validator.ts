import { Joi, Segments } from 'celebrate';

import { commonValidators } from '../common';
import { IServiceType } from '../../interfaces';

const createServiceType = {
  [Segments.BODY]: Joi.object<IServiceType>({
    title: Joi.string().min(2).max(30)
  }),
  [Segments.PARAMS]: {
    service_id: commonValidators.idValidator
  }
};

export const serviceTypeValidators = {
  createServiceType
};

