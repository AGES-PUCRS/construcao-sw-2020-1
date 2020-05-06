import { Module } from '@nestjs/common';
import { DisciplinaController } from './disciplina.controller';
import { DisciplinaService } from './disciplina.service';
import { MongooseModule } from '@nestjs/mongoose';
import { DisciplinaSchema } from './disciplina.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Disciplina', schema: DisciplinaSchema}])],
  controllers: [DisciplinaController],
  providers: [DisciplinaService],
  exports: [DisciplinaService],
})
export class DisciplinaModule {}
