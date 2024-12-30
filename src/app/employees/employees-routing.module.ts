import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';

const routes: Routes = [
  { path: '', component: EmployeeListComponent }, // Liste des employés
  { path: 'add', component: EmployeeFormComponent }, // Formulaire d'ajout
  { path: 'edit/:id', component: EmployeeFormComponent } // Formulaire de modification
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
