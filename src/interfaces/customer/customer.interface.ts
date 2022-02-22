import * as mongoose from 'mongoose';

export interface ICustomer {
  _id: mongoose.Types.ObjectId | string
  firstName: string
  lastName: string
  password: string
  phone: string
}
