import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalBusComponent } from './Componentes/Bus-Componente/principal-bus/principal-bus.component';
import { PrincipalChoferComponent } from './Componentes/Chofer-Componente/principal-chofer/principal-chofer.component';
import { PrincipalHotelComponent } from './Componentes/hotel/principal-hotel/principal-hotel.component';
import { PrincipalHbComponent } from './Componentes/habitacion/principal-hb/principal-hb.component';
import { PrincipalReservaComponent } from './Componentes/Reserva-componente/principal-reserva/principal-reserva.component';

const routes: Routes = [
  { path: 'hotelP', component:PrincipalHotelComponent},
  { path: 'habitacion', component:PrincipalHbComponent},
  { path: 'reservas', component:PrincipalReservaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
