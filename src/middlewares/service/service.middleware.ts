import { Request, Response, NextFunction } from 'express';
import { ServiceModel } from '../../schemas';
import { IService } from '../../interfaces';

class ServiceMiddleware {
  async checkServiceDuplicates (req: Request, res: Response, next: NextFunction) {
    try {
      const { title } = req.body as Partial<IService>;

      const serviceByTitle =  await ServiceModel.findOne({
        title: title?.toLowerCase()
      });

      if (serviceByTitle) {
        next(new Error(`service with ${title}-title is already exist`));
        return;
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceMiddleware = new ServiceMiddleware();
