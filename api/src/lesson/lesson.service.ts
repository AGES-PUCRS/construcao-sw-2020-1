import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { LessonModel } from './lesson.model';


@Injectable()
export class LessonService {
  constructor(@InjectModel('Lesson') private readonly model: Model<LessonModel>) { }

  async get(query): Promise<LessonModel[]> {
    let custom = {...query}
    if (custom) {
      console.log(custom)
      if (!custom.date){
        if (custom.maxDate) {
          custom['date'] = {...custom['date'], '$lte': custom.maxDate }
        }
        if (custom.minDate) {
          custom['date'] = {...custom['date'], '$gte': custom.minDate}
        }
      }
      delete custom.minDate
      delete custom.maxDate
    }
    return await this.model
    .find(custom)
    .populate({
      path : 'class_id',
      populate : {
        path : 'course'
      }
    }).exec();
  }

  async create(model: LessonModel): Promise<LessonModel> {
    const lesson = new this.model(model);
    return await lesson.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<LessonModel> {
    return await this.model.findOne({ _id: id }).populate({
      path : 'class_id',
      populate : {
        path : 'course'
      }
    }).exec()
  }

  async update(model: LessonModel, id: string): Promise<LessonModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: LessonModel, id: string): Promise<LessonModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
