import { Component, Input } from '@angular/core';
import { DbHabitacionService } from '../Service/db-habitacion.service';
import { Habitacion } from '../Entidades/Habitacion';

@Component({
  selector: 'app-insertar-hb',
  templateUrl: './insertar-hb.component.html',
  styleUrl: './insertar-hb.component.css'
})
export class InsertarHbComponent {

  constructor(private dbser: DbHabitacionService)
  {

  }
  @Input() nuevo: Habitacion = {
    codigo: 0,
    tipo: '',
    camas: 0,
    costo: 0
  };
  @Input() displayStyle = "none";
  
  closePopup() {
    this.displayStyle = "none";
  }
  Insert() 
  {
    console.log(this.nuevo);
    if (this.nuevo.tipo.trim().length === 0) {
      return;
    }
    this.dbser.AddHabitacion(this.nuevo);
    this.nuevo = {
      codigo: 0,
      tipo: '',
      camas: 0,
      costo: 0
    };
  }

}
