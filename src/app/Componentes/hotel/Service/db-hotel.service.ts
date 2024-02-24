import { Injectable } from '@angular/core';
import { Hotel } from '../Entidades/Hotel';

@Injectable({
  providedIn: 'root'
})
export class DbHotelService {

  constructor() { }

  private ListaHotel: Hotel[] = [
    {
      codigo: 1,
      lugar: 'Salinas',
      habitacion: 'Matrimonial',
      camas: 2,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Salinas',
      habitacion: 'Sencilla',
      camas: 1,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Salinas',
      habitacion: 'Multiple',
      camas: 4,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Manta',
      habitacion: 'Matrimonial',
      camas: 2,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Manta',
      habitacion: 'Sencilla',
      camas: 1,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Manta',
      habitacion: 'Multiple',
      camas: 3,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Atacanes',
      habitacion: 'Matrimonial',
      camas: 2,
      disponile: true,
    },
    {
      codigo: 1,
      lugar: 'Atacanes',
      habitacion: 'Multiple',
      camas: 6,
      disponile: true,
    }
];
  
  get getListaHotel():Hotel[]
  {
    return this.ListaHotel;
  }
  
  AddHotel(hotel: Hotel)
  {
    this.ListaHotel.push(hotel);
  }
  UpdateHotel(id:number, hotel: Hotel)
  {
    const index = this.ListaHotel.findIndex(hotel=>hotel.codigo === id);
    if(index !==-1)
    {
      this.ListaHotel[index]=hotel;
    }
  }
  DeleteHotel(id:number )
  {
    const index = this.ListaHotel.findIndex(hotel=>hotel.codigo === id);
    if(index !==-1)
    {
      this.ListaHotel.splice(index, 1);
    }
  }
}
