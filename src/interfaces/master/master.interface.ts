import * as mongoose from 'mongoose';

// TODO location, price
export interface IMaster {
  _id: mongoose.Types.ObjectId | string
  firstName: string
  lastName: string
  password: string
  phone: string
  services: Array<string | mongoose.Types.ObjectId>
  skills: Array<string | mongoose.Types.ObjectId>
}
