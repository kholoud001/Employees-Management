import { Component } from '@angular/core';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-list',
  //imports: [],
  providers: [EmployeeService],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {

  constructor(private employeeService:EmployeeService) {
  }


}
