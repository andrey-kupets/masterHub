import { Document, Model, model, Schema } from 'mongoose';

import { ICustomer } from '../interfaces';

export type CustomerType = ICustomer & Document;

export const CustomerSchema: Schema = new Schema<ICustomer>(
  {
    firstName: {
      type: 'string',
      required: true,
      trim: true,
      lowercase: true
    },
    lastName: {
      type: 'string',
      required: false,
      trim: true,
      lowercase: true,
      default: ''
    },
    password: {
      type: 'string',
      required: true,
      trim: true
    },
    phone: {
      type: 'string',
      required: true,
      trim: true
    }
  },
  {
    id: false,
    autoCreate: true,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
);

export const CustomerModel: Model<ICustomer> = model('customer', CustomerSchema);

