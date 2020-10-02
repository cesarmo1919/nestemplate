import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { Employee } from './interfaces/employees.interface';
import { Model } from 'mongoose';

@Injectable()
export class EmployeesService {
  private readonly logger = new Logger(EmployeesService.name);

  constructor(
    @InjectModel('Employee') private readonly employeeModel: Model<Employee>,
  ) {}

  async getEmployees() {
    this.logger.log('Get Employees');
    return this.employeeModel.find();
  }

  async getEmployee(id: string) {
    return await this.findEmployee(id);
  }

  async createEmployee(createEmployeeDto: CreateEmployeeDto) {
    this.logger.log('Employee Created : ' + JSON.stringify(createEmployeeDto));
    const newEmployee = new this.employeeModel(createEmployeeDto);

    const result = await newEmployee.save();

    return result.id as string;
  }

  async updateEmployee(id: string, employeeToUpdate: CreateEmployeeDto) {
    const employee = await this.findEmployee(id);
    return (
      'Employee updated id: ' +
      id +
      ' Object: ' +
      JSON.stringify(employeeToUpdate)
    );
  }

  async deleteEmployee(id: string) {
    const employee = await this.findEmployee(id);
    this.logger.log('Delete Employee id: ' + id);
    return 'Delete Employee id: ' + id;
  }

  private async findEmployee(id) {
    this.logger.log('Find Employee id: ' + id);
    return this.employeeModel.findById(id);
  }
}
