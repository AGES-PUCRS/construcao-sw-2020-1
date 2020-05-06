import { ObjectId } from "bson";
import { Document } from 'mongoose';
import { DisciplinaModel } from "src/disciplina/disciplina.model";
import { AulaModel } from "src/aula/aula.model";

export class TurmaModel{
    constructor(
      public id: ObjectId,
      public numero: Number,
      public horario: Date,
      public professor: ObjectId,
      public curso: ObjectId,
      public disciplina: DisciplinaModel,
      public aulas: AulaModel[]
    ) {}
}

export interface TurmaModel extends Document {}
