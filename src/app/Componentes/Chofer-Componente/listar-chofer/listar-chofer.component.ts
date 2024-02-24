import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Chofer } from '../Entidades/Chofer';
import { DbChoferService } from '../Service/db-chofer.service';

@Component({
  selector: 'app-listar-chofer',
  templateUrl: './listar-chofer.component.html',
  styleUrl: './listar-chofer.component.css'
})
export class ListarChoferComponent implements OnInit 
{ 
  @Output() editarClienteEvent = new EventEmitter<Chofer>();
  get ListaChofer() 
  {
    return this.obs.getListaChofer;
  }
  EditarChofer(chofer:Chofer)
  {
    this.editarClienteEvent.emit(chofer);
  }
  EliminarChofer(chofer:Chofer)
  {
    this.obs.DeleteChofer(chofer.Codigo);
  }

    constructor(private obs:DbChoferService)
    {

    }
    ngOnInit():void{
        

    }
  
  

}
 