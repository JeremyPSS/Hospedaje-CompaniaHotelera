import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Bus } from '../Entidades/Bus';
import { DbBusService } from '../Service/db-bus.service';

@Component({
  selector: 'app-listar-bus',
  templateUrl: './listar-bus.component.html',
  styleUrl: './listar-bus.component.css'
})
export class ListarBusComponent {
  @Output() editarClienteEvent = new EventEmitter<Bus>();
  constructor(private obs: DbBusService) {

  }
  ngOnInit(): void {


  }
  get ListaBuses() {
    return this.obs.getListaBuses;
  }
  EditarBus(bus: Bus) {
    this.editarClienteEvent.emit(bus);
  }
  EliminarBus(bus: Bus) {
    this.obs.DeleteBus(bus.codigo);
  }

}
