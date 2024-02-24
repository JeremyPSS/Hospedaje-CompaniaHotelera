import { Component, Input } from '@angular/core';
import { Chofer } from '../Entidades/Chofer';
import { DbChoferService } from '../Service/db-chofer.service';

@Component({
  selector: 'app-insertar-chofer',
  templateUrl: './insertar-chofer.component.html',
  styleUrl: './insertar-chofer.component.css'
})
export class InsertarChoferComponent {
  constructor(private dbser: DbChoferService)
  {

  }
  @Input() nuevo: Chofer = {
    Codigo: 0,
    Cedula: '',
    Nombre: '',
    Apellido: '',
    Sexo: '',
    FechaNacimiento: '',
    Licencia: '',
    AniosExperiencia: 0,
  };
  @Input() displayStyle = "none";
  
  closePopup() {
    this.displayStyle = "none";
  }
  Insert() 
  {
    console.log(this.nuevo);
    if (this.nuevo.Nombre.trim().length === 0) {
      return;
    }
    this.dbser.AddChofer(this.nuevo);
    this.nuevo = {
      Codigo: 0,
      Cedula: '',
      Nombre: '',
      Apellido: '',
      Sexo: '',
      FechaNacimiento: '',
      Licencia: '',
      AniosExperiencia: 0,
    };
  }
  
  
}
