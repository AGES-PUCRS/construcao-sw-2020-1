import { ObjectId } from "bson";
import { Document } from 'mongoose';

export class DisciplinaModel{
    constructor(
        public id: ObjectId,
        public nome: string,
        public curso: ObjectId,
        // public turmas: TurmaModel[],
    ) {}
}

export interface DisciplinaModel extends Document {}
