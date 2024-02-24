import { Component, EventEmitter, Output } from '@angular/core';
import { Reserva } from '../Entidades/Reserva';
import { DbReservaService } from '../service/db-reserva.service';

@Component({
  selector: 'app-listar-reserva',
  templateUrl: './listar-reserva.component.html',
  styleUrl: './listar-reserva.component.css'
})
export class ListarReservaComponent {
  @Output() editarClienteEvent = new EventEmitter<Reserva>();
  constructor(private obs: DbReservaService) {

  }
  ngOnInit(): void {


  }
  get ListarReserva() {
    return this.obs.getListaReserva;
  }
  EditarReserva(reserva: Reserva) {
    this.editarClienteEvent.emit(reserva);
  }
  EliminarReserva(reserva: Reserva) {
    this.obs.DeleteReserva(reserva.codigo);
  }
}
