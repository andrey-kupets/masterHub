import { Request, Response, NextFunction } from 'express';

import { serviceTypeService } from '../../services';
import { CustomError, ErrorStatusEnum } from '../../error';
import { ServiceTypeModel } from '../../schemas';
import { IRequestExtended } from '../../interfaces';

class ServiceTypeMiddleware {
  async checkServiceTypeDuplicates(req: Request, res: Response, next: NextFunction) {
    try {
      const serviceTypeTitle = req.body.title;

      const serviceTypeByTitle = await serviceTypeService.findServiceTypeByParams({
        title: serviceTypeTitle.toLowerCase()
      });

      if (serviceTypeByTitle) {
        next(new CustomError(`serviceType type with ${serviceTypeTitle}-title is already exist`, ErrorStatusEnum.CONFLICT));
        return;
      }

      next();
    } catch (e) {
      next(e);
    }
  }

  async checkIsServiceTypePresent(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const { service_id } = req.params;

      const serviceType =  await ServiceTypeModel.findById(service_id);

      if (serviceType) {
        next(new CustomError(`serviceType not found`, ErrorStatusEnum.NOT_FOUND));
        return;
      }

      req.serviceType = serviceType;
      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeMiddleware = new ServiceTypeMiddleware();
