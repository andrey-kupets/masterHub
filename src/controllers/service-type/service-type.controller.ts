import { NextFunction, Request, Response } from 'express';
import { ServiceModel, ServiceTypeModel } from '../../schemas';

class ServiceTypeController {
  async createServiceType(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { body, params: { service_id } } = req;

      const createdServiceType = await ServiceTypeModel.create({
        service_id,
        ...body
      });

      await ServiceModel.findOneAndUpdate(
        service_id as any, // or use findByIdAndUpdate w/o "as any"
        {
        $addToSet: { type: createdServiceType._id }
      })

      res.json(createdServiceType);
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeController = new ServiceTypeController();

