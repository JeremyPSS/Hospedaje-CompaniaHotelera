import { Component, Input } from '@angular/core';
import { DbHotelService } from '../Service/db-hotel.service';
import { Hotel } from '../Entidades/Hotel';
import { Habitacion } from '../../habitacion/Entidades/Habitacion';

@Component({
  selector: 'app-modificar-hotel',
  templateUrl: './modificar-hotel.component.html',
  styleUrl: './modificar-hotel.component.css'
})
export class ModificarHotelComponent {

  habitaciones: Habitacion[] = [];

  @Input() hotel: Hotel|undefined;

  constructor(private dbser: DbHotelService) {}
  @Input() displayStyle = "none";
  
  closePopup() {
    this.hotel = undefined
  }

  Update() {
    if (!this.hotel) {
      return;
    }

    if (this.hotel.lugar.trim().length === 0) {
      return;
    }

    this.dbser.UpdateHotel(this.hotel.codigo,this.hotel)
    this.hotel = undefined;
  }

}
