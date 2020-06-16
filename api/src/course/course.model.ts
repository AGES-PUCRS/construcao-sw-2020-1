import { ObjectId } from "bson";
import { Document } from 'mongoose';

export class CourseModel{
    constructor(
        public id: ObjectId,
        public name: string,
        public academy: ObjectId
    ) {}
}

export interface CourseModel extends Document {}
