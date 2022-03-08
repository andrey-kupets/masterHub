import { Request } from 'express';
import { IService, IServiceType } from '../service';

export interface IRequestExtended extends Request {
  service?: IService
  serviceType?: IServiceType
}
