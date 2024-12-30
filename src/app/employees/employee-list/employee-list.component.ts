import { Component } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  //imports: [],
  providers: [EmployeeService],
  standalone:false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService,
              protected router: Router) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employees = this.employeeService.getEmployees();
  }

  deleteEmployee(id: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      this.employeeService.deleteEmployee(id);
      this.loadEmployees();
    }
  }
  onAdd():void{
    this.router.navigate(['/employees/add']);
  }

}
