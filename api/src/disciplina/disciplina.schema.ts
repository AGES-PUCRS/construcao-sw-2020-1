import * as mongoose from 'mongoose';

export const DisciplinaSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true,
    },
    curso:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Curso',
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
const Disciplina = mongoose.model('Disciplina', DisciplinaSchema);
module.exports = Disciplina;
