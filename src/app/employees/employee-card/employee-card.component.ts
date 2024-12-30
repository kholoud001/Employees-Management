import { Component, EventEmitter, Input, Output } from '@angular/core';
import {EmployeeService} from '../employee.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-card',
  providers: [EmployeeService],
  standalone:false,
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router, private employeeService: EmployeeService) {}


  onDelete(): void {
    this.delete.emit(this.index);
  }
  onEdit(): void {
    this.router.navigate(['/employees/edit', this.index]);
  }


}
