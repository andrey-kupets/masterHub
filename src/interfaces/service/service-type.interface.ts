// @ts-ignore
import mongoose from 'mongoose';

export interface IServiceType {
  _id: string | mongoose.Types.ObjectId
  service_id: string | mongoose.Types.ObjectId
  title: string
}
