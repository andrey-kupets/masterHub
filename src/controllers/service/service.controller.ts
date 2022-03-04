import { NextFunction, Request, Response } from 'express';
import { ServiceModel } from '../../schemas';

class ServiceController {
  async createService(req: Request, res: Response, next: NextFunction) {
    try {
      await ServiceModel.create(req.body);

      res.json('OK');
    } catch (e) {
      next(e);
    }
  }
}

export const serviceController = new ServiceController();
