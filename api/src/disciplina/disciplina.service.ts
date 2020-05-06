import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { DisciplinaModel } from './disciplina.model';


@Injectable()
export class DisciplinaService {
  constructor(@InjectModel('Disciplina') private readonly model: Model<DisciplinaModel>) { }

  async get(): Promise<DisciplinaModel[]> {
    return await this.model.find().exec();
  }

  async create(model: DisciplinaModel): Promise<DisciplinaModel> {
    const disciplina = new this.model(model);
    return await disciplina.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<DisciplinaModel> {
    return await this.model.findOne({ _id: id }).exec()
  }

  async update(model: DisciplinaModel, id: string): Promise<DisciplinaModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: DisciplinaModel, id: string): Promise<DisciplinaModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
