import { NextFunction, Request, Response } from 'express';
import { ServiceModel } from '../../schemas';
import { IService } from '../../interfaces';
import { CustomError, ErrorStatusEnum } from '../../error';

class ServiceMiddleware {
  async checkServiceDuplicates (req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body as Partial<IService>;

      const serviceByTitle =  await ServiceModel.findOne({
        title: title?.toLowerCase()
      });

      if (serviceByTitle) {
        next(new CustomError(`service with ${title}-title is already exist`, ErrorStatusEnum.CONFLICT));
        return;
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceMiddleware = new ServiceMiddleware();
