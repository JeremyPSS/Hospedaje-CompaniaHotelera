import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarChoferComponent } from './Componentes/Chofer-Componente/listar-chofer/listar-chofer.component';
import { InsertarChoferComponent } from './Componentes/Chofer-Componente/insertar-chofer/insertar-chofer.component';
import { ModificarChoferComponent } from './Componentes/Chofer-Componente/modificar-chofer/modificar-chofer.component';
import { PrincipalChoferComponent } from './Componentes/Chofer-Componente/principal-chofer/principal-chofer.component';
import { FormsModule } from '@angular/forms';
import { InsertarBusComponent } from './Componentes/Bus-Componente/insertar-bus/insertar-bus.component';
import { ModificarBusComponent } from './Componentes/Bus-Componente/modificar-bus/modificar-bus.component';
import { ListarBusComponent } from './Componentes/Bus-Componente/listar-bus/listar-bus.component';
import { PrincipalBusComponent } from './Componentes/Bus-Componente/principal-bus/principal-bus.component';
import { ToolBarComponent } from './Componentes/tool-bar/tool-bar.component';
import { InsertarHabitacionComponent } from './Componentes/Habitacion-componente/insertar-habitacion/insertar-habitacion.component';
import { ListarHabitacionComponent } from './Componentes/Habitacion-componente/listar-habitacion/listar-habitacion.component';
import { ModificarHabitacionComponent } from './Componentes/Habitacion-componente/modificar-habitacion/modificar-habitacion.component';
import { PrincipalHabitacionComponent } from './Componentes/Habitacion-componente/principal-habitacion/principal-habitacion.component';
import { InsertarReservaComponent } from './Componentes/Reserva-componente/insertar-reserva/insertar-reserva.component';
import { ModificarReservaComponent } from './Componentes/Reserva-componente/modificar-reserva/modificar-reserva.component';
import { ListarReservaComponent } from './Componentes/Reserva-componente/listar-reserva/listar-reserva.component';
import { PrincipalReservaComponent } from './Componentes/Reserva-componente/principal-reserva/principal-reserva.component';
import { InsertarHotelComponent } from './Componentes/hotel/insertar-hotel/insertar-hotel.component';
import { ListarHotelComponent } from './Componentes/hotel/listar-hotel/listar-hotel.component';
import { InsertarHbComponent } from './Componentes/habitacion/insertar-hb/insertar-hb.component';
import { ListarHbComponent } from './Componentes/habitacion/listar-hb/listar-hb.component';
import { ModificarHbComponent } from './Componentes/habitacion/modificar-hb/modificar-hb.component';
import { PrincipalHbComponent } from './Componentes/habitacion/principal-hb/principal-hb.component';
import { PrincipalHotelComponent } from './Componentes/hotel/principal-hotel/principal-hotel.component';
import { ModificarHotelComponent } from './Componentes/hotel/modificar-hotel/modificar-hotel.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    ListarChoferComponent,
    InsertarChoferComponent,
    ModificarChoferComponent,
    PrincipalChoferComponent,
    InsertarBusComponent,
    ModificarBusComponent,
    ListarBusComponent,
    PrincipalBusComponent,
    ToolBarComponent,
    InsertarHabitacionComponent,
    ListarHabitacionComponent,
    ModificarHabitacionComponent,
    PrincipalHabitacionComponent,
    InsertarReservaComponent,
    ModificarReservaComponent,
    ListarReservaComponent,
    PrincipalReservaComponent,
    InsertarHotelComponent,
    ListarHotelComponent,
    InsertarHbComponent,
    ListarHbComponent,
    ModificarHbComponent,
    PrincipalHbComponent,
    PrincipalHotelComponent,
    ModificarHotelComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
