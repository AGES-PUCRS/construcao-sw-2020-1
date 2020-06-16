import { ObjectId } from "bson";
import { Document } from 'mongoose';
import { CourseModel } from "src/course/course.model";

export class ClassModel{
    constructor(
      public id: ObjectId,
      public number: Number,
      public timeSchedule: Date,
      public teacher: ObjectId,
      public course: CourseModel
    ) {}
}

export interface ClassModel extends Document {}
