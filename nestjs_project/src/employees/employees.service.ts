import { Injectable } from '@nestjs/common';
import { Employee,EmployeeStatus,EmployeeTier } from './Employee.model';
import {v1 as UUID} from 'uuid';
import { EmployeeSearchDto } from './employeeSearch.dto';

@Injectable()
export class EmployeesService {

 private employees : Employee[] = []   


 getAllEmployees(){
    return this.employees
 }

//  create employee 
createEmployee (firstName:string,lastName:string,designation: string,nearestCity: string,tier:EmployeeTier){
    const employee = {
        id:UUID(),
        firstName,
        lastName,
        designation,
        nearestCity,
        tier,
        status:EmployeeStatus.ACTIVE
    }
    this.employees.push(employee)
    return employee;
}

//employee seacrching
employeeSearch(employeeSearchDto:EmployeeSearchDto){
    const {status,name} = employeeSearchDto;
    let allEmployee = this.getAllEmployees();
    if(status){
        allEmployee = allEmployee.filter(employee => employee.status === status)
    }
    if(name){
        allEmployee = allEmployee.filter(employee => employee.firstName.includes(name) || employee.lastName.includes(name))
    }
    return allEmployee;
}


 

}
