import { Component, Input } from '@angular/core';
import { Chofer } from '../Entidades/Chofer';
import { DbChoferService } from '../Service/db-chofer.service';

@Component({
  selector: 'app-modificar-chofer',
  templateUrl: './modificar-chofer.component.html',
  styleUrl: './modificar-chofer.component.css'
})
export class ModificarChoferComponent {
  @Input() chofer: Chofer|undefined;

  constructor(private dbser: DbChoferService) {}
  @Input() displayStyle = "none";
  
  closePopup() {
    this.chofer = undefined
  }

  Update() {
    if (!this.chofer) {
      return;
    }

    if (this.chofer.Nombre.trim().length === 0) {
      return;
    }

    this.dbser.UpdateChofer(this.chofer.Codigo,this.chofer)
    this.chofer = undefined;
  }

}
