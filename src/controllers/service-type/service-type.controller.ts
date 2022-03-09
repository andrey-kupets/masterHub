import { NextFunction, Request, Response } from 'express';
import { serviceTypeService } from '../../services';
import { IRequestExtended, IServiceType } from '../../interfaces';

class ServiceTypeController {
  async createServiceType(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { service_id } } = req;

      const createdServiceType = await serviceTypeService.createServiceType(service_id, body);

      res.json(createdServiceType);
    } catch (e) {
      next(e);
    }
  }

  async changeParentService(req: IRequestExtended, res: Response, next: NextFunction) {
    try {
      const { service, serviceType } = req;

      const updatedServiceType = await serviceTypeService.changeServiceId(
        serviceType as IServiceType,
        service?._id as string
      );

      res.json({
        ...updatedServiceType,
        service
      });
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeController = new ServiceTypeController();

