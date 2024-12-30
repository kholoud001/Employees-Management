import { Component } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-card',
  providers: [EmployeeService],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  constructor(private employeeService:EmployeeService) {
  }


}
