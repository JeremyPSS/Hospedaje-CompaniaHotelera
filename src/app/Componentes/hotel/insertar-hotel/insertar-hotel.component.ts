import { Component, Input } from '@angular/core';
import { DbHotelService } from '../Service/db-hotel.service';
import { Hotel } from '../Entidades/Hotel';
import { Habitacion } from '../../habitacion/Entidades/Habitacion';
import { DbHabitacionService } from '../../habitacion/Service/db-habitacion.service';

@Component({
  selector: 'app-insertar-hotel',
  templateUrl: './insertar-hotel.component.html',
  styleUrl: './insertar-hotel.component.css'
})
export class InsertarHotelComponent {

  habitaciones: Habitacion[] = [];
  //habitacionPrueba: Habitacion[] = this.dbhab.getListaReserva;

  constructor(private dbser: DbHotelService) {

  }
  @Input() nuevo: Hotel = {
    codigo: 0,
    lugar: '',
    habitacion: '',
    camas: 0,
    disponile: true,
  };
  @Input() displayStyle = "none";

  closePopup() {
    this.displayStyle = "none";
  }
  Insert() {
    console.log(this.nuevo);
    if (this.nuevo.lugar.trim().length === 0) {
      return;
    }
    this.dbser.AddHotel(this.nuevo);
    this.nuevo = {
      codigo: 0,
      lugar: '',
      habitacion: '',
      camas: 0,
      disponile: true,
    };
  }

}
