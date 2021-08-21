import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PresupuestoService } from 'src/app/services/presupuesto.service';
@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  gasto: string;
  monto: number;
  validacion: boolean;
  mensaje: string;

  constructor( private _presupuestoService: PresupuestoService, private router: Router) {
    this.gasto = '';
    this.monto = 0;
    this.validacion = false;
    this.mensaje = '';
  }

  ngOnInit(): void {
  }

  validar(): void{
    if( this.gasto === '' || this.monto <= 0){
      this.validacion = true;
      this.mensaje = 'Gasto o Monto no valido';
      setTimeout(() =>{
          this.validacion = false;
      }, 2500);
      return;
    } else if( this.monto > this._presupuestoService.restante ){
      this.validacion = true;
      this.mensaje = 'Este gasto supera el resante';
      return;
    } else {

      //Creamos el objeto
      const GASTO = {
        gasto: this.gasto,
        monto: this.monto,
      };
      //Enviamos el objeto a los sucriptores vía subjet
      this._presupuestoService.agregarGasto( GASTO );

      //Resetear formulario
      this.gasto = '';
      this.monto = 0;
    }
  }

}
