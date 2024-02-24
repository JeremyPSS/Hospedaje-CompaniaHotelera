import { Component } from '@angular/core';
import { Reserva } from '../Entidades/Reserva';

@Component({
  selector: 'app-principal-reserva',
  templateUrl: './principal-reserva.component.html',
  styleUrl: './principal-reserva.component.css'
})
export class PrincipalReservaComponent {
  showInsertarReserva: boolean = false;
  editarReserva: Reserva|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertarReserva = !this.showInsertarReserva;
    this.editarReserva = undefined;

  }

  cargarEditarReserva(reserva:Reserva){
    this.editarReserva = reserva;
    this.showInsertarReserva = false;
  }
  constructor()
  {
    
  }
}
