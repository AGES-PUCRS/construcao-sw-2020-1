import * as mongoose from 'mongoose';

export const LessonSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true,
    },
    class_id: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'Class',
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
const Lesson = mongoose.model('Lesson', LessonSchema);
module.exports = Lesson;
