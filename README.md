# Employee Management Application

## Project Description

This project is an Angular-based application designed to manage employee data. It allows users to efficiently **add**, **edit**, **delete**, and **view** employee records. The application aims to provide a smooth user experience with optimized performance, leveraging Angular's features such as lazy loading, reactive forms, and modular architecture. Data is persisted using `localStorage`, ensuring employee data is retained even after page reloads.

### Main Features:
- **Employee Management**: Allows adding, editing, deleting, and viewing employee information.
- **Optimized Performance**: Uses `localStorage` to persist employee data for performance efficiency.
- **Modular Architecture**: Organizes components and services for better maintainability.
- **User-Friendly Interface**: Features responsive design with forms and interactive components.
- **Testing**: Unit tests are written for verifying the functionality of services and components.

## Technologies and Tools Used

- **Angular (Version 15+)**: A powerful framework for building dynamic single-page applications.
- **TypeScript**: The primary programming language used.
- **Reactive Forms & Template-driven Forms**: For handling employee data input with client-side validations (e.g., email validation, required fields).
- **LocalStorage**: For persisting employee data in the browser.
- **Routing & Lazy Loading**: For smooth navigation and efficient module loading.
- **RxJS & Observables**: Used for managing asynchronous data streams, ensuring real-time UI updates.
- **Angular CLI**: For project generation and management.
- **Unit Testing**: Written with Jasmine and Karma to ensure the accuracy of services and components.

## Key Features and Tasks Implemented

1. **EmployeeService**: 
   - Handles all operations related to employees such as adding, updating, deleting, and retrieving employee data from `localStorage`.
   - Provides methods in an observable manner to facilitate real-time updates.

2. **Reactive Forms**:
   - Implemented forms for adding and editing employee data.
   - Validations are applied to ensure valid and required input fields (e.g., valid email).

3. **Routing**:
   - Configured routes for employee management (`/employees`, `/employee/add`, `/employee/edit/:id`).
   - Used lazy loading to load the employee management module only when needed.

4. **Components**:
   - `EmployeeListComponent`: Displays a list of employees.
   - `EmployeeCardComponent`: Shows detailed information of an individual employee.
   - `EmployeeFormComponent`: Form for adding or editing employee details.

5. **Directives & Pipes**:
   - **Highlight Directive**: Highlights the selected employee.
   - **DateFormat Pipe**: Formats the employee’s hire date for better readability.

6. **State Management with LocalStorage**:
   - Stores and retrieves the employee list from `localStorage` to ensure data persistence.

7. **Parent/Child Component Communication**:
   - Utilized `@Input` and `@Output` decorators to pass data between parent (`EmployeeListComponent`) and child (`EmployeeCardComponent`) components.

8. **Unit Testing**:
   - Written unit tests for the `EmployeeService` to ensure correct handling of employee data.
   - Component tests to verify functionality, such as adding an employee via the form and displaying the employee list correctly.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/kholoud001/employee-management.git
