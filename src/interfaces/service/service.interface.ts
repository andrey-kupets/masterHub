// @ts-ignore
import mongoose from 'mongoose';
import { IServiceType } from './service-type.interface';

export interface IService {
  title: string
  type: {
    type: [mongoose.Types.ObjectId],
    default: []
  }
}
