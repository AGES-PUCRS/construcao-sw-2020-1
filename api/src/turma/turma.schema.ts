import * as mongoose from 'mongoose';

export const TurmaSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
    },
    horario: {
      type: Date,
      required: true,
    },
    professor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Professor',
      required: true
    },
    disciplina:{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Disciplina',
      required: true
    },
    aulas: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Aula'
      }
    ],
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
const Turma = mongoose.model('Turma', TurmaSchema);
module.exports = Turma;
