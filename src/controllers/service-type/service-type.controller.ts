import { NextFunction, Request, Response } from 'express';
import { serviceTypeService } from '../../services';

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
}

export const serviceTypeController = new ServiceTypeController();

