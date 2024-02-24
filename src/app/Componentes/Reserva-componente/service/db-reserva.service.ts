import { Injectable } from '@angular/core';
import { Reserva } from '../Entidades/Reserva';

@Injectable({
  providedIn: 'root'
})
export class DbReservaService {


  constructor() { }
  private ListaReserva: Reserva[] = [
    {
      codigo: 0,
      nombreCliente: 'Jeremy',
      edadCliente: 21,
      lugar: 'Manta',
      tipoHabitacion: 'Sencilla',
      cantidadPersonas: 2,
      fechaIngreso: new Date('2024-02-23'),
      fechaSalida: new Date('2024-02-24'),
      costoTotal: 200,
    }
  ];

  get getListaReserva(): Reserva[] {
    return this.ListaReserva;
  }
  AddReserva(reserva: Reserva) {
    this.ListaReserva.push(reserva);
  }
  UpdateReserva(id: number, reserva: Reserva) {
    const index = this.ListaReserva.findIndex(reserva => reserva.codigo === id);
    if (index !== -1) {
      this.ListaReserva[index] = reserva;
    }
  }
  DeleteReserva(id: number) {
    const index = this.ListaReserva.findIndex(reserva => reserva.codigo === id);
    if (index !== -1) {
      this.ListaReserva.splice(index, 1);
    }
  }

  calcularTotal(reserva: Reserva): number {
    const dias = this.calcularDias(reserva.fechaIngreso, reserva.fechaSalida);
    const costoPorDia = this.obtenerCostoPorDia(reserva.lugar, reserva.tipoHabitacion);
    const total = dias * costoPorDia;
    return total - (total * this.calcularDescuento(reserva));
  }

  // calcularTotal(reserva: Reserva): number {
  //   const dias = this.calcularDias(reserva.fechaIngreso, reserva.fechaSalida);
  //   const costoPorDia = this.obtenerCostoPorDia(reserva.lugar, reserva.tipoHabitacion);
  //   const total = dias * costoPorDia;
  //   return total - (total * this.calcularDescuento(reserva));
  // }

  calcularDescuento(reserva: Reserva): number {
    const edad = reserva.edadCliente;
    var des = Number();
    if (edad >= 18) {
      return des = 0.3;
    } else if (edad < 5) {
      return des = 0.2;
    }
    return 0;
  }

  private calcularDias(fechaInicio: Date, fechaFin: Date): number {
    const unDia = 24 * 60 * 60 * 1000; // milisegundos en un día
    return Math.round(Math.abs((fechaFin.getTime() - fechaInicio.getTime()) / unDia));
  }

  private obtenerCostoPorDia(lugar: string, tipoHabitacion: string): number {
    // Aquí podrías implementar la lógica para obtener el costo por día
    // según el tipo de habitación, por ejemplo, consultando una base de datos o un servicio externo.
    // Por simplicidad, lo definiremos de forma estática.
    switch (lugar) {
      case 'Salinas':
        switch (tipoHabitacion) {
          case 'Matrimonial':
            return 50;
          case 'Sencilla':
            return 70;
          case 'Multiple':
            return 30;
          default:
            return 0;
        }
      case 'Manta':
        switch (tipoHabitacion) {
          case 'Matrimonial':
            return 60;
          case 'Sencilla':
            return 100;
          case 'Multiple':
            return 80;
          default:
            return 0;
        }
      case 'Atacames':
        switch (tipoHabitacion) {
          case 'Matrimonial':
            return 40;
          case 'Multiple':
            return 20;
          default:
            return 0;
        }
      default:
        return 0;
    }
  }


}
