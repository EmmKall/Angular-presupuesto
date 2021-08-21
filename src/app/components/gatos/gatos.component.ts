import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }
  presupuesto:number = 0;
  ngOnInit(): void {
    if( this._presupuestoService.presupuesto === 0 ){
      this.router.navigate(['/ingresarPresupuesto']);
    }
    this.presupuesto = this._presupuestoService.presupuesto;
  }

}
