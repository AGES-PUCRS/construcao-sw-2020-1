import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { ClassModel } from './class.model';


@Injectable()
export class ClassService {
  constructor(@InjectModel('Class') private readonly model: Model<ClassModel>) { }

  async get(query): Promise<ClassModel[]> {
    let custom = {...query}
    if (custom) {
      console.log(custom)
      if (!custom.timeSchedule){
        if (custom.maxTimeSchedule) {
          custom['timeSchedule'] = {...custom['timeSchedule'], '$lte': custom.maxTimeSchedule }
        }
        if (custom.minTimeSchedule) {
          custom['timeSchedule'] = {...custom['timeSchedule'], '$gte': custom.minTimeSchedule}
        }
      }
      delete custom.minTimeSchedule
      delete custom.maxTimeSchedule
    }
    return await this.model.find(custom).exec();
  }

  async create(model: ClassModel): Promise<ClassModel> {
    const classModel = new this.model(model);
    return await classModel.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<ClassModel> {
    return await this.model.findOne({ _id: id }).exec()
  }

  async update(model: ClassModel, id: string): Promise<ClassModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: ClassModel, id: string): Promise<ClassModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
