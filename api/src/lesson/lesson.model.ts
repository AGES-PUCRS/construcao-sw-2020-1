import { ObjectId } from "bson";
import { Document } from 'mongoose';
import { ClassModel } from "src/class/class.model";

export class LessonModel{
    constructor(
      public id: ObjectId,
      public date: Date,
      public class_id: ClassModel
    ) {}
}

export interface LessonModel extends Document {}
