import { Document, Model, model, Schema, Types } from 'mongoose';

import { IService } from '../interfaces';
import { ECollectionNames } from '../enum';

export type ServiceType = IService & Document;

export const ServiceSchema: Schema = new Schema<IService>({
    title: {
      type: 'string',
      required: true,
      trim: true,
      lowercase: true,
      unique: true
    },
    type: {
      type: [Types.ObjectId],
      default: [],
      ref: ECollectionNames.SERVICE_TYPE
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

