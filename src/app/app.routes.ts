import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

export const routes: Routes = [
  { path: 'employees', loadChildren: () => import('./employees/employees.module').then(m => m.EmployeesModule) },
  { path: '', redirectTo: '/employees', pathMatch: 'full' }, // Redirige vers la liste des employés par défaut
  { path: '**', redirectTo: '/employees' } // Gestion des routes inexistantes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
