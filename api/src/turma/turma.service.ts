import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { TurmaModel } from './turma.model';


@Injectable()
export class TurmaService {
  constructor(@InjectModel('Turma') private readonly model: Model<TurmaModel>) { }

  async get(): Promise<TurmaModel[]> {
    return await this.model.find().exec();
  }

  async create(model: TurmaModel): Promise<TurmaModel> {
    const turma = new this.model(model);
    return await turma.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<TurmaModel> {
    return await this.model.findOne({ _id: id }).exec()
  }

  async update(model: TurmaModel, id: string): Promise<TurmaModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: TurmaModel, id: string): Promise<TurmaModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
