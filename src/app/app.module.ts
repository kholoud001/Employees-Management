import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employees/employee-list/employee-list.component';
import { EmployeeCardComponent } from './employees/employee-card/employee-card.component';
import { EmployeeFormComponent } from './employees/employee-form/employee-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {DateFormatPipe} from './employees/date-format.pipe';
import {DatePipe} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeeFormComponent,
    DateFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(withEventReplay()),
    DatePipe
],
  bootstrap: [AppComponent]
})
export class AppModule { }
