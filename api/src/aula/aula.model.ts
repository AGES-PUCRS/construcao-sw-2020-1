import { ObjectId } from "bson";
import { Document } from 'mongoose';
import { TurmaModel } from "src/turma/turma.model";

export class AulaModel{
    constructor(
      public id: ObjectId,
      public diaHora: Date,
      public turma: TurmaModel
    ) {}
}

export interface AulaModel extends Document {}
