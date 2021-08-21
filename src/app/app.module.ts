import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GatosComponent } from './components/gatos/gatos.component';
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';
import { IngresarGastoComponent } from './components/gatos/ingresar-gasto/ingresar-gasto.component';
import { ListarGastoComponent } from './components/gatos/listar-gasto/listar-gasto.component';

@NgModule({
  declarations: [
    AppComponent,
    GatosComponent,
    IngresarPresupuestoComponent,
    IngresarGastoComponent,
    ListarGastoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
