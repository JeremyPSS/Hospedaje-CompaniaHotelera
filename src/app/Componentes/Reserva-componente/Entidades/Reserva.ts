import { DbReservaService } from "../service/db-reserva.service";

export class Reserva {
    codigo: number;
    nombreCliente: string;
    edadCliente: number;
    lugar: string;
    tipoHabitacion: string;
    cantidadPersonas: number;
    fechaIngreso: Date;
    fechaSalida: Date;
    costoTotal: number;

    constructor(cod:number,nom:string,edad:number, lug:string, tip:string,cant:number, fechai:Date, fechas:Date, cos:number){
        this.codigo = cod;
        this.nombreCliente = nom;
        this.edadCliente = edad;
        this.lugar = lug;
        this.tipoHabitacion = tip;
        this.cantidadPersonas = cant;
        this.fechaIngreso = fechai;
        this.fechaSalida = fechas;
        this.costoTotal = cos;

    }

}