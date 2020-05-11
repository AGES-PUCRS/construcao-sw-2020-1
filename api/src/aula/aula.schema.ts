import * as mongoose from 'mongoose';

export const AulaSchema = new mongoose.Schema({
    diaHora: {
        type: Date,
        required: true,
    },
    turma: {
        type: mongoose.Schema.Types.ObjectId,
            ref: 'Turma',
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
const Aula = mongoose.model('Aula', AulaSchema);
module.exports = Aula;
