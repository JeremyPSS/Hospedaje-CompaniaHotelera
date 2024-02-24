export class Bus{
    codigo: number;
    placa: string;
    tipo: string;
    base: string;
    estado: string;

    constructor(cod:number, ced:string, nom:string,ape:string, fecn:string){
        this.codigo = cod;
        this.placa = ced;
        this.tipo = nom;
        this.base = ape;
        this.estado = fecn;
    }
}