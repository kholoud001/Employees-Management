import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  private employees: any[] = [];

  constructor() {
    if (this.isBrowser()) {
      const storedEmployees = localStorage.getItem('employees');
      this.employees = storedEmployees ? JSON.parse(storedEmployees) : [];
    }
  }

  getEmployees() {
    return this.employees;
  }

  addEmployee(employee: any) {
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

  private saveToLocalStorage() {
    if (this.isBrowser()) {
      localStorage.setItem('employees', JSON.stringify(this.employees));
    }
  }

  private isBrowser(): boolean {
    return typeof window !== 'undefined' && typeof localStorage !== 'undefined';
  }
}
