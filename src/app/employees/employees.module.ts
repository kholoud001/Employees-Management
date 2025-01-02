import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import {EmployeeCardComponent} from './employee-card/employee-card.component';
import {DateFormatPipe} from './pipes/date-format.pipe';
import {ReactiveFormsModule} from '@angular/forms';
import {HighlightDirective} from './highlight-directive/highlight.directive';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    DateFormatPipe,
    HighlightDirective
  ],
  providers:[
    DatePipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      { path: '', component: EmployeeListComponent },
      { path: 'add', component: EmployeeFormComponent },
      { path: 'edit/:id', component: EmployeeFormComponent }
    ])
  ]
})
export class EmployeesModule { }
