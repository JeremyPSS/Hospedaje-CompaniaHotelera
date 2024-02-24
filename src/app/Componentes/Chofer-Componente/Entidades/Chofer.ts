export class Chofer {
  Codigo: number;
  Cedula: string;
  Nombre: string;
  Apellido: string;
  Sexo: string;
  FechaNacimiento: string;
  Licencia: string;
  AniosExperiencia: number;
  

  constructor(cod:number, ced:string, nom:string, ape:string, sex:string, fecn:string, lic:string, aniex:number) {
    this.Codigo = cod;
    this.Cedula = ced;
    this.Nombre = nom;
    this.Apellido = ape;
    this.Sexo = sex;
    this.FechaNacimiento = fecn;
    this.Licencia = lic;
    this.AniosExperiencia = aniex;
  }

  

}
