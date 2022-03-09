import { NextFunction, Request, Response } from 'express';
import { ServiceModel } from '../../schemas';

class ServiceController {
  async createService(req: Request, res: Response, next: NextFunction) {
    try {
      const createdService = await ServiceModel.create(req.body);

      res.json(createdService);
    } catch (e) {
      next(e);
    }
  }
}

export const serviceController = new ServiceController();
