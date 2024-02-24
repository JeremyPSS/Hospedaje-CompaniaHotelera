import { Component } from '@angular/core';
import { Bus } from '../Entidades/Bus';

@Component({
  selector: 'app-principal-bus',
  templateUrl: './principal-bus.component.html',
  styleUrl: './principal-bus.component.css'
})
export class PrincipalBusComponent {
  showInsertarBus: boolean = false;
  editarBus: Bus|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertarBus = !this.showInsertarBus;
    this.editarBus = undefined;

  }

  cargarEditarBus(bus:Bus){
    this.editarBus = bus;
    this.showInsertarBus = false;
  }
  constructor()
  {
    
  }
}
