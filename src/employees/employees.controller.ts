import {
  Body,
  Controller,
  Delete,
  Get,
  Logger,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  ApiCreatedResponse,
  ApiForbiddenResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { EmployeesService } from './employees.service';

@ApiTags('employees')
@Controller('api/v1/employees')
export class EmployeesController {
  constructor(private employeeService: EmployeesService) {}

  @ApiOkResponse({ description: 'La liste complète des employés' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get()
  async getEmployees() {
    return this.employeeService.getEmployees();
  }

  @ApiOkResponse({ description: 'Selectionner un employé' })
  @ApiNotFoundResponse({ description: 'Not Found' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Get(':id')
  async getEmployeeById(@Param('id') id: string) {
    return this.employeeService.getEmployee(id);
  }

  @ApiCreatedResponse({ description: 'Nouvel employé crée' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Post()
  async createEmployee(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.employeeService.createEmployee(createEmployeeDto);
  }

  @ApiNotFoundResponse({ description: 'Employé introuvable' })
  @ApiOkResponse({ description: 'Employé supprimé' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Delete(':id')
  async deleteEmployee(@Param('id') id: string) {
    return this.employeeService.deleteEmployee(id);
  }

  @ApiNotFoundResponse({ description: 'Employé introuvable' })
  @ApiOkResponse({ description: 'Employé modifié' })
  @ApiForbiddenResponse({ description: 'Forbidden' })
  @Patch(':id')
  async updateEmployee(
    @Param('id') id: string,
    @Body() createEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.updateEmployee(id, createEmployeeDto);
  }
}
