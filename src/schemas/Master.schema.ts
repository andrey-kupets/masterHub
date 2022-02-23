import { Document, Model, model, Schema, Types } from 'mongoose';

import { IMaster } from '../interfaces';

export type MasterType = IMaster & Document;

export const MasterSchema: Schema = new Schema<IMaster>(
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
    },
    services: {
      type: [Types.ObjectId],
      default: [],
      index: true,
      ref: 'service'
    },
    skills: {
      type: [Types.ObjectId],
      default: [],
      index: true,
      ref: 'ServiceType'
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

export const MasterModel: Model<IMaster> = model('master', MasterSchema);

