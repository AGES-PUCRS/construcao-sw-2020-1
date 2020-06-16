import * as mongoose from 'mongoose';

export const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    academy:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Academy',
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
const Course = mongoose.model('Course', CourseSchema);
module.exports = Course;
