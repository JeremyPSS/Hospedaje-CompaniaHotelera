export class Habitacion {
    tipo: string;
    camas: number;
    costoPersona: number;
    disponible: boolean = true;

    constructor(tip:string, cam:number, costoPersona:number, dis:boolean){
        this.tipo = tip;
        this.camas = cam;
        this.costoPersona = costoPersona;
        this.disponible = dis;
    }

}