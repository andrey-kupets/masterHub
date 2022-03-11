import { IServiceType } from '../../interfaces';
import { ServiceModel, ServiceTypeModel } from '../../schemas';

class ServiceTypeService {
  findServiceTypeByParams(findObject: Partial<IServiceType>): Promise<IServiceType | null> {
    return ServiceTypeModel.findOne(findObject) as any; // instead async/await
  }

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

  async changeServiceId(serviceType: IServiceType, serviceId: string): Promise<IServiceType> {
    const updatedOldService = ServiceModel.updateOne(
      { _id: serviceType.service_id },
      {
        $pull: {type: serviceType._id}
      });

    const updatedNewService = ServiceModel.updateOne(
      { _id: serviceId},
      {
        $addToSet: {type: serviceType._id}
      });

    const updatedServiceType = ServiceTypeModel.findByIdAndUpdate(serviceType._id, { service_id: serviceId }, { new: true }) as any;

    const promises = await Promise.all([updatedOldService, updatedNewService, updatedServiceType]);

    return promises[2];
  }
}

export const serviceTypeService = new ServiceTypeService();
