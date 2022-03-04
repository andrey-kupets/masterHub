import { Document, model, Model, Schema, Types } from 'mongoose';

import { IServiceType } from '../interfaces';
import { ECollectionNames } from '../enum';

export type ServiceTypeType = IServiceType & Document;

export const ServiceTypeSchema: Schema = new Schema<IServiceType>({
    service_id: {
      required: true,
      type: Types.ObjectId,
      ref: ECollectionNames.SERVICE
    },
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

export const ServiceTypeModel: Model<IServiceType> = model(ECollectionNames.SERVICE_TYPE, ServiceTypeSchema);


