import { Request, Response, NextFunction } from 'express';

class ServiceTypeMiddleware {
  async checkServiceTypeDuplicates(req: Request, res: Response, next: NextFunction) {
    try {


      next();
    } catch (e) {
      next(e);
    }
  }
}

export const serviceTypeMiddleware = new ServiceTypeMiddleware();
