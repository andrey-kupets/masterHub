// @ts-ignore
import mongoose from 'mongoose';
import { IServiceType } from './service-type.interface';

export interface IService {
  _id?: string
  title: string
  type: {
    type: [mongoose.Types.ObjectId],
    default: []
  }
}
