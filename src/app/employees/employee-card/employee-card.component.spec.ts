import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeCardComponent } from './employee-card.component';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { DatePipe } from '@angular/common';
import {DateFormatPipe} from '../pipes/date-format.pipe';

describe('EmployeeCardComponent', () => {
  let component: EmployeeCardComponent;
  let fixture: ComponentFixture<EmployeeCardComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeCardComponent, DateFormatPipe],
      imports: [RouterTestingModule],
      providers: [DatePipe]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit delete event with the correct index on delete', () => {
    component.index = 1;
    spyOn(component.delete, 'emit');
    component.onDelete();
    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });

  it('should navigate to edit route on edit', () => {
    spyOn(router, 'navigate');
    component.index = 2;
    component.onEdit();
    expect(router.navigate).toHaveBeenCalledWith(['/employees/edit', 2]);
  });
});
