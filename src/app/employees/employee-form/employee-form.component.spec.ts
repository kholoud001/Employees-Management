import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeFormComponent } from './employee-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'; // Import the necessary modules
import { EmployeeService } from '../employee.service';
import { RouterTestingModule } from '@angular/router/testing'; // For mocking the router
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { of } from 'rxjs'; // Import to mock observables

describe('EmployeeFormComponent', () => {
  let component: EmployeeFormComponent;
  let fixture: ComponentFixture<EmployeeFormComponent>;
  let employeeService: EmployeeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeFormComponent],
      imports: [ReactiveFormsModule, FormsModule, RouterTestingModule],
      providers: [
        EmployeeService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '1' })
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeFormComponent);
    component = fixture.componentInstance;
    employeeService = TestBed.inject(EmployeeService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form in edit mode', () => {
    component.ngOnInit();
    expect(component.isEditMode).toBeTrue();
    expect(component.employeeIndex).toBe(1);
  });

  // You can add more tests as needed
});
