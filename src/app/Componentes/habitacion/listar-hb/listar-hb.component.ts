import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habitacion } from '../Entidades/Habitacion';
import { DbHabitacionService } from '../Service/db-habitacion.service';

@Component({
  selector: 'app-listar-hb',
  templateUrl: './listar-hb.component.html',
  styleUrl: './listar-hb.component.css'
})
export class ListarHbComponent implements OnInit {

  @Output() editarClienteEvent = new EventEmitter<Habitacion>();
  get ListaHb() 
  {
    return this.obs.getListaHb;
  }
  EditarHb(habitacion:Habitacion)
  {
    this.editarClienteEvent.emit(habitacion);
  }
  EliminarHb(habitacion:Habitacion)
  {
    this.obs.DeleteHabitacion(habitacion.codigo);
  }

    constructor(private obs:DbHabitacionService)
    {

    }
    ngOnInit():void{
        

    }

}
