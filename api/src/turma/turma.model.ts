import { ObjectId } from "bson";
import { Document } from 'mongoose';
import { DisciplinaModel } from "src/disciplina/disciplina.model";

export class TurmaModel{
    constructor(
      public id: ObjectId,
      public numero: Number,
      public horario: Date,
      public professor: ObjectId,
      public disciplina: DisciplinaModel
    ) {}
}

export interface TurmaModel extends Document {}
