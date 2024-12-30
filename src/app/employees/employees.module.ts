import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeListComponent} from './employee-list/employee-list.component';
import { EmployeeCardComponent} from './employee-card/employee-card.component';
import {EmployeeFormComponent} from './employee-form/employee-form.component';


@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
