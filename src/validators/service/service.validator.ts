import { Joi, Segments } from 'celebrate';

const createService = {
  [Segments.BODY]: Joi.object({
    title: Joi.string().min(2).max(30)
  })
};

export const serviceValidators = {
  createService
};
