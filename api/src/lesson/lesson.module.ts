import { Module } from '@nestjs/common';
import { LessonController } from './lesson.controller';
import { LessonService } from './lesson.service';
import { MongooseModule } from '@nestjs/mongoose';
import { LessonSchema } from './lesson.schema';

@Module({
  imports: [MongooseModule.forFeature([{name: 'Lesson', schema: LessonSchema}])],
  controllers: [LessonController],
  providers: [LessonService],
  exports: [LessonService],
})
export class LessonModule {}
