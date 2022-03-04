import { IServiceType } from '../../interfaces';
import { ServiceModel, ServiceTypeModel } from '../../schemas';

class ServiceTypeService {
  async createServiceType(service_id: string, serviceTypeObject: Partial<IServiceType>): Promise<IServiceType> {
    const createdServiceType = await ServiceTypeModel.create({
      service_id,
      ...serviceTypeObject // body
    });

    await ServiceModel.findByIdAndUpdate(
      service_id,
      {
        $addToSet: {type: createdServiceType._id}
      });

    return createdServiceType;
  }
}

export const serviceTypeService = new ServiceTypeService();
