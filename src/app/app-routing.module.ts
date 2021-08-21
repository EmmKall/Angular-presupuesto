import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { GatosComponent } from './components/gatos/gatos.component';

const routes: Routes = [
  { path: '', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
  { path: 'ingresarPresupuesto', component: IngresarPresupuestoComponent },
  { path: 'gastos', component: GatosComponent },
  { path: '**', redirectTo: '/ingresarPresupuesto', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
