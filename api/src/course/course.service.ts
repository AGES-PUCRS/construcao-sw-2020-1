import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CourseModel } from './course.model';


@Injectable()
export class CourseService {
  constructor(@InjectModel('Course') private readonly model: Model<CourseModel>) { }

  async get(query): Promise<CourseModel[]> {
    return await this.model.find(query).exec();
  }

  async create(model: CourseModel): Promise<CourseModel> {
    const course = new this.model(model);
    return await course.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<CourseModel> {
    return await this.model.findOne({ _id: id }).exec()
  }

  async update(model: CourseModel, id: string): Promise<CourseModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: CourseModel, id: string): Promise<CourseModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
