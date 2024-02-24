import { EventEmitter, Injectable, Output } from '@angular/core';
import { Chofer } from '../Entidades/Chofer';

@Injectable({
  providedIn: 'root'
})
export class DbChoferService {
  
  constructor() { }
  private ListaChoferes: Chofer[] = [
    {
      Codigo: 1,
      Cedula: '0706238227',
      Nombre: 'Bruno',
      Apellido: 'Diaz',
      Sexo:'M',
      FechaNacimiento: '1980-02-07',
      Licencia:'B',
      AniosExperiencia: 5
    },
    {
      Codigo: 2,
      Cedula: '0706238228',
      Nombre: 'Estafani',
      Apellido: 'Orellana',
      Sexo:'F',
      FechaNacimiento: '1980-02-07',
      Licencia:'D',
      AniosExperiencia: 3
    }];
  
   get getListaChofer():Chofer[]
    {
      return this.ListaChoferes;
    }
    AddChofer(chofer:Chofer)
  {
    this.ListaChoferes.push(chofer);
  }
  UpdateChofer(id:number, chofer:Chofer)
  {
    const index = this.ListaChoferes.findIndex(chofer=>chofer.Codigo === id);
    if(index !==-1)
    {
      this.ListaChoferes[index]=chofer;
    }
  }
  DeleteChofer(id:number )
  {
    const index = this.ListaChoferes.findIndex(chofer=>chofer.Codigo === id);
    if(index !==-1)
    {
      this.ListaChoferes.splice(index, 1);
    }
  }
}
