import { Component, Input } from '@angular/core';
import { Reserva } from '../Entidades/Reserva';
import { DbReservaService } from '../service/db-reserva.service';

@Component({
  selector: 'app-insertar-reserva',
  templateUrl: './insertar-reserva.component.html',
  styleUrl: './insertar-reserva.component.css'
})
export class InsertarReservaComponent {
  constructor(private dbser: DbReservaService) {

  }
  @Input() nuevo: Reserva = {
    codigo: 0,
    nombreCliente: '',
    edadCliente: 0,
    lugar: '',
    tipoHabitacion: '',
    cantidadPersonas: 0,
    fechaIngreso: new Date(),
    fechaSalida: new Date(),
    costoTotal: 0,
  };


  @Input() displayStyle = "none";

  closePopup() {
    this.displayStyle = "none";
  }
  Insert() {
    console.log(this.nuevo);
    if (this.nuevo.nombreCliente.trim().length === 0) {
      return;
    }
    this.nuevo.fechaIngreso = new Date(this.nuevo.fechaIngreso.toString()); 
    this.nuevo.fechaSalida = new Date(this.nuevo.fechaSalida.toString());
    
    this.nuevo.costoTotal = this.dbser.calcularTotal(this.nuevo);
    this.dbser.AddReserva(this.nuevo);


    this.nuevo = {
      codigo: 0,
      nombreCliente: '',
      edadCliente: 0,
      lugar: '',
      tipoHabitacion: '',
      cantidadPersonas: 0,
      fechaIngreso: new Date(),
      fechaSalida: new Date(),
      costoTotal: 0,
    };
  }
}
