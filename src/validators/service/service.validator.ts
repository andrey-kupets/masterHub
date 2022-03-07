import { Joi, Segments } from 'celebrate';
import { CustomError, ErrorStatusEnum } from '../../error';

const createServiceValidator = {
  [Segments.BODY]: Joi.object({
    title: Joi
      .string()
      .min(2)
      .max(30)
  })
};

export const serviceValidators = {
  createServiceValidator
};
