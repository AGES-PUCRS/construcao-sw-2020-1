import { Module } from '@nestjs/common';
import { CourseModule } from './course/course.module';
import { MongooseModule } from '@nestjs/mongoose';
import Environment  from './enviroments';
import { ClassModule } from './class/class.module';
import { LessonModule } from './lesson/lesson.module';

@Module({
  imports: [MongooseModule.forRoot(Environment.api_url), CourseModule, ClassModule, LessonModule],
})
export class AppModule {}
