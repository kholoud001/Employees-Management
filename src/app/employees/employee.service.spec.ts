import { TestBed } from '@angular/core/testing';
import { EmployeeService } from './employee.service';

describe('EmployeeService', () => {
  let service: EmployeeService;

  beforeEach(() => {
    // Mock localStorage
    const mockLocalStorage = (() => {
      let store: { [key: string]: string } = {};
      return {
        getItem: (key: string) => store[key] || null,
        setItem: (key: string, value: string) => {
          store[key] = value;
        },
        removeItem: (key: string) => {
          delete store[key];
        },
        clear: () => {
          store = {};
        },
      };
    })();

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem').and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear').and.callFake(mockLocalStorage.clear);

    TestBed.configureTestingModule({
      providers: [EmployeeService], // Register the service here
    });

    service = TestBed.inject(EmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should initialize with an empty employee list if localStorage is empty', () => {
    service.getEmployees().subscribe((employees) => {
      expect(employees.length).toBe(0);
    });
  });

  it('should add an employee and update localStorage', () => {
    const employee = { id: 1, name: 'John Doe', position: 'Developer' };
    service.addEmployee(employee);

    service.getEmployees().subscribe((employees) => {
      expect(employees.length).toBe(1);
      expect(employees[0]).toEqual(employee);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'employees',
      JSON.stringify([employee])
    );
  });

  it('should delete an employee and update localStorage', () => {
    const employee1 = { id: 1, name: 'John Doe', position: 'Developer' };
    const employee2 = { id: 2, name: 'Jane Smith', position: 'Designer' };

    service.addEmployee(employee1);
    service.addEmployee(employee2);

    service.deleteEmployee(0);

    service.getEmployees().subscribe((employees) => {
      expect(employees.length).toBe(1);
      expect(employees[0]).toEqual(employee2);
    });

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'employees',
      JSON.stringify([employee2])
    );
  });
});
