import { Component , OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {EmployeeService} from '../employee.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  providers:[EmployeeService],
  standalone:false,
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit{

  employeeForm!: FormGroup;
  isEditMode: boolean = false;
  employeeIndex!: number;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    protected router: Router,
    private route: ActivatedRoute) {}


  ngOnInit(): void {
    this.initForm();

    // Check if editing an employee
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.employeeIndex = +params['id'];
        const employee = this.employeeService.getEmployees()[this.employeeIndex];
        if (employee) {
          this.employeeForm.patchValue(employee);
        }
      }
    });
  }

  private initForm(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      hireDate: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) return;

    const employeeData = this.employeeForm.value;

    if (this.isEditMode) {
      this.employeeService.updateEmployee(this.employeeIndex, employeeData);
    } else {
      this.employeeService.addEmployee(employeeData);
    }

    this.router.navigate(['/employees']);
  }


}
