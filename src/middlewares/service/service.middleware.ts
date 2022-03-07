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

  async checkIsServicePresent(req: Request, res: Response, next: NextFunction) {
    try {
      const { service_id } = req.params;

      const service =  await ServiceModel.findById(service_id);

      if (service) {
        next(new CustomError(`service not found`, ErrorStatusEnum.NOT_FOUND));
        return;
      }

      // TODO request extended
      // req.service = service
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceMiddleware = new ServiceMiddleware();
