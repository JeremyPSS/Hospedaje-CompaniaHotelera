import { Component, Input } from '@angular/core';
import { DbHabitacionService } from '../Service/db-habitacion.service';
import { Habitacion } from '../Entidades/Habitacion';

@Component({
  selector: 'app-modificar-hb',
  templateUrl: './modificar-hb.component.html',
  styleUrl: './modificar-hb.component.css'
})
export class ModificarHbComponent {
  @Input() habitacion: Habitacion|undefined;

  constructor(private dbser: DbHabitacionService) {}
  @Input() displayStyle = "none";
  
  closePopup() {
    this.habitacion = undefined
  }

  Update() {
    if (!this.habitacion) {
      return;
    }

    if (this.habitacion.tipo.trim().length === 0) {
      return;
    }

    this.dbser.UpdateHabitacion(this.habitacion.codigo,this.habitacion)
    this.habitacion = undefined;
  }

}
