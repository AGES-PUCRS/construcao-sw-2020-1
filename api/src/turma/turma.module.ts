import { Module } from '@nestjs/common';
import { TurmaController } from './turma.controller';
import { TurmaService } from './turma.service';
import { MongooseModule } from '@nestjs/mongoose';
import { TurmaSchema } from './turma.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Turma', schema: TurmaSchema}])],
  controllers: [TurmaController],
  providers: [TurmaService],
  exports: [TurmaService],
})
export class TurmaModule {}
