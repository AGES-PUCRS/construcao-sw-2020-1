import { Module } from '@nestjs/common';
import { AulaController } from './aula.controller';
import { AulaService } from './aula.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AulaSchema } from './aula.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Aula', schema: AulaSchema}])],
  controllers: [AulaController],
  providers: [AulaService],
  exports: [AulaService],
})
export class AulaModule {}
