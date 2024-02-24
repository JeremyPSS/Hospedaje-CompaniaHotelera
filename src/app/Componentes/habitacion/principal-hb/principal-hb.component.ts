import { Component } from '@angular/core';
import { Habitacion } from '../Entidades/Habitacion';

@Component({
  selector: 'app-principal-hb',
  templateUrl: './principal-hb.component.html',
  styleUrl: './principal-hb.component.css'
})
export class PrincipalHbComponent {

  showInsertar: boolean = false;
  editar: Habitacion|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertar = !this.showInsertar;
    this.editar = undefined;

  }

  cargarEditar(habitacion:Habitacion){
    this.editar = habitacion;
    this.showInsertar = false;
  }
  constructor()
  {
    
  }

}
