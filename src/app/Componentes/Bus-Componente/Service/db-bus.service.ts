import { Injectable } from '@angular/core';
import { Bus } from '../Entidades/Bus';

@Injectable({
  providedIn: 'root'
})
export class DbBusService {

  constructor() { }
  private ListaBuses: Bus[] = [
    {
      codigo: 1,
      placa: 'ABC-123',
      tipo: 'urbano',
      base: 'base1',
      estado: 'Libre'
    },
    {
      codigo: 2,
      placa: 'CDE-123',
      tipo: 'rural',
      base: 'base2',
      estado: 'Mantenimiento'
    },
    {
      codigo: 3,
      placa: 'FGH-123',
      tipo: 'urbano',
      base: 'base3',
      estado: 'Libre'
    },
    {
      codigo: 4,
      placa: 'IJK-123',
      tipo: 'rural',
      base: 'base4',
      estado: 'Mantenimiento'
  }];
  
  get getListaBuses():Bus[]
    {
      return this.ListaBuses;
    }
    AddBus(bus:Bus)
  {
    this.ListaBuses.push(bus);
  }
  UpdateBus(id:number, bus:Bus)
  {
    const index = this.ListaBuses.findIndex(bus=>bus.codigo === id);
    if(index !==-1)
    {
      this.ListaBuses[index]=bus;
    }
  }
  DeleteBus(id:number )
  {
    const index = this.ListaBuses.findIndex(bus=>bus.codigo === id);
    if(index !==-1)
    {
      this.ListaBuses.splice(index, 1);
    }
  }
}
