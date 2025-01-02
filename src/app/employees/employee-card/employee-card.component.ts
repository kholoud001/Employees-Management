import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-card',
  standalone:false,
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.css'
})
export class EmployeeCardComponent {
  @Input() employee: any;
  @Input() index!: number;
  @Output() delete = new EventEmitter<number>();

  constructor(private router: Router) {}


  onDelete(): void {
    this.delete.emit(this.index);
  }
  onEdit(): void {
    this.router.navigate(['/employees/edit', this.index]);
  }


}
