import { Document, Model, model, Schema } from 'mongoose';

import { IService } from '../interfaces';
import { ServiceTypeSchema } from './ServiceType.schema';
import { ECollectionNames } from '../enum';

export type ServiceType = IService & Document;

export const ServiceSchema: Schema = new Schema<IService>(
  {
    title: {
      type: 'string',
      required: true,
      trim: true,
      lowercase: true
    },
    type: {
      type: [ServiceTypeSchema],
      default: []
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

export const ServiceModel: Model<IService> = model(ECollectionNames.SERVICE, ServiceSchema);

