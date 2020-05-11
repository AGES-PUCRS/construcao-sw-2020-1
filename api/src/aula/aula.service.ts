import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { AulaModel } from './aula.model';


@Injectable()
export class AulaService {
  constructor(@InjectModel('Aula') private readonly model: Model<AulaModel>) { }

  async get(query): Promise<AulaModel[]> {
    let custom = {...query}
    if (custom) {
      console.log(custom)
      if (!custom.diaHora){
        if (custom.maxDiaHora) {
          custom['diaHora'] = {...custom['diaHora'], '$lte': custom.maxDiaHora }
        }
        if (custom.minDiaHora) {
          custom['diaHora'] = {...custom['diaHora'], '$gte': custom.minDiaHora}
        }
      }
      delete custom.minDiaHora
      delete custom.maxDiaHora
    }
    return await this.model.find(custom).exec();
  }

  async create(model: AulaModel): Promise<AulaModel> {
    const aula = new this.model(model);
    return await aula.save();
  }

  async deleteByObjectId(id: string) {
    this.model.findOneAndDelete({ _id: id }).exec().then(res => {
        return
    })
  }

  async findOneById(id: string): Promise<AulaModel> {
    return await this.model.findOne({ _id: id }).exec()
  }

  async update(model: AulaModel, id: string): Promise<AulaModel> {
    return await this.model.findOneAndUpdate({ _id: id }, model, { new: true }).exec();
  }

  async replace(model: AulaModel, id: string): Promise<AulaModel> {
    return await this.model.replaceOne({ _id: id }, model).exec();
  }
}
