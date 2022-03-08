import { Joi } from 'celebrate';

const idValidator = Joi
  .string()
  .regex(/^[a-fA-F0-9]{24}$/)
  .required();

export const commonValidators = {
  idValidator,
}
