import { Component, Input } from '@angular/core';
import { DbReservaService } from '../service/db-reserva.service';
import { Reserva } from '../Entidades/Reserva';

@Component({
  selector: 'app-modificar-reserva',
  templateUrl: './modificar-reserva.component.html',
  styleUrl: './modificar-reserva.component.css'
})
export class ModificarReservaComponent {
  @Input() reserva: Reserva|undefined;

  constructor(private dbser: DbReservaService) {}
  @Input() displayStyle = "none";
  
  closePopup() {
    this.reserva = undefined
  }

  Update() {
    if (!this.reserva) {
      return;
    }

    if (this.reserva.nombreCliente.trim().length === 0) {
      return;
    }

    this.dbser.UpdateReserva(this.reserva.codigo,this.reserva)
    this.reserva = undefined;
  }
}
