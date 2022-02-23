import { Document, Schema } from 'mongoose';

import { IServiceType } from '../interfaces';

export type ServiceType = IServiceType & Document; // maybe export type ServiceTypeType ??

export const ServiceTypeSchema: Schema = new Schema<IServiceType>(
  {
    title: {
      type: 'string',
      required: true,
      trim: true,
      lowercase: true
    },
  },
  {
    id: false,
    toJSON: {
      virtuals: true
    },
    toObject: {
      virtuals: true
    },
    timestamps: true
  }
);


