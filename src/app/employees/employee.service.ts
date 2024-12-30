import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EmployeeService {

  private employeesSubject = new BehaviorSubject<any[]>(JSON.parse(localStorage.getItem('employees') || '[]'));
  private employees$ = this.employeesSubject.asObservable();

  getEmployees() {
    return this.employees$;
  }

  addEmployee(employee: any) {
    const employees = [...this.employeesSubject.value, employee];
    this.employeesSubject.next(employees);
    this.saveToLocalStorage(employees);
  }

  updateEmployee(index: number, updatedEmployee: any) {
    const employees = [...this.employeesSubject.value];
    employees[index] = updatedEmployee;
    this.employeesSubject.next(employees);
    this.saveToLocalStorage(employees);
  }

  deleteEmployee(index: number) {
    const employees = [...this.employeesSubject.value];
    employees.splice(index, 1);
    this.employeesSubject.next(employees);
    this.saveToLocalStorage(employees);
  }

  private saveToLocalStorage(employees: any[]) {
    localStorage.setItem('employees', JSON.stringify(employees));
  }
}
