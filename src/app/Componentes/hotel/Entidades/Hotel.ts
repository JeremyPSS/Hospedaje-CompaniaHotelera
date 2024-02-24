// import { Habitacion } from "../../habitacion/Entidades/Habitacion";

// export interface Hotel {
//     codigo: number;
//     lugar: string;
//     habitaciones: Habitacion[];
//}
export class Hotel{
    codigo:number;
    lugar:string;
    habitacion:string;
    camas:number;
    disponile:boolean;

    constructor(cod:number,lugar:string,habitacion:string, cama:number,dispon:boolean){
        this.codigo=cod;
        this.lugar=lugar;
        this.habitacion=habitacion;
        this.camas=cama;
        this.disponile=dispon;
    }
}