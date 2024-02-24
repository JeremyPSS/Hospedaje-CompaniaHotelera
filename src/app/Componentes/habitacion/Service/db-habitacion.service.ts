import { Injectable } from '@angular/core';
import { Habitacion } from '../Entidades/Habitacion';

@Injectable({
  providedIn: 'root'
})
export class DbHabitacionService {

  constructor() { }

  private ListaHb: Habitacion[] = [];
  
  get getListaHb():Habitacion[]
  {
    return this.ListaHb;
  }
  
  AddHabitacion(habitacion: Habitacion)
  {
    this.ListaHb.push(habitacion);
  }
  UpdateHabitacion(id:number, habitacion: Habitacion)
  {
    const index = this.ListaHb.findIndex(hb=>habitacion.codigo === id);
    if(index !==-1)
    {
      this.ListaHb[index]=habitacion;
    }
  }
  DeleteHabitacion(id:number )
  {
    const index = this.ListaHb.findIndex(hb=>hb.codigo === id);
    if(index !==-1)
    {
      this.ListaHb.splice(index, 1);
    }
  }
}
