import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { EmployeeCardComponent} from './employee-card/employee-card.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateFormatPipe} from '../date-format.pipe';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    DateFormatPipe,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule,
    ReactiveFormsModule
  ],
  providers: [DatePipe],

})
export class EmployeesModule { }
