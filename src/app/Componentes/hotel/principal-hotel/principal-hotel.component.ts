import { Component } from '@angular/core';
import { Hotel } from '../Entidades/Hotel';

@Component({
  selector: 'app-principal-hotel',
  templateUrl: './principal-hotel.component.html',
  styleUrl: './principal-hotel.component.css'
})
export class PrincipalHotelComponent {

  showInsertar: boolean = false;
  editar: Hotel|undefined = undefined;

  toggleInsertarForm(){
    this.showInsertar = !this.showInsertar;
    this.editar = undefined;

  }

  cargarEditar(hotel: Hotel){
    this.editar = hotel;
    this.showInsertar = false;
  }
  constructor()
  {
    
  }

}
