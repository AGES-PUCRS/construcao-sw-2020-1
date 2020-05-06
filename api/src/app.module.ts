import { Module } from '@nestjs/common';
import { DisciplinaModule } from './disciplina/disciplina.module';
import { MongooseModule } from '@nestjs/mongoose';
import Environment  from './enviroments';
import { TurmaModule } from './turma/turma.module';
import { AulaModule } from './aula/aula.module';

@Module({
  imports: [MongooseModule.forRoot(Environment.api_url), DisciplinaModule, TurmaModule, AulaModule],
})
export class AppModule {}
