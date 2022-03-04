import { NextFunction, Request, Response } from 'express';
import { ServiceTypeModel } from '../../schemas';

class ServiceTypeController {
  async createServiceType(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceTypeModel.create({
        service_id: req.params.service_id,
        ...req.body
      });

      res.json('OK');
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeController = new ServiceTypeController();

