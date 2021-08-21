import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  presupuesto: number;
  restante: number;
  subscription: Subscription;
  listaGasto: any[] = [];

  constructor(private _presupuestoService: PresupuestoService, private router: Router) {
    this.subscription = this._presupuestoService.getGastos().subscribe( data => {
      this.listaGasto.push(data);
      this.restante = this._presupuestoService.restante;
    });
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;

  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void{
    this.subscription.unsubscribe();
  }

  selecionarColor(): string {

      if( ( this.presupuesto / 4 ) > this.restante ) {
        return 'alert-danger';
    } else if( ( this.presupuesto / 2) > this.restante){
      return 'alert-warning';
    } else {
      return 'alert-secondary';
    }
  }

}
