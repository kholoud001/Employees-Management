import { Injectable } from '@angular/core';

@Injectable()

export class EmployeeService {

  //constructor() { }
  private employees=JSON.parse(localStorage.getItem('employees')||'[]');

  getEmployess(){
    return this.employees;
  }

  addEmployee(employee:any){
    this.employees.push(employee);
    this.saveToLocalStorage();
  }

  updateEmployee(index: number, employee: any) {
    this.employees[index] = employee;
    this.saveToLocalStorage();
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
    this.saveToLocalStorage();
  }

  private saveToLocalStorage(){
    localStorage.setItem('employees',JSON.stringify(this.employees));
  }


}
