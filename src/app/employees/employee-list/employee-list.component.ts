import {Component, OnInit} from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  providers: [EmployeeService],
  standalone:false,
  templateUrl: "./employee-list.component.html",
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {

  employees: any[] = [];

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe((employees: any[]) => {
      this.employees = employees;
    });
  }

  deleteEmployee(index: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cet employé ?')) {
      this.employeeService.deleteEmployee(index);
    }
  }

  onAdd(): void {
    this.router.navigate(['/employees/add']);
  }
}

