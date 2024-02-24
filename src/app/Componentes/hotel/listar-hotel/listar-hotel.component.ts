import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Hotel } from '../Entidades/Hotel';
import { DbHotelService } from '../Service/db-hotel.service';

@Component({
  selector: 'app-listar-hotel',
  templateUrl: './listar-hotel.component.html',
  styleUrl: './listar-hotel.component.css'
})
export class ListarHotelComponent implements OnInit {

  @Output() editarClienteEvent = new EventEmitter<Hotel>();
  get ListaHotel() 
  {
    return this.obs.getListaHotel;
  }
  EditarChofer(hotel:Hotel)
  {
    this.editarClienteEvent.emit(hotel);
  }
  EliminarChofer(hotel:Hotel)
  {
    this.obs.DeleteHotel(hotel.codigo);
  }

    constructor(private obs:DbHotelService)
    {

    }
    ngOnInit():void{
        

    }

}
