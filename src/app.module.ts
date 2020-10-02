import { Module } from '@nestjs/common';
import { EmployeesModule } from './employees/employees.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    EmployeesModule,
    MongooseModule.forRoot(
      'mongodb+srv://humaxoouser:123456$@cluster0.smxiw.mongodb.net/employees?retryWrites=true&w=majority',
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
