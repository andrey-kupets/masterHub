import * as mongoose from 'mongoose';

export interface IServiceType {
  _id: string | mongoose.Types.ObjectId
  title: string
}
