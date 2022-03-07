import { Request, Response, NextFunction } from 'express';
import { serviceTypeService } from '../../services';
import { CustomError, ErrorStatusEnum } from '../../error';

class ServiceTypeMiddleware {
  async checkServiceTypeDuplicates(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceTypeTitle = req.body.title;

      const serviceTypeByTitle = await serviceTypeService.findServiceTypeByParams({
        title: serviceTypeTitle.toLowerCase()
      });

      if (serviceTypeByTitle) {
        next(new CustomError(`service type with ${serviceTypeTitle}-title is already exist`, ErrorStatusEnum.CONFLICT));
        return;
      }

      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeMiddleware = new ServiceTypeMiddleware();
