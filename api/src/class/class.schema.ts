import * as mongoose from 'mongoose';

export const ClassSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true,
    },
    timeSchedule: {
      type: Date,
      required: true,
    },
    teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Teacher',
      required: true
    },
    course:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
},
{
    toJSON: {
      versionKey: false,
      virtuals: true,
    },
  });
const Class = mongoose.model('Class', ClassSchema);
module.exports = Class;
