import { Controller, Get ,Post,Body} from '@nestjs/common';
import { EmployeesService } from './employees.service';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Get()
  getAllEmployees() {

   return this.employeesService.getAllEmployees()
  }

  @Post()
  createEmployee(@Body('firstName') firstName: string,
  @Body('lastName') lastName: string,
  @Body('designation') designation: string,
  @Body('nearestCity') nearestCity: string,
  @Body('tier') tier:number,) {

    return this.employeesService.createEmployee(firstName,lastName,designation,nearestCity,tier)
  
  }


  

 
}

