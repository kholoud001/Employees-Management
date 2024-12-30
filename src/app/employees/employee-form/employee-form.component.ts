import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-employee-form',
  // imports: [],
  templateUrl: './employee-form.component.html',
  providers:[EmployeeService],
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  employeeForm!:FormGroup;

  constructor(private employeeService:EmployeeService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      hireDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.valid) {
      console.log(this.employeeForm.value);
    }
  }


}
